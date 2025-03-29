from app.config import deepl_translator

def translate_text(text: str) -> str:
    """
    Receives text in any language and translates it to english
    """
    # Clean up the input by removing excessive whitespace, commas, colons, and semicolons
    text = " ".join(text.replace(",", "").replace(":", "").replace(";", "").split())

    result = deepl_translator.translate_text(text, target_lang="EN-US")

    return result.text