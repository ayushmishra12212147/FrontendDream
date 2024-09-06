import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YearSelection from './Components/YearSelection';
import SubjectList from './Components/SubjectList';
import QuizList from './Components/QuizList';
import QuizComponent from './Components/QuizComponent';
import './App.css';

function App() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<YearSelection setSelectedYear={setSelectedYear} />}
        />
        <Route
          path="/subjects"
          element={<SubjectList year={selectedYear} setSelectedSubject={setSelectedSubject} />}
        />
        <Route
          path="/quizzes"
          element={<QuizList subject={selectedSubject} setSelectedQuiz={setSelectedQuiz} />}
        />
        <Route
          path="/quiz"
          element={<QuizComponent quiz={selectedQuiz} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
