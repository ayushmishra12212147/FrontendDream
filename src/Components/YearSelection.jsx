/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import ImageRoll from './ImageRoll';

function YearSelection({ setSelectedYear }) {
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    setSelectedYear(year);
    navigate('/subjects'); // Redirect to the subjects page
  };

  return (
    <div>
      <ImageRoll></ImageRoll>
      
      <h1>Select Year</h1>

      <button onClick={() => handleYearClick(1)}>Year 1</button>
      <button onClick={() => handleYearClick(2)}>Year 2</button>
      <button onClick={() => handleYearClick(3)}>Year 3</button>
      <button onClick={() => handleYearClick(4)}>Year 4</button>
      
    </div>
  );
}

export default YearSelection;
