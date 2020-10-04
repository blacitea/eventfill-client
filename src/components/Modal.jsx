import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Modal.scss'

const Modal = ({isOpen, close, ...props}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={500}
      className='modal-container'
      overlayClassName='modal-overlay'
    >
      <span id='modal-close' className='modal-close' onClick={close}><FontAwesomeIcon icon={faTimes} /></span>
      <section className='modal-content'>
        {props.content}
        {props.children}
      </section>
    </ReactModal>
  )
}

export default Modal;