import { useState } from 'react';
import "../components/LetterToColor.css"


function LetterToColor() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  let backgroundColor;

  if (text.length < 3) {
    backgroundColor = 'white';
  } else if (text.length < 6) {
    backgroundColor = 'yellow';
  } else if (text.length < 9) {
    backgroundColor = 'green';
  } else {
    backgroundColor = 'red';
  }

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
