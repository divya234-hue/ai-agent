# Deployment Guide

## Local Development
1. Start the backend:
   - cd backend
   - python -m venv .venv
   - .venv\\Scripts\\activate
   - pip install -r requirements.txt
   - uvicorn app.main:app --reload --port 8000
2. Start the frontend:
   - cd frontend
   - npm install
   - npm run dev

## Docker
```bash
docker compose up --build
```

## Production Checklist
- Set strong secrets in the environment
- Configure CORS origins
- Restrict file upload size and types
- Add database, Redis, and queue services for production scaling
- Enable monitoring and structured logging
