from app.services.vector_store_service import (
    add_document,
    search_documents
)

from app.services.chunking_service import (
    chunk_text
)


def ingest_document(
    document_id: str,
    text: str,
    metadata: dict = {}
):
    chunks = chunk_text(text)

    for index, chunk in enumerate(chunks):

        add_document(
            document_id=f"{document_id}_{index}",
            text=chunk,
            metadata=metadata
        )

    return {
        "status": "success",
        "chunks_created": len(chunks)
    }


def retrieve_context(
    query: str
):
    results = search_documents(query)

    return {
        "query": query,
        "results": results
    }
