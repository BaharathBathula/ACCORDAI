# ACCORDAI Production Readiness Checklist

## Frontend

- [ ] Configure production API URL
- [ ] Deploy frontend to Vercel
- [ ] Set environment variable: NEXT_PUBLIC_API_URL
- [ ] Verify login page
- [ ] Verify dashboard route protection
- [ ] Verify customer workflow
- [ ] Verify policy workflow
- [ ] Verify claims workflow

## Backend

- [ ] Deploy backend to Render, Railway, or AWS
- [ ] Configure DATABASE_URL
- [ ] Configure SECRET_KEY
- [ ] Configure OPENAI_API_KEY
- [ ] Configure OPENAI_MODEL
- [ ] Verify `/health`
- [ ] Verify `/docs`
- [ ] Verify authentication API
- [ ] Verify CRUD APIs
- [ ] Verify AI APIs

## Database

- [ ] Use managed PostgreSQL
- [ ] Run migrations
- [ ] Verify tables
- [ ] Verify seed data
- [ ] Enable backups
- [ ] Enable SSL

## Security

- [ ] Replace demo secret keys
- [ ] Restrict CORS
- [ ] Use HTTPS
- [ ] Secure environment variables
- [ ] Add role-based access enforcement
- [ ] Review authentication flows
- [ ] Add rate limiting

## AI

- [ ] Verify OpenAI API key
- [ ] Test AI Copilot
- [ ] Test multi-agent endpoint
- [ ] Test RAG ingestion
- [ ] Test semantic search
- [ ] Review fallback behavior

## Observability

- [ ] Add request logging
- [ ] Add error logging
- [ ] Add uptime monitoring
- [ ] Add API latency monitoring
- [ ] Add frontend error tracking
