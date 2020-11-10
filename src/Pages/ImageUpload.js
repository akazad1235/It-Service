import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';

const ImageUpload = () => {

    const crop = {
        unit: '%',
        aspect: 6 / 5,
        width: '100'
      };
     
      const [images, setImages] = useState({});

    return (
         <MultiImageInput
            max={4}
            images={images}
            setImages={setImages}
            cropConfig={{ minHeight: 200, maxHeight: 300,  crop, ruleOfThirds: true }}
         />
    );
};

export default ImageUpload;