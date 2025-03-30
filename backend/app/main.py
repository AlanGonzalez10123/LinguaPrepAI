from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import translate, transcribe, generate_question, analyze

app = FastAPI()

# Allow CORS for specific origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change this to the origin of your frontend app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(transcribe.router, prefix="/api", tags=["Transcription"])
app.include_router(translate.router, prefix="/api", tags=["Translation"])
app.include_router(generate_question.router, prefix="/api", tags=["Generate Behavioral Question"])
app.include_router(analyze.router, prefix="/api", tags=["Analyze the user's response"])

@app.get('/')
def read_root():
    return{"message": "Hello, FastAPI!"}