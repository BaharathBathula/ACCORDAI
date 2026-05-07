from datetime import datetime

from app.core.logger import logger


def log_audit_event(
    user: str,
    action: str,
    resource: str
):

    audit_record = {
        "timestamp":
            str(datetime.utcnow()),

        "user":
            user,

        "action":
            action,

        "resource":
            resource
    }

    logger.info(
        f"AUDIT EVENT: {audit_record}"
    )

    return audit_record
