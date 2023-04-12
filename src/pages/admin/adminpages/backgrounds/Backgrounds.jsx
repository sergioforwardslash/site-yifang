import React, { useState, useEffect } from 'react';
import './backgrounds.css';
import { images } from '../../../../constants';
import { Link } from 'react-router-dom';
export let currentBackground ;

const Backgrounds = () => {
  let [selectedBackground, setSelectedBackground] = useState(images.background);
  const [customBackgrounds, setCustomBackgrounds] = useState([]);

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
    currentBackground = background;
  };

  const handleUpload = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setCustomBackgrounds((prevCustomBackgrounds) => [
        ...prevCustomBackgrounds,
        reader.result,
      ]);
    };
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    document.body.style.backgroundSize = '100%';
  }, [selectedBackground]);

console.log(currentBackground)
console.log(images.background)

  return (
    <div className="bMain">
      <h1>
        <center>
          <div>Background/Theme Changes</div>
          <li><a href='/admin'>Admin Dash</a></li>
        </center>
      </h1>
      <center>
        <button
          style={{ backgroundImage: `url(${images.background})` }}
          onClick={() => handleBackgroundChange(images.background)}
        >
          <img className='imagePreview' src={images.background} alt="Background 1" />
        </button>
        <button
          style={{ backgroundImage: `url(${images.wild})` }}
          onClick={() => handleBackgroundChange(images.wild)}
        >
          <img className='imagePreview' src={images.wild} alt="Background 2" />
        </button>
        <button
          style={{ backgroundImage: `url(${images.flowers})` }}
          onClick={() => handleBackgroundChange(images.flowers)}
        >
          <img className='imagePreview' src={images.flowers} alt="Background 3" />
        </button>
        <button
          style={{ backgroundImage: `url(${images.beach})` }}
          onClick={() => handleBackgroundChange(images.beach)}
        >
          <img className='imagePreview' src={images.beach} alt="Background 4" />
        </button>
        {customBackgrounds.map((background, index) => (
          <button
            key={`custom-background-${index}`}
            style={{ backgroundImage: `url(${background})` }}
            onClick={() => handleBackgroundChange(background)}
          >
            <img className='imagePreview' src={background} alt={`Custom Background ${index}`} />
          </button>
        ))}


      </center>

      <div>
        <label htmlFor="file-upload">Upload a custom background:</label>
        <input id="file-upload" type="file" onChange={handleUpload} />
      </div>

    </div>
  );
};

export default Backgrounds;
