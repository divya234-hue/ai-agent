from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router
from app.core.config import settings
from app.core.middleware import RequestLoggingMiddleware

app = FastAPI(title="AI Engineer Multi-Agent Assistant", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.parsed_backend_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(RequestLoggingMiddleware)

app.include_router(router)


@app.get('/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}
