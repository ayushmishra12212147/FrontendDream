/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

function QuizList({ subject, setSelectedQuiz }) {
  const navigate = useNavigate();

  if (!subject || !subject.quizzes || subject.quizzes.length === 0) {
    return <p>No quizzes available for the selected subject.</p>;
  }

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
    navigate('/quiz'); // Redirect to the quiz component
  };

  return (
    <div>
      {subject.quizzes.map((quiz) => (
        <div key={quiz._id} onClick={() => handleQuizClick(quiz)}>
          <button>{quiz.title}</button>
          <p>{quiz.created_at}</p>
        </div>
      ))}
    </div>
  );
}

export default QuizList;
