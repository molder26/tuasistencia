import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Client from "./Components/Client/Client";
import Product from "./Components/Product/Product";
import Invoice from "./Components/Invoice/Invoice";
import Contact from "./Components/Contact/Contact";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/client" element={<Client />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;
