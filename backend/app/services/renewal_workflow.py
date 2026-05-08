from app.services.workflow_engine import (
    create_workflow
)


def run_policy_renewal_workflow(
    policy_data: dict
):

    workflow = create_workflow(
        workflow_type="policy_renewal",
        payload=policy_data
    )

    recommendations = []

    if policy_data.get(
        "premium",
        0
    ) > 5000:

        recommendations.append(
            "Recommend umbrella coverage"
        )

    if policy_data.get(
        "claims_last_year",
        0
    ) > 2:

        recommendations.append(
            "Flag for underwriting review"
        )

    return {
        "workflow": workflow,
        "recommendations": recommendations,
        "automation_status": "completed"
    }
