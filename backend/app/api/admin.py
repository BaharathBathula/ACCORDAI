from fastapi import (
    APIRouter,
    Depends
)

from app.dependencies.rbac import (
    require_permission
)

from app.services.audit_service import (
    log_audit_event
)

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/users")
def list_users(
    authorized: bool = Depends(
        require_permission(
            "manage_users"
        )
    )
):

    log_audit_event(
        user="admin",
        action="list_users",
        resource="users"
    )

    return {
        "users": [
            {
                "id": 1,
                "role": "admin"
            },
            {
                "id": 2,
                "role": "producer"
            }
        ]
    }
