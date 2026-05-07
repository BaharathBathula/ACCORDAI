# ACCORDAI Advanced RAG Architecture

## Purpose

ACCORDAI uses Retrieval-Augmented Generation to ground AI responses in insurance-specific knowledge.

## Retrieval Strategy

ACCORDAI supports hybrid retrieval:

- Semantic vector search
- Keyword relevance scoring
- Hybrid score ranking
- Source attribution
- Metadata-aware retrieval

## RAG Pipeline

1. Ingest insurance documents
2. Chunk documents
3. Generate embeddings
4. Store vectors and metadata
5. Retrieve relevant chunks
6. Score with semantic + keyword signals
7. Inject retrieved context into AI agents
8. Return attributed responses

## Current Components

- FAISS vector search
- SentenceTransformer embeddings
- Chunking service
- RAG API
- Multi-agent context injection

## Future Enhancements

- pgvector or Qdrant
- Persistent vector storage
- tenant-aware retrieval
- access-controlled retrieval
- document-level permissions
- source citations in AI responses
- hybrid BM25 + dense retrieval
- reranking models
