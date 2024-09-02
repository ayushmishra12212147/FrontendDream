/* eslint-disable react/prop-types */
import { useState } from 'react';

function QuizComponent({ quiz }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (questionIndex, selectedOption) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    quiz.questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correct_option) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  if (!quiz) {
    return <p>No quiz data available.</p>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <div>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <h3>{question.question_text}</h3>
            <div>
              {question.options.map((option, optionIndex) => {
                const isSelected = selectedOptions[index] === option;
                const isCorrectOption = option === question.correct_option;
                const optionClass = isSubmitted
                  ? isCorrectOption
                    ? 'correct'
                    : isSelected
                    ? 'incorrect'
                    : ''
                  : isSelected
                  ? 'selected'
                  : '';

                return (
                  <button
                    key={optionIndex}
                    className={`option ${optionClass}`}
                    onClick={() => handleOptionClick(index, option)}
                    disabled={isSubmitted}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!isSubmitted && (
        <button onClick={handleSubmit}>Submit</button>
      )}
      {isSubmitted && (
        <div>
          <p>Your score: {score} out of {quiz.questions.length}</p>
        </div>
      )}
      <style>
        {`
          .option {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            cursor: pointer;
            border-radius: 4px;
            background-color: white;
          }
          .selected {
            background-color: lightblue;
          }
          .correct {
            background-color: lightgreen;
            border-color: green;
          }
          .incorrect {
            background-color: lightcoral;
            border-color: red;
          }
          button:disabled {
            cursor: not-allowed;
          }
        `}
      </style>
    </div>
  );
}

export default QuizComponent;
