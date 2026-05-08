from app.services.workflow_engine import (
    create_workflow
)


def run_claim_triage_workflow(
    claim_data: dict
):

    workflow = create_workflow(
        workflow_type="claim_triage",
        payload=claim_data
    )

    severity = "low"

    if claim_data.get(
        "claim_amount",
        0
    ) > 10000:

        severity = "high"

    fraud_risk = "low"

    if claim_data.get(
        "prior_claims",
        0
    ) > 3:

        fraud_risk = "medium"

    return {
        "workflow": workflow,
        "severity": severity,
        "fraud_risk": fraud_risk,
        "recommended_action":
            "Assign adjuster"
    }
