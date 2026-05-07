from app.services.openai_service import generate_ai_response


def summarize_policy(policy_data: dict):
    system_prompt = """
    You are an expert insurance policy analyst.
    Summarize the policy, identify coverage gaps, and recommend next actions.
    """

    user_prompt = f"""
    Analyze this insurance policy:

    {policy_data}
    """

    return generate_ai_response(
        system_prompt=system_prompt,
        user_prompt=user_prompt
    )


def reason_about_claim(claim_data: dict):
    system_prompt = """
    You are an expert insurance claims analyst.
    Analyze claim risk, reserve concerns, fraud indicators, and next actions.
    """

    user_prompt = f"""
    Analyze this insurance claim:

    {claim_data}
    """

    return generate_ai_response(
        system_prompt=system_prompt,
        user_prompt=user_prompt
    )


def summarize_document(document_data: dict):
    system_prompt = """
    You are an expert insurance document analyst.
    Summarize the document, identify important insurance information, and recommend actions.
    """

    user_prompt = f"""
    Analyze this insurance document metadata/content:

    {document_data}
    """

    return generate_ai_response(
        system_prompt=system_prompt,
        user_prompt=user_prompt
    )
