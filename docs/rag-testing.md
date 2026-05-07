# ACCORDAI RAG Testing Guide

## Ingest Test Document

POST `/rag/ingest`

```json
{
  "document_id": "commercial_auto_guide",
  "text": "Commercial auto insurance provides liability and physical damage coverage for business vehicles.",
  "metadata": {
    "source": "insurance_training_data",
    "document_type": "coverage_guide"
  }
}
