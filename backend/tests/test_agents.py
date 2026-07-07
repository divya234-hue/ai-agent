from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_agents_run_endpoint_returns_summary():
    response = client.post('/agents/run', json={'goal': 'Ship a new feature', 'context': 'API docs'})
    assert response.status_code == 200
    assert response.json()['status'] == 'completed'
