import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import ProgressTrackingPage from './pages/ProgressTrackingPage'; // ✅ Import the Progress Tracking Page
import ResourcesPage from './pages/ResourcesPage'; // ✅ Import the Resources Page
import Header from './components/Header'; // ✅ Import the Header
import LandingPage from './pages/LandingPage'; // Import the Landing Page

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Header always shows on top */}
      <div style={{ paddingTop: "70px" }}> {/* Adds spacing under fixed header */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as default route */}
          <Route path="/home" element={<HomePage />} /> {/* Add route for HomePage */}
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/progress" element={<ProgressTrackingPage />} /> {/* ✅ Add route for Progress Tracking Page */}
          <Route path="/resources" element={<ResourcesPage />} /> {/* ✅ Add route for Resources Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

