from fastapi import APIRouter, UploadFile, File
from app.services.whisper_service import transcribe_audio

router = APIRouter()

@router.post("/transcribe/")
async def transcribe(file: UploadFile = File(...)):
    """
    Receives an audio file and returns transcribed text
    """
    file_location = f"temp_{file.filename}"
    with open(file_location, "wb") as buffer:
        buffer.write(await file.read())

    transcription = transcribe_audio(file_location)
    
    return {"transcription": transcription}
