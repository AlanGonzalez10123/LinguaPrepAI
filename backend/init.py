import os
import google.generativeai as genai
from dotenv import load_dotenv
import deepl
import whisper

load_dotenv()#load .env

#Gemini Config
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-2.0-flash")

#DeepL Config
auth_key = os.environ["DEEPL_API_KEY"]
translator = deepl.Translator(auth_key)

#OpenAI Whisper Config
whisper_model = whisper.load_model("tiny")

"""
Testing all configs
"""

response = model.generate_content("Generate one sentence about cats")
gemini_response = response.text

print("English Sentence: ", gemini_response)

result=translator.translate_text(gemini_response, target_lang="ES")
print("To Spanish Translation: ", result.text)

result = whisper_model.transcribe("spanish.mp3", fp16=False)
print(result["text"])