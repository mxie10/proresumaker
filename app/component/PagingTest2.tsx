import React, { useState } from 'react';

function PagingTest2() {
  const [text, setText] = useState('');
  const [divs, setDivs] = useState([{ id: 0, text: '' }]);

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);

    const lastDiv = divs[divs.length - 1];
    const divElement = document.getElementById(`div-${lastDiv.id}`);

    if (divElement) {
      const { width, height } = divElement.getBoundingClientRect();
      const dummyDiv = document.createElement('div');
      dummyDiv.style.width = width + 'px';
      dummyDiv.style.whiteSpace = 'pre-wrap';
      dummyDiv.textContent = lastDiv.text + newText;

      divElement.parentNode?.appendChild(dummyDiv); // Append to the parent of the div

      if (dummyDiv.offsetHeight > height) {
        const newDiv = { id: lastDiv.id + 1, text: newText };
        setDivs([...divs, newDiv]);
        setText('');
      } else {
        const updatedDivs = divs.slice(0, divs.length - 1);
        updatedDivs.push({ ...lastDiv, text: newText });
        setDivs(updatedDivs);
      }

      divElement.parentNode?.removeChild(dummyDiv); // Remove from the parent
    }
  };

  return (
    <div className="App">
      {divs.map((div) => (
        <div
          key={div.id}
          id={`div-${div.id}`} // Added an ID to each div for reference
          className="text-container"
          style={{ width: '200px', height: '300px', border: '1px solid black', overflow: 'auto' }}
        >
          {div.text}
        </div>
      ))}
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text..."
        style={{ marginTop: '10px', width: '200px' }}
      />
    </div>
  );
}

export default PagingTest2;
