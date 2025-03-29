from fastapi import FastAPI
from app.routes import translate, transcribe

app = FastAPI()

# Include API routes
app.include_router(transcribe.router, prefix="/api", tags=["Transcription"])
app.include_router(translate.router, prefix="/api", tags=["Translation"])

@app.get('/')
def read_root():
    return{"message": "Hello, FastAPI!"}