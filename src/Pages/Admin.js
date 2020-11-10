import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';

const Admin = () => {

    // const [image, setImage] = useState({
    //     file:null
    // });
    // const handleImage= (e) =>{
    //         console.log(e.target.files[0]);
    //         console.log(e.target.files.length);
    //         setImage( {
    //             file: URL.createObjectURL(e.target.files[0])
    //         })

    // }
    // console.log(image.file);
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

export default Admin;