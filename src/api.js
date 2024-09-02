// api.js
import axios from 'axios';

export const submitQuiz = (quizData) => {
  return axios.post('/api/quizzes', quizData)
    .then((response) => {
      console.log('Quiz submitted successfully:', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('Error submitting quiz:', error);
      throw error;
    });
};
