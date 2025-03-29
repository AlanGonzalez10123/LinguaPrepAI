from fastapi import APIRouter
from app.services.gemini_service import analyze_response

router = APIRouter()

@router.get("/analyze/")
def generate_question(question: str, input: str) -> str:
    """
    Uses Gemini to randomly generate a behavioral interview question 
    """

    analysis = analyze_response(question, input)

    return analysis

