import { useState } from 'react';
import "../components/LetterToColor.css"


function LetterToColor() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };
const getBackgruondColor = (textLength) => {
  if (textLength < 3) {
    return 'white';
  } else if (textLength < 6) {
   return 'yellow';
  } else if (textLength < 9) {
    return 'green';
  } else {
   return 'red';
  }
}
  const backgroundColor = getBackgruondColor(text.length);

  

  return (
    <div className='output'  style={{ backgroundColor }}>
      <label>
        Text:
        <input type="text" value={text} onChange={handleInputChange} />
      </label>
    </div>
  );
}



export default LetterToColor;
