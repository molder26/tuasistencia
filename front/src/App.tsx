import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Empleados from "./Components/Empleados/IndexEmpleados";
import Informes from "./Components/Informes/Informes";
import Marcacion from "./Components/Marcacion/Marcacion";
import Contacto from "./Components/Contacto/Contacto";
import "./App.css";
import QrScanner from "./Components/Qr/QrScanner";


function App() {
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
