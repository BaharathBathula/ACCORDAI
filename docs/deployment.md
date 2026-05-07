## Environment Variables

Backend requires:

```env
DATABASE_URL=
SECRET_KEY=
ALGORITHM=
ACCESS_TOKEN_EXPIRE_MINUTES=
OPENAI_API_KEY=
OPENAI_MODEL=
```

## Production Considerations

Before production deployment:

- Replace default secrets
- Use managed PostgreSQL
- Enable HTTPS
- Configure CORS
- Add authentication middleware
- Add observability
- Add CI/CD pipelines
- Add database migrations
- Add tenant isolation

## Recommended Deployment Architecture

Frontend:

- Vercel

Backend:

- Render, Railway, AWS ECS, or AWS App Runner

Database:

- Managed PostgreSQL using Supabase, Neon, Render PostgreSQL, AWS RDS, or Railway PostgreSQL

AI Services:

- OpenAI API
- Future vector database deployment using Pinecone, Weaviate, Qdrant, or pgvector

## Deployment Flow

1. Deploy PostgreSQL database
2. Deploy backend API
3. Configure backend environment variables
4. Verify backend `/health`
5. Deploy frontend
6. Configure frontend `NEXT_PUBLIC_API_URL`
7. Test login and core workflows
8. Validate AI endpoints
