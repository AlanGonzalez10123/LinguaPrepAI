import { useState, useEffect } from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import AudioRecorder from "../components/AudioRecorder";
import FeedbackBox from "../components/FeedbackBox";

const InterviewPage = () => {
  const [question, setQuestion] = useState("");
  const [feedback, setFeedback] = useState("");

  // Fetch the interview question
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/question");
        const data = await response.json();
        setQuestion(data); // Ensure correct question format
      } catch (err) {
        console.error("Error fetching question:", err);
      }
    };

    fetchQuestion();
  }, []);

  // Handle audio upload and full analysis workflow
  const handleAudioUpload = async (audioBlob) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.mp3");

    try {
      // Step 1: Transcribe Audio
      const transcribeResponse = await fetch("http://127.0.0.1:8000/api/transcribe/", {
        method: "POST",
        body: formData,
      });

      if (!transcribeResponse.ok) {
        throw new Error("Transcription failed");
      }

      const transcribeData = await transcribeResponse.json();
      const transcript = transcribeData.transcription;

      console.log("Transcribed Text:", transcript);

      // Step 2: Analyze Answer
      const analyzeResponse = await fetch(
        `http://127.0.0.1:8000/api/analyze/?question=${encodeURIComponent(question)}&input=${encodeURIComponent(transcript)}`
      );

      if (!analyzeResponse.ok) {
        throw new Error("Analysis failed");
      }

      const analysisData = await analyzeResponse.json();
      const analysisFeedback = analysisData;

      console.log("Analysis Feedback:", analysisFeedback);

      // Step 3: Translate Feedback
      const translateResponse = await fetch("http://127.0.0.1:8000/api/translate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: analysisFeedback, lang: "ES" }), // Default language: Spanish
      });

      if (!translateResponse.ok) {
        throw new Error("Translation failed");
      }

      const translateData = await translateResponse.json();
      const translatedFeedback = translateData.translation;

      console.log("Translated Feedback:", translatedFeedback);

      // Step 4: Update feedback state with translated feedback
      setFeedback(translatedFeedback);
    } catch (error) {
      console.error("Error processing audio:", error);
    }
  };

  return (
    <div className="container">
      <QuestionDisplay question={question} />
      <AudioRecorder onAudioUpload={handleAudioUpload} />
      {feedback && <FeedbackBox feedback={feedback} />} 
    </div>
  );
};

export default InterviewPage;
