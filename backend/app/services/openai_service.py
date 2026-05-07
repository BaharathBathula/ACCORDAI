from openai import OpenAI
from app.core.config import settings

client = OpenAI(
    api_key=settings.OPENAI_API_KEY
)


def generate_ai_response(system_prompt: str, user_prompt: str):
    if not settings.OPENAI_API_KEY:
        return {
            "provider": "fallback",
            "response": "OpenAI API key is not configured. Using ACCORDAI fallback intelligence."
        }

    response = client.chat.completions.create(
        model=settings.OPENAI_MODEL,
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ],
        temperature=0.2
    )

    return {
        "provider": "openai",
        "model": settings.OPENAI_MODEL,
        "response": response.choices[0].message.content
    }
