import os
import google.generativeai as genai
from dotenv import load_dotenv
import deepl
import whisper

load_dotenv()#load .env

#Gemini Config
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
gemini_model = genai.GenerativeModel("gemini-2.0-flash")

#DeepL Config
auth_key = os.environ["DEEPL_API_KEY"]
deepl_translator = deepl.Translator(auth_key)

#OpenAI Whisper Config
whisper_model = whisper.load_model("tiny")