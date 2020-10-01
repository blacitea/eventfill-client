import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss'

const Modal = ({isOpen, close, ...props}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      className='modal-container'
      overlayClassName='modal-overlay'
    >
      <span className='modal-close' onClick={close}>x</span>
      <section className='modal-content'>
        {props.content}
        {props.children}
      </section>
    </ReactModal>
  )
}

export default Modal;