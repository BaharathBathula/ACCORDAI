import faiss
import numpy as np

from sentence_transformers import SentenceTransformer


embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

dimension = 384

vector_index = faiss.IndexFlatL2(dimension)

documents = []


def add_document(
    document_id: str,
    text: str,
    metadata: dict = {}
):
    embedding = embedding_model.encode([text])

    vector_index.add(
        np.array(embedding).astype("float32")
    )

    documents.append({
        "document_id": document_id,
        "text": text,
        "metadata": metadata
    })


def keyword_score(
    query: str,
    text: str
):
    query_terms = query.lower().split()
    text_lower = text.lower()

    matches = sum(
        1 for term in query_terms
        if term in text_lower
    )

    return matches / max(len(query_terms), 1)


def search_documents(
    query: str,
    top_k: int = 5
):
    if len(documents) == 0:
        return []

    query_embedding = embedding_model.encode([query])

    distances, indices = vector_index.search(
        np.array(query_embedding).astype("float32"),
        top_k
    )

    results = []

    for rank, idx in enumerate(indices[0]):

        if idx < len(documents):

            doc = documents[idx]

            semantic_distance = float(
                distances[0][rank]
            )

            keyword_relevance = keyword_score(
                query,
                doc["text"]
            )

            hybrid_score = (
                (1 / (1 + semantic_distance)) * 0.7
            ) + (
                keyword_relevance * 0.3
            )

            results.append({
                "document_id": doc["document_id"],
                "text": doc["text"],
                "metadata": doc["metadata"],
                "semantic_distance": semantic_distance,
                "keyword_score": keyword_relevance,
                "hybrid_score": hybrid_score,
                "source": doc["metadata"].get(
                    "source",
                    "internal_knowledge"
                )
            })

    results.sort(
        key=lambda item: item["hybrid_score"],
        reverse=True
    )

    return results
