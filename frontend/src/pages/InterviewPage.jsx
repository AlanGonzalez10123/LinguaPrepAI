import { useState, useEffect } from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import AudioRecorder from "../components/AudioRecorder";
import FeedbackBox from "../components/FeedbackBox";

const InterviewPage = () => {
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("selectedLanguage") || "English";
    const mockQuestions = {
      English: "Tell me about yourself.",
      Español: "Háblame de ti.",
      Français: "Parlez-moi de vous.",
    };
    setQuestion(mockQuestions[lang]);
  }, []);

  const handleFakeTranscript = () => {
    const mockFeedback = "Good answer! Try elaborating on your experience.";
    setFeedback(mockFeedback);
  };

  return (
    <div className="container"> {/* ✅ Container added */}
      <QuestionDisplay question={question} />
      <AudioRecorder onTranscript={handleFakeTranscript} />
      {feedback && <FeedbackBox feedback={feedback} />}
    </div>
  );
};

export default InterviewPage;
