const LanguageSelector = ({ onSelect }) => {
    const languages = ["English", "Español", "Français"];
  
    return (
      <div>
        {languages.map((lang) => (
          <button key={lang} onClick={() => onSelect(lang)}>
            {lang}
          </button>
        ))}
      </div>
    );
  };
  
  export default LanguageSelector;
  