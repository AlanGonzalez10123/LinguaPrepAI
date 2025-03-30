from fastapi import APIRouter, Body
from app.services.deepl_service import translate_text

router = APIRouter()

@router.post("/translate/")
def translate(
    text: str = Body(..., embed=True),
    lang: str = Body(..., embed=True)
):
    """
    Receives text and a target language, translates it, and returns the translation.
    """
    translation = translate_text(text, lang)
    return {"translation": translation}
