from fastapi import APIRouter
from app.services.gemini_service import generate_questions

router = APIRouter()

@router.get("/question/")
def generate_question(text: str) -> str:
    """
    Uses Gemini to randomly generate a behavioral interview question 
    """

    question = generate_questions()

    return question

