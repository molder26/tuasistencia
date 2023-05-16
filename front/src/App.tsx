import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Empleados from "./Components/Empleados/IndexEmpleados";
import Informes from "./Components/Informes/Informes";
// @ts-ignore
import Marcacion from "./Components/Marcacion/Marcacion";
import Contacto from "./Components/Contacto/Contacto";
import "./App.css";
// @ts-ignore
import QrScanner from "./Components/Qr/QrScanner";
import { useAuth0 } from "@auth0/auth0-react";
// @ts-ignore
import Spinner from "./Components/spinner/Spinner";

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/empleados" element={<Empleados />} />
			<Route path="/informes" element={<Informes />} />
			<Route path="/marcacion" element={<Marcacion />} />
			<Route path="/contacto" element={<Contacto />} />
			<Route path="/qr/:stateId/:employeeId" element={<QrScanner />} />
		</Routes>
	);
}

export default App;
