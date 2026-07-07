from app.schemas.project import ProjectCreate, ProjectOut


class ProjectService:
    def __init__(self) -> None:
        self._projects: list[ProjectOut] = []

    def list_projects(self) -> list[ProjectOut]:
        return self._projects

    def create_project(self, payload: ProjectCreate) -> ProjectOut:
        project = ProjectOut(id=len(self._projects) + 1, **payload.model_dump())
        self._projects.append(project)
        return project


project_service = ProjectService()
