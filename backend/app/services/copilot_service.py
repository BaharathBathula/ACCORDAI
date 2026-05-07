def generate_copilot_response(question: str, context: dict):

    lower_question = question.lower()

    if "renewal" in lower_question:
        answer = "I found upcoming renewal activity. Recommend reviewing high-premium policies and accounts with recent claims."

    elif "claim" in lower_question:
        answer = "Claims review shows open claims requiring reserve monitoring, adjuster follow-up, and possible fraud analysis."

    elif "coverage" in lower_question:
        answer = "Coverage analysis suggests checking rental reimbursement, roadside assistance, replacement cost, cyber liability, and umbrella coverage gaps."

    elif "customer" in lower_question:
        answer = "Customer intelligence indicates active accounts, renewal opportunities, and cross-sell recommendations."

    else:
        answer = "ACCORDAI Copilot can help with policies, claims, renewals, customers, workflows, and insurance intelligence."

    return {
        "agent": "ACCORDAI AI Copilot",
        "question": question,
        "answer": answer,
        "context_used": context,
        "recommended_actions": [
            "Review account details",
            "Check policy coverage gaps",
            "Create follow-up task",
            "Escalate if high risk"
        ]
    }
