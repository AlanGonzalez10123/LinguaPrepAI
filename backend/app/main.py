from fastapi import FastAPI
from app.routes import translate, transcribe, generate_question

app = FastAPI()

# Include API routes
app.include_router(transcribe.router, prefix="/api", tags=["Transcription"])
app.include_router(translate.router, prefix="/api", tags=["Translation"])
app.include_router(generate_question.router, prefix="/api", tags=["Generate Behavioral Question"])

@app.get('/')
def read_root():
    return{"message": "Hello, FastAPI!"}