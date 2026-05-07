from pydantic import BaseModel


class DocumentCreate(BaseModel):
    file_name: str
    document_type: str
    uploaded_by: str
    customer_name: str
    ai_summary: str = ""
    status: str = "uploaded"


class DocumentResponse(DocumentCreate):
    id: int

    class Config:
        from_attributes = True
