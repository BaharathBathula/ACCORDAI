from fastapi import FastAPI
from app.clients.routes import router as clients_router

app = FastAPI(
    title="ACCORDAI",
    version="0.1.0",
    description="Modern AI-powered Agency Management System (AMS)"
)

app.include_router(clients_router)

@app.get("/health")
def health_check():
    return {"status": "ok"}
