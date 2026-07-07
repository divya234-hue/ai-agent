from pathlib import Path

from fastapi import APIRouter, UploadFile, File, HTTPException

from app.core.config import settings
from app.schemas.agent import AgentRunRequest, AgentRunResponse
from app.schemas.project import ProjectCreate, ProjectOut
from app.services.agent_service import agent_service
from app.services.project_service import project_service

router = APIRouter()


@router.get('/projects', response_model=list[ProjectOut])
def list_projects() -> list[ProjectOut]:
    return project_service.list_projects()


@router.post('/projects', response_model=ProjectOut, status_code=201)
def create_project(payload: ProjectCreate) -> ProjectOut:
    return project_service.create_project(payload)


@router.post('/uploads', response_model=dict[str, str])
def upload_file(file: UploadFile = File(...)) -> dict[str, str]:
    upload_dir = Path(settings.upload_dir)
    upload_dir.mkdir(parents=True, exist_ok=True)
    destination = upload_dir / file.filename
    content = file.file.read()
    destination.write_bytes(content)
    return {'filename': file.filename, 'path': str(destination)}


@router.post('/agents/run', response_model=AgentRunResponse)
def run_agents(payload: AgentRunRequest) -> AgentRunResponse:
    return agent_service.run_agents(payload)
