import { useState, useEffect } from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import AudioRecorder from "../components/AudioRecorder";
import FeedbackBox from "../components/FeedbackBox";

const InterviewPage = () => {
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");

  const getInterviewQuestion = async () => {
    try{
      const response = await fetch("http://127.0.0.1:8000/api/question");
      const data = response.json();
      
      return data

    }catch(err){
      console.log("Encountered an error: ", err)
    }
  }

  useEffect(() => {
    const lang = localStorage.getItem("selectedLanguage") || "English";
    const mockQuestions = {
      English: "Tell me about yourself.",
      Español: "Háblame de ti.",
      Français: "Parlez-moi de vous.",
    };
    setQuestion(getInterviewQuestion());
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
