# ACCORDAI Kubernetes Deployment Guide

## Apply Manifests

```bash
kubectl apply -f k8s/

kubectl get pods

kubectl get svc

kubectl port-forward svc/accordai-backend 8000:8000

kubectl port-forward svc/accordai-frontend 3000:3000
