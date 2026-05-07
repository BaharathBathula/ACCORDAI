from fastapi import (
    HTTPException,
    Depends
)

from app.services.authorization_service import (
    has_permission
)


def require_permission(
    permission: str
):

    def permission_checker():

        user_role = "admin"

        if not has_permission(
            user_role,
            permission
        ):

            raise HTTPException(
                status_code=403,
                detail="Permission denied"
            )

        return True

    return permission_checker
