import React, { useState } from 'react';
import './App.css';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  // Add more image filenames here
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <div className="carousel">
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default App;

