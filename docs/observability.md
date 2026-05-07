# ACCORDAI Observability Guide

## Local Observability

Start services:

```bash
docker-compose up --build
```

## Prometheus

Open:

```text
http://localhost:9090
```

## Grafana

Open:

```text
http://localhost:3001
```

Default Grafana login:

```text
admin / admin
```

## Metrics Endpoint

ACCORDAI backend exposes metrics at:

```text
http://localhost:8000/metrics
```

## Recommended Dashboards

- API performance
- AI operations
- Background jobs
- Claims workflows
- Redis and PostgreSQL health
- Kubernetes pod health

## Future Enhancements

- OpenTelemetry traces
- Grafana Tempo
- Loki logs
- Alertmanager
- AI cost monitoring
