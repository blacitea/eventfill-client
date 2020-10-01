import { useState } from "react";

export default function useModal() {
  const [modalState, setModalState] = useState({open: false, content: {}});
  
	const openModal = (content) => {
		setModalState({content, open: true});
	};

	const closeModal = () => {
		setModalState({...modalState, open: false});
	};
  
  return [modalState, openModal, closeModal];
}