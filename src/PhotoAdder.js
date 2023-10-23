import React, { useState } from 'react';

function PhotoAdder() {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);

  const handlePhoto1Change = (e) => {
    const file = e.target.files[0];
    setPhoto1(URL.createObjectURL(file));
  };

  const handlePhoto2Change = (e) => {
    const file = e.target.files[0];
    setPhoto2(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handlePhoto1Change} />
      <input type="file" accept="image/*" onChange={handlePhoto2Change} />

      {photo1 && <img src={photo1} alt="Photo 1" />}
      {photo2 && <img src={photo2} alt="Photo 2" />}
    </div>
  );
}

export default PhotoAdder;
