import faiss
import numpy as np

from sentence_transformers import (
    SentenceTransformer
)


embedding_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

dimension = 384

vector_index = faiss.IndexFlatL2(
    dimension
)

documents = []


def add_document(
    document_id: str,
    text: str,
    metadata: dict = {}
):
    embedding = embedding_model.encode(
        [text]
    )

    vector_index.add(
        np.array(embedding).astype("float32")
    )

    documents.append({
        "document_id": document_id,
        "text": text,
        "metadata": metadata
    })


def search_documents(
    query: str,
    top_k: int = 3
):
    if len(documents) == 0:
        return []

    query_embedding = embedding_model.encode(
        [query]
    )

    distances, indices = vector_index.search(
        np.array(query_embedding).astype(
            "float32"
        ),
        top_k
    )

    results = []

    for idx in indices[0]:

        if idx < len(documents):

            results.append(
                documents[idx]
            )

    return results
