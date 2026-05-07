from enum import Enum


class UserRole(str, Enum):

    ADMIN = "admin"

    PRODUCER = "producer"

    CSR = "csr"

    UNDERWRITER = "underwriter"

    CLAIMS = "claims"

    ANALYST = "analyst"

    VIEWER = "viewer"
