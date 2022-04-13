import { useState, createContext } from "react";
import Modal from "../components/UI/ Modal/Modal";

const ModalContext = createContext({
	modal: false,
	hideModal: () => {},
	showModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
	const [modal, setModal] = useState(false);

	const [modalContent, setModalContent] = useState({
		cart: [],
		price: 0,
	});

	const showModalhandler = () => {
		setModal(true);
	};

	const hideModalhandler = () => {
		setModal(false);
	};

	return (
		<ModalContext.Provider
			value={{
				modal: modal,
				hideModal: hideModalhandler,
				showModal: showModalhandler,
				
			}}
		>
			{modal && <Modal/>}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
