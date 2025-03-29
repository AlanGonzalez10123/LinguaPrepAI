import whisper
from app.config import whisper_model

def transcribe_audio(file_path: str) -> str:
    """
    Transcribe audio using OpenAI Whisper
    """
    result = whisper_model.transcribe(file_path, fp16=False)

    return result["text"]