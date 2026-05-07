# ACCORDAI Kubernetes Deployment Guide

## Apply Manifests

```bash
kubectl apply -f k8s/
```

## Verify Pods

```bash
kubectl get pods
```

## Verify Services

```bash
kubectl get svc
```

## Port Forward Backend

```bash
kubectl port-forward svc/accordai-backend 8000:8000
```

Backend API:

http://localhost:8000

## Port Forward Frontend

```bash
kubectl port-forward svc/accordai-frontend 3000:3000
```

Frontend:

http://localhost:3000

## Production Notes

For production:

- Use managed PostgreSQL instead of in-cluster PostgreSQL
- Use managed Redis instead of in-cluster Redis
- Store secrets in Kubernetes Secrets
- Add Ingress controller
- Add TLS certificates
- Add Horizontal Pod Autoscaler
- Add centralized logging and monitoring
