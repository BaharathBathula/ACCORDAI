from pydantic import BaseModel


class TaskCreate(BaseModel):
    title: str
    description: str
    priority: str = "medium"
    status: str = "open"
    assigned_to: str
    due_date: str


class TaskResponse(TaskCreate):
    id: int

    class Config:
        from_attributes = True
