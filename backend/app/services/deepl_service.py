from app.config import deepl_translator

def translate_text(text: str) -> str:
    """
    Receives text in any language and translates it to english
    """
    
    result = deepl_translator.translate_text(text, target_lang="EN")

    return result.text