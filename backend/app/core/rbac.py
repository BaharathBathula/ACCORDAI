ROLE_PERMISSIONS = {
    "admin": [
        "customers:read",
        "customers:write",
        "policies:read",
        "policies:write",
        "claims:read",
        "claims:write",
        "tasks:read",
        "tasks:write",
        "documents:read",
        "documents:write",
        "agencies:read",
        "agencies:write"
    ],
    "producer": [
        "customers:read",
        "customers:write",
        "policies:read",
        "policies:write",
        "tasks:read",
        "tasks:write"
    ],
    "csr": [
        "customers:read",
        "policies:read",
        "claims:read",
        "tasks:read",
        "documents:read"
    ],
    "claims_adjuster": [
        "claims:read",
        "claims:write",
        "documents:read",
        "tasks:read",
        "tasks:write"
    ]
}


def has_permission(role: str, permission: str):
    permissions = ROLE_PERMISSIONS.get(role, [])
    return permission in permissions
