import React, { useState, useRef } from 'react';
import Canvas from 'canvas';
import Popup from './Popup';
import Hi from './images/Hi.jpg';
import dogs from './images/dogs.jpg';
import laugh from './images/laugh.jpg'; 
import food from './images/food.jpg'; 
import muscle from './images/muscle.jpg'; 
import guitar from './images/guitar.jpg';
import travel from './images/Travelling.jpg';
import trekking from './images/trekking.jpg';
import wroclaw from './images/wroclaw.jpg';


const ImageBlender = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [blendedImage, setBlendedImage] = useState(null);
  const canvasRef = useRef();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const [currentConv, setCurrentConv] = useState(1);
  const images =[Hi,dogs,laugh,trekking,food,muscle,travel,guitar];
  const coversation = ["Hey!! :)",
                        "Hope your week is going great...FYI you got a dog lover here!",
                        "Be the greatest genetic perfection you were meant to be!! ;)",
                        "We can go on a trek/hike someday! We can also be fitness partners :)",
                        "Will be flattered to have dinner with you!!",
                        "How about friday evening at 6?",
                        "Ping me on LinkedIn, we can exchange our numbers and decide on friday's plan!",
                        "Till then,if I find a guitar I will sing for you! \n Will need more time to complete the website :)"];


  const changeImage = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
  };
  const changeConv= () => {
    const newIndex = (currentConv + 1) % coversation.length;
    setCurrentConv(newIndex);
  };

  function clickSlide(){
    changeImage();
    changeConv();
  }
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const nextPopup = () => {
    setPopupOpen(false);
  };

  const blendImages = () => {
    if (!image1 || !image2) {
      alert('Please upload both images');
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const img1 = new Canvas.Image();
    img1.src = image1;

    const img2 = new Canvas.Image();
    img2.src = image2;

    context.drawImage(img1, 0, 0, canvas.width, canvas.height);
    context.globalAlpha = 0.5;
    context.drawImage(img2, 0, 0, canvas.width, canvas.height);

    const blendedImageData = canvas.toDataURL('image/png');
    setBlendedImage(blendedImageData);
  };

  return (
    <div>
      {/* <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage1(URL.createObjectURL(e.target.files[0]))}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage2(URL.createObjectURL(e.target.files[1]))}
      />
      */}
      <button onClick={openPopup} style={{color: 'white', backgroundColor: 'black', width:"30%"}}> <img src={wroclaw} style={{width:"100%"}}></img>Guess how our son and daughter will look like</button>

<Popup isOpen={isPopupOpen} closePopup={closePopup}>
  <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} style={{width:"50%"}}/>
  <h3>{coversation[currentConv]}</h3>
<button onClick={clickSlide} style={{color: 'white', backgroundColor: 'black'}}>Next</button>
</Popup>

     {/* {blendedImage && (
        <div>
          <h2>Blended Image</h2>
          <canvas
            ref={canvasRef}
            width="400"
            height="400"
            style={{ border: '1px solid black' }}
          />
          <img src={blendedImage} alt="Blended" />
        </div>
      )}
      */}
    </div>
  );
};

export default ImageBlender;
