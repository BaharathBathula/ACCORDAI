ROLE_PERMISSIONS = {

    "admin": [
        "manage_users",
        "manage_policies",
        "manage_claims",
        "manage_documents",
        "view_analytics"
    ],

    "producer": [
        "manage_policies",
        "view_analytics"
    ],

    "csr": [
        "manage_customers",
        "manage_documents"
    ],

    "underwriter": [
        "manage_policies",
        "view_analytics"
    ],

    "claims": [
        "manage_claims"
    ],

    "analyst": [
        "view_analytics"
    ],

    "viewer": []
}
