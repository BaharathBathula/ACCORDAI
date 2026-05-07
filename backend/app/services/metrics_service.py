from datetime import datetime


metrics_store = {
    "requests": 0,
    "errors": 0,
    "ai_requests": 0,
    "claims_processed": 0,
    "policies_created": 0,
    "customers_created": 0,
    "start_time": str(datetime.utcnow())
}


def increment_metric(
    metric_name: str
):
    if metric_name in metrics_store:
        metrics_store[
            metric_name
        ] += 1


def get_metrics():
    return metrics_store
