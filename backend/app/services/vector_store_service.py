documents = []


def add_document(
    document_id: str,
    text: str,
    metadata: dict = {}
):

    documents.append({
        "document_id": document_id,
        "text": text,
        "metadata": metadata
    })


def search_documents(
    query: str,
    top_k: int = 5
):

    query_terms = query.lower().split()

    results = []

    for doc in documents:

        text_lower = doc["text"].lower()

        score = sum(
            1 for term in query_terms
            if term in text_lower
        )

        results.append({
            "document_id": doc["document_id"],
            "text": doc["text"],
            "metadata": doc["metadata"],
            "semantic_distance": 0.0,
            "keyword_score": score,
            "hybrid_score": score,
            "source": doc["metadata"].get(
                "source",
                "internal_knowledge"
            )
        })

    results.sort(
        key=lambda item: item["hybrid_score"],
        reverse=True
    )

    return results[:top_k]
