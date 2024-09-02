/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import useArticlesQuery from '../hooks/subData';

function SubjectList({ year, setSelectedSubject }) {
  const navigate = useNavigate();
  const { articles, isArticlesLoading, ArticlesError } = useArticlesQuery();
  
  console.log('Articles:', articles); // Check if articles are defined
  
  if (isArticlesLoading) return <p>Loading...</p>;
  if (ArticlesError) return <p>Error loading articles.</p>;

  // Filter subjects based on the selected year
  const filteredSubjects = articles?.filter(article => article.year === year);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    navigate('/quizzes'); // Redirect to the quizzes page
  };

  if (!filteredSubjects || filteredSubjects.length === 0) {
    return <p>No subjects available for the selected year.</p>;
  }

  return (
    <div>
      {filteredSubjects.map((subject) => (
        <div key={subject._id} onClick={() => handleSubjectClick(subject)}>
          <h2>{subject.subject_name}</h2>
        </div>
      ))}
    </div>
  );
}


export default SubjectList;
