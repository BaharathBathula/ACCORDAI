from fastapi import APIRouter

from app.schemas.recommendation import (
    RecommendationRequest
)

from app.services.recommendation_engine import (
    generate_recommendations
)

router = APIRouter(
    prefix="/recommendations",
    tags=["Recommendations"]
)


@router.post("/generate")
def generate(
    request: RecommendationRequest
):

    return generate_recommendations(
        entity_type=request.entity_type,
        payload=request.payload
    )
