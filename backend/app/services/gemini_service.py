from app.config import gemini_model
from google.generativeai import types

def generate_questions() -> str:
    """
    Use Gemini AI to create behavioral interview questions that should be answered using the STAR method
    """

    prompt = "Develop A SINGULAR behavioral interview question that YOU will ask someone as part of their job" \
    " interview preparation. The question should be one where the user is expected to answer using the STAR " \
    "(Situation, Task, Action, Results) method. Be creative and ask unique questions that cause the user to think deeply in order to answer. However," \
    "DO NOT USE OVERLY COMPLICATED JARGAIN. The question should still be simple to understand" \
    "ONLY REPLY WITH THE QUESTION. DO NOT INCLUDE ANY OTHER EXTRANEOUS INFORMATION. DO NOT INCLUDE ANY ESCAPE SEQUENCES IN YOUR REPLY."


    response = gemini_model.generate_content(
        contents=[prompt],
        generation_config=types.GenerationConfig(
            max_output_tokens=100,
            temperature=2.0
    )
    )

    return response.text