import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


Modal.setAppElement('#root')

const ImageOnTextFrom = ({modalIsOpen, closeModal}) => {

   const[text, setText] = useState({})
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
      setText(data)
      closeModal();
    };
    console.log(text);
    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };


    return (
        <div>
            <h4 className="text-center">{text.name}</h4>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>T-Shirt</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" ref={register} placeholder="Some Write Your Text"/>
                
              </div>
            <div className="form-group text-right">
              <button type="submit" class="btn btn-danger mr-autoz">Add</button>
            </div>
              
          </form>
        </Modal>
        </div>
    );
};

export default ImageOnTextFrom;