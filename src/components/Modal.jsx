import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss'

const Modal = ({isOpen}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      className='modal-container'
      overlayClassName='modal-overlay'
    />
  )
}

export default Modal;