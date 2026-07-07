# AI Engineer Multi-Agent Assistant

A production-ready AI platform for AI/ML engineers to plan, research, code, debug, test, document, and manage projects with multiple collaborating agents.

## Highlights
- Modular FastAPI backend with clean architecture
- React + TypeScript + Tailwind frontend
- Multi-agent orchestration for planning, research, coding, documentation, debugging, testing, reporting, and learning
- File upload support, memory, project tracking, and analytics dashboard
- Dockerized development and deployment workflow

## Quick start

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Architecture
- Backend: FastAPI, Pydantic, JWT, file storage, in-memory orchestration
- Frontend: React, TypeScript, Zustand, React Query, Tailwind, Framer Motion
- Infrastructure: Docker Compose, GitHub Actions CI, environment-based configuration
