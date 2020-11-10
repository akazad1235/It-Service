import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import { Link } from 'react-router-dom';

const ImageUpload = () => {

    const crop = {
        unit: '%',
        aspect: 6 / 5,
        width: '100'
      };
     
      const [images, setImages] = useState({});

    return (
         <div>
            <MultiImageInput
            max={4}
            images={images}
            setImages={setImages}
            cropConfig={{ minHeight: 200, maxHeight: 300,  crop, ruleOfThirds: true }}
         />
          <button className="btn btn-danger btn-lg"><Link to="/imageAction" className="text-white">Go to Mange Image</Link></button>
         </div>
    );
};

export default ImageUpload;