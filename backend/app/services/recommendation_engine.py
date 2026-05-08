def generate_recommendations(
    entity_type: str,
    payload: dict
):

    recommendations = []

    if entity_type == "customer":

        premium = payload.get("total_premium", 0)

        policies = payload.get("policies", [])

        if premium > 10000:

            recommendations.append({
                "type": "high_value_account",
                "priority": "high",
                "message": "High-value customer account. Recommend proactive producer review."
            })

        if "auto" in policies and "umbrella" not in policies:

            recommendations.append({
                "type": "cross_sell",
                "priority": "medium",
                "message": "Customer has auto coverage but no umbrella policy. Recommend umbrella cross-sell."
            })

        if "home" in policies and "cyber" not in policies:

            recommendations.append({
                "type": "cross_sell",
                "priority": "medium",
                "message": "Customer has homeowners coverage. Recommend personal cyber coverage review."
            })

    elif entity_type == "policy":

        premium = payload.get("premium", 0)

        claims_last_year = payload.get("claims_last_year", 0)

        if premium > 5000:

            recommendations.append({
                "type": "renewal_review",
                "priority": "high",
                "message": "Policy premium is high. Recommend remarketing before renewal."
            })

        if claims_last_year > 2:

            recommendations.append({
                "type": "underwriting_review",
                "priority": "high",
                "message": "Multiple claims detected. Recommend underwriting review."
            })

    elif entity_type == "claim":

        reserve = payload.get("reserve_amount", 0)

        prior_claims = payload.get("prior_claims", 0)

        if reserve > 10000:

            recommendations.append({
                "type": "severity_review",
                "priority": "high",
                "message": "Claim reserve exceeds standard threshold. Recommend adjuster escalation."
            })

        if prior_claims > 3:

            recommendations.append({
                "type": "fraud_review",
                "priority": "high",
                "message": "Prior claim activity is elevated. Recommend fraud risk review."
            })

    if not recommendations:

        recommendations.append({
            "type": "standard_review",
            "priority": "low",
            "message": "No major risk or opportunity detected."
        })

    return {
        "entity_type": entity_type,
        "recommendations": recommendations,
        "recommendation_count": len(recommendations)
    }
