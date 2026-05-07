from app.core.permissions import (
    ROLE_PERMISSIONS
)


def has_permission(
    role: str,
    permission: str
):

    permissions = ROLE_PERMISSIONS.get(
        role,
        []
    )

    return permission in permissions
