from app.services.vector_store_service import (
    add_document,
    search_documents
)

from app.services.chunking_service import chunk_text


def ingest_document(
    document_id: str,
    text: str,
    metadata: dict = {}
):
    chunks = chunk_text(text)

    for index, chunk in enumerate(chunks):

        chunk_metadata = {
            **metadata,
            "parent_document_id": document_id,
            "chunk_index": index,
            "source": metadata.get(
                "source",
                "internal_knowledge"
            )
        }

        add_document(
            document_id=f"{document_id}_{index}",
            text=chunk,
            metadata=chunk_metadata
        )

    return {
        "status": "success",
        "document_id": document_id,
        "chunks_created": len(chunks)
    }


def retrieve_context(
    query: str,
    top_k: int = 5
):
    results = search_documents(
        query=query,
        top_k=top_k
    )

    return {
        "query": query,
        "retrieval_strategy": "hybrid_semantic_keyword",
        "results": results,
        "sources": [
            {
                "document_id": item["document_id"],
                "source": item["source"],
                "score": item["hybrid_score"]
            }
            for item in results
        ]
    }


def build_rag_prompt(
    query: str,
    retrieved_context: dict
):
    context_text = "\n\n".join(
        [
            item["text"]
            for item in retrieved_context.get(
                "results",
                []
            )
        ]
    )

    return f"""
User Question:
{query}

Retrieved Insurance Knowledge:
{context_text}

Answer using only relevant retrieved context when possible.
Mention uncertainty if context is insufficient.
"""
