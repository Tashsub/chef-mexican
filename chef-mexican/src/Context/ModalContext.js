import { useState, createContext } from "react";
import Modal from "../components/UI/ Modal/Modal";

const ModalContext = createContext({
	modal: false,
	hideModal: () => {},
	showModal: () => {},
});

export const ModalContextProvider = ({ children }) => {

	const [modal, setModal] = useState(false);

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
			{children}
			{modal && <Modal/>}
		</ModalContext.Provider>
	);
};

export default ModalContext;
