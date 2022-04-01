import ReactDOM from "react-dom";

const Overlay = () => {
	//return <div className="fixed pin z-50 overflow-auto bg-smoke-light flex"></div>;
    return <div className=" w-full h-full fixed overflow-auto bg-smoke-light flex"></div>;
};

export default function Modal() {
	const element = document.getElementById("overlays");
	return <>{ReactDOM.createPortal(<Overlay/>, element)}</>;
}
