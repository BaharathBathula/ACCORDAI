from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.models.task import Task

from app.schemas.task import (
    TaskCreate,
    TaskResponse
)

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)


@router.post("/", response_model=TaskResponse)
def create_task(
    task: TaskCreate,
    db: Session = Depends(get_db)
):
    new_task = Task(**task.model_dump())

    db.add(new_task)

    db.commit()

    db.refresh(new_task)

    return new_task


@router.get("/", response_model=list[TaskResponse])
def list_tasks(
    db: Session = Depends(get_db)
):
    return db.query(Task).all()


@router.get("/{task_id}", response_model=TaskResponse)
def get_task(
    task_id: int,
    db: Session = Depends(get_db)
):
    return (
        db.query(Task)
        .filter(Task.id == task_id)
        .first()
    )
