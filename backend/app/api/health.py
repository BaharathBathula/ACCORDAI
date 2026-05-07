from fastapi import APIRouter

from datetime import datetime

from app.services.metrics_service import (
    get_metrics
)

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)


@router.get("/")
def health_check():

    return {
        "status": "healthy",

        "service":
            "ACCORDAI Backend",

        "timestamp":
            str(datetime.utcnow()),

        "metrics":
            get_metrics()
    }
