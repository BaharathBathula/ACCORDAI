from app.services.openai_service import generate_ai_response


def generate_copilot_response(question: str, context: dict):

    system_prompt = """
    You are ACCORDAI AI Copilot, an expert insurance agency management assistant.

    You help insurance agencies with:
    - customers
    - policies
    - claims
    - renewals
    - coverage gaps
    - document intelligence
    - workflow tasks
    - operational recommendations

    Give clear, professional, insurance-domain responses.
    """

    user_prompt = f"""
    User Question:
    {question}

    Business Context:
    {context}
    """

    ai_result = generate_ai_response(
        system_prompt=system_prompt,
        user_prompt=user_prompt
    )

    return {
        "agent": "ACCORDAI AI Copilot",
        "question": question,
        "answer": ai_result["response"],
        "provider": ai_result["provider"],
        "recommended_actions": [
            "Review customer account",
            "Analyze related policies",
            "Check claims history",
            "Create follow-up task"
        ]
    }
