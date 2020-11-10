import React, { useState } from 'react';
import ImageOnTextFrom from './ImageOnTextFrom';

const ImageAction = () => {
    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
      setIsOpen(true);
    }

   
    function closeModal(){
      setIsOpen(false);
    }
    console.log(modalIsOpen);
    return (
        <div className="container-img">
            <h1>T-Shirt</h1>
            <img src="https://5.imimg.com/data5/EJ/RL/MY-50139956/red-mens-t-shirt-500x500.jpg" alt=""/>
            <button onClick={openModal} className="btn btn-danger">Add Text</button>
            <ImageOnTextFrom modalIsOpen={modalIsOpen} closeModal={closeModal} ></ImageOnTextFrom>
        </div>
    );
};

export default ImageAction;