from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_uploads_endpoint_accepts_files():
    response = client.post(
        '/uploads',
        files={'file': ('notes.txt', b'hello world', 'text/plain')},
    )
    assert response.status_code == 200
    assert response.json()['filename'] == 'notes.txt'
