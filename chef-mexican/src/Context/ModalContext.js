import { useState, createContext } from "react";
import Modal from "../components/UI/ Modal/Modal";

const ModalContext = createContext({
	modal: false,
	modalContent: "",
	hideModal: () => {},
	showModal: () => {},
	addModalContent: (modalContent) => {},
});

export const ModalContextProvider = ({ children }) => {

	const [modal, setModal] = useState(false);

	const [modalContent, setModalContent] = useState("");

	const showModalhandler = () => {
		setModal(true);
	};

	const hideModalhandler = () => {
		setModal(false);
	};

	const contentHandler = (content) => {
		setModalContent(content);
	};

	return (
		<ModalContext.Provider
			value={{
				modal: modal,
				modalContent: modalContent,
				hideModal: hideModalhandler,
				showModal: showModalhandler,
				addModalContent: contentHandler,
			}}
		>
			
			{modal && <Modal modalContent={modalContent}/>}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
