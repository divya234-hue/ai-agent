from pydantic import BaseModel, Field


class AgentPlan(BaseModel):
    goal: str = Field(min_length=1)
    steps: list[str]
    estimated_hours: int = Field(ge=1)


class AgentRunRequest(BaseModel):
    goal: str = Field(min_length=1)
    context: str = Field(default='')


class AgentRunResponse(BaseModel):
    summary: str
    plan: list[str]
    status: str
