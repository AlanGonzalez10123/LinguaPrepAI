from fastapi import APIRouter
from app.services.deepl_service import translate_text

router = APIRouter()

@router.post("/translate/")
def translate(text: str, lang: str) -> str:
    """
    Receives a text file and translates it to english
    """

    translation = translate_text(text, lang)

    return translation

