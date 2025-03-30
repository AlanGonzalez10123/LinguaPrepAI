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

def analyze_response(question: str, input: str) -> str:
    """
    Use Gemini AI to analyze the user's response to the given interview question.
    """
    prompt = f'You asked the user this behavioral interview question: {question}. The answer the user gave was: {input}. '\
            'Analyze their input to the question and give them feeback on their answer. Ensure the feedback includes: ' \
            '(1) How well they used the STAR method to answer their question' \
            '(2) Any grammar or speach mistakes they may have made.' \
            '(3) Does their answer clearly explain the situation, task, action, and result?' \
            '(4) Did their response directly address the question asked?' \
            '(5) Did they describe what they DID? As in talking about their experiences and actions over just what happened.' \
            'make sure your reply IS DIRECTLY TO THE USER, this means your reply should be a dialogue to them.' \
            'Additionally, for more context, the user is a non-native English speaker. Therefore, you should also ' \
            'provide feedback on their use of language, including whether they used any wording that is not industry standard,' \
            ' overly casual, or unclear. Suggest more professional or commonly used alternatives where appropriate.'
    
    
    response = gemini_model.generate_content(
        contents=[prompt],
        generation_config=types.GenerationConfig(
            temperature=1.0
    )
    )

    return response.text