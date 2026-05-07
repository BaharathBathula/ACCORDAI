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
