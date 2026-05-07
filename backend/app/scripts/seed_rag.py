from app.services.rag_service import (
    ingest_document
)

insurance_knowledge = """
Commercial General Liability policies provide coverage
for bodily injury, property damage, and personal injury
claims arising from business operations.

Workers Compensation insurance provides wage replacement
and medical benefits to employees injured during employment.

Commercial Auto insurance provides liability and physical
damage coverage for vehicles used in business operations.

Professional Liability insurance protects businesses against
errors, omissions, and negligence claims.
"""

ingest_document(
    document_id="insurance_knowledge_base",
    text=insurance_knowledge,
    metadata={
        "type": "insurance_knowledge"
    }
)

print(
    "Insurance RAG knowledge base seeded."
)
