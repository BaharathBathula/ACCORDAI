def analyze_claim_fraud(claim_data: dict):

    risk_score = 0
    insights = []

    reserve = claim_data.get(
        "reserve_amount",
        0
    )

    claim_type = claim_data.get(
        "claim_type",
        ""
    ).lower()

    if reserve > 10000:
        risk_score += 25
        insights.append(
            "Claim reserve exceeds normal threshold."
        )

    if "injury" in claim_type:
        risk_score += 20
        insights.append(
            "Bodily injury claims require elevated review."
        )

    if "collision" in claim_type:
        risk_score += 15
        insights.append(
            "Collision loss pattern detected."
        )

    if risk_score >= 50:
        insights.append(
            "Recommend SIU or adjuster escalation."
        )

    return {
        "risk_score": risk_score,
        "fraud_risk_level": (
            "high"
            if risk_score >= 50
            else "moderate"
        ),
        "insights": insights
    }
