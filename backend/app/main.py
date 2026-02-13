from fastapi import FastAPI

app = FastAPI(
    title="ACCORDAI",
    version="0.1.0",
    description="Modern AI-powered Agency Management System (AMS)"
)

@app.get("/health")
def health_check():
    return {"status": "ok"}
