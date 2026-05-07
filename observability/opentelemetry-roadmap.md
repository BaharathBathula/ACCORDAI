# ACCORDAI OpenTelemetry Roadmap

## Goal

Add distributed tracing across ACCORDAI services.

## Planned Trace Coverage

- Frontend requests
- FastAPI routes
- PostgreSQL queries
- Redis operations
- Celery background jobs
- OpenAI API calls
- LangGraph agent execution
- RAG retrieval workflows

## Trace Attributes

- tenant_id
- user_id
- endpoint
- request_id
- agent_name
- job_id
- latency_ms
- error_type

## Future Stack

- OpenTelemetry SDK
- OTLP exporter
- Grafana Tempo
- Jaeger
- Prometheus metrics
