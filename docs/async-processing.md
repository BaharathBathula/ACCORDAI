# ACCORDAI Async Processing Architecture

ACCORDAI uses Redis and Celery to support scalable asynchronous background processing.

## Use Cases

- AI document analysis
- Claims fraud scoring
- Policy intelligence processing
- Long-running AI workflows
- Notification dispatch
- Batch processing

## Components

- Redis: message broker and result backend
- Celery Worker: background task executor
- FastAPI Jobs API: queues and tracks jobs

## Job Endpoints

| Endpoint | Method | Description |
|---|---|---|
| /jobs/document-analysis | POST | Queue document AI analysis |
| /jobs/fraud-analysis | POST | Queue claim fraud scoring |
| /jobs/policy-analysis | POST | Queue policy intelligence analysis |
| /jobs/{job_id} | GET | Check job status |

## Local Run

Start all services:

```bash
docker-compose up --build
