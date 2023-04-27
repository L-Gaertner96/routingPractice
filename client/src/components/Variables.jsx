import React from 'react';
import { useParams } from 'react-router-dom';

const Variables = () => {
  const { word, color, backGround } = useParams();

  return (
    <div>
      {
        isNaN(word)
        ?
          <h1 style={color ? { color: color, backgroundColor: backGround } : null}>
            The word is: "{word}"
          </h1>
        :
          <h1 style={color ? { color: color, backgroundColor: backGround } : null}>
            The number is: {word}
          </h1>
      }
    </div>
  );
};

export default Variables;