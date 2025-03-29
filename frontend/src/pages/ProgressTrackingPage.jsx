import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressTrackingPage.css';

const ProgressTrackingPage = () => {
  const [progress, setProgress] = useState({
    resume: false,
    skillsAssessment: false,
    mockInterviews: false,
  });

  const [practiceDays, setPracticeDays] = useState(new Set());
  const [interviewDate, setInterviewDate] = useState(null);
  const [practicePercent, setPracticePercent] = useState(0);

  const toggleProgress = (key) => {
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const onDateClick = (date) => {
    const dateString = date.toDateString();
    if (dateString === interviewDate?.toDateString()) {
      alert("This date is already set as your interview date.");
      return;
    }

    setPracticeDays((prevDays) => {
      const newDays = new Set(prevDays);
      if (newDays.has(dateString)) {
        newDays.delete(dateString);
      } else {
        newDays.add(dateString);
      }
      calculateProgressPercent(newDays, interviewDate);
      return newDays;
    });
  };

  const calculateProgressPercent = (practiceDays, interviewDate) => {
    if (!interviewDate) return;
    const today = new Date();
    const totalDays = Math.ceil((interviewDate - today) / (1000 * 60 * 60 * 24));
    const practicedDaysCount = practiceDays.size;
    const percent = Math.min((practicedDaysCount / totalDays) * 100, 100);
    setPracticePercent(percent);
  };

  return (
    <div className="progress-tracking">
      <h2>Interview Readiness Dashboard</h2>
      <ul>
        <li className={progress.resume ? 'completed' : ''}>
          <span>Resume Created</span>
          <button onClick={() => toggleProgress('resume')}>
            {progress.resume ? 'Reset' : 'Complete'}
          </button>
        </li>
        <li className={progress.skillsAssessment ? 'completed' : ''}>
          <span>Skills Assessment Completed</span>
          <button onClick={() => toggleProgress('skillsAssessment')}>
            {progress.skillsAssessment ? 'Reset' : 'Complete'}
          </button>
        </li>
        <li className={progress.mockInterviews ? 'completed' : ''}>
          <span>Mock Interviews</span>
          <button onClick={() => toggleProgress('mockInterviews')}>
            {progress.mockInterviews ? 'Reset' : 'Complete'}
          </button>
        </li>
      </ul>

      <div className="visual-progress-container">
        <div className="calendar-progress-section">
          <div className="section-title">
            <h3>Practice Calendar & Interview Date</h3>
          </div>
          <Calendar
            onClickDay={(date) => {
              if (window.confirm("Do you want to set this as your interview date? Click 'Cancel' to mark it as a practice day.")) {
                setInterviewDate(date);
                calculateProgressPercent(practiceDays, date);
              } else {
                onDateClick(date);
              }
            }}
            tileClassName={({ date }) => {
              if (date.toDateString() === interviewDate?.toDateString()) {
                return 'interview-day';
              }
              return practiceDays.has(date.toDateString()) ? 'practiced-day' : null;
            }}
          />
        </div>

        <div className="calendar-progress-section">
          <div className="section-title">
            <h3>Practice Progress</h3>
          </div>
          <div className="progress-bar-wrapper">
            <CircularProgressbar
              value={practicePercent}
              text={`${Math.round(practicePercent)}%`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${practicePercent / 100})`,
                textColor: '#3f3f3f',
                trailColor: '#d6d6d6',
              })}
              strokeWidth={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPage;
