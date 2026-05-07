def analyze_policy(policy_data: dict):

    insights = []

    premium = policy_data.get("premium", 0)

    if premium > 5000:
        insights.append(
            "Premium exceeds standard threshold. Recommend remarketing review."
        )

    line = policy_data.get("line_of_business", "").lower()

    if "auto" in line:
        insights.append(
            "Verify rental reimbursement and roadside assistance coverage."
        )

    if "property" in line:
        insights.append(
            "Review replacement cost and catastrophe coverage limits."
        )

    if not insights:
        insights.append(
            "No major AI recommendations identified."
        )

    return {
        "policy_number": policy_data.get("policy_number"),
        "ai_insights": insights,
        "risk_score": 72
    }
