# ACCORDAI Alerting Rules

## Backend Alerts

- API error rate > 5%
- API P95 latency > 2 seconds
- Health endpoint failing
- Authentication failures spike

## AI Alerts

- OpenAI API failures
- AI request latency > 10 seconds
- RAG search failures
- Multi-agent workflow failures

## Worker Alerts

- Celery queue backlog high
- Worker unavailable
- Background job failures > threshold
- Fraud analysis jobs delayed

## Infrastructure Alerts

- Redis unavailable
- PostgreSQL unavailable
- Kubernetes pod crash loop
- CPU usage > 80%
- Memory usage > 80%

## Business Workflow Alerts

- Claims processing failures
- Policy analysis failures
- Document ingestion failures
- Renewal workflow failures
