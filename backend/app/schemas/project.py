from pydantic import BaseModel, Field


class ProjectCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str = Field(default='')
    category: str = Field(default='general')


class ProjectOut(BaseModel):
    id: int
    name: str
    description: str
    category: str
