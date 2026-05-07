# ACCORDAI Tenant Security Model

## Multi-Tenant Goals

ACCORDAI is designed as a multi-tenant SaaS platform.

Each agency should have:

- isolated customers
- isolated policies
- isolated claims
- isolated AI workflows
- isolated document storage

## Planned Tenant Isolation

- tenant_id on all records
- row-level security
- tenant-aware JWT claims
- tenant-specific AI context
- tenant audit logs

## Planned Security Enhancements

- SSO / SAML
- MFA
- SCIM provisioning
- API keys
- OAuth2 enterprise integrations
- IP allowlists
- encryption at rest
- encryption in transit

## Compliance Targets

- SOC 2
- HIPAA (optional workflows)
- PCI DSS
- GDPR
