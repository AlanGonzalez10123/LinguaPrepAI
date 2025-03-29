import LanguageSelector from "../components/LanguageSelector";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    localStorage.setItem("selectedLanguage", language);
    navigate("/interview");
  };

  return (
    <div className="container"> {/* ✅ container added here */}
      <div className="home-page">
        <h1>🎙️ Multilingual AI Interview Coach</h1>
        <LanguageSelector onSelect={handleLanguageSelect} />
      </div>
    </div>
  );
};

export default HomePage;

