import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import Page404 from '../pages/Page404';
import Fiche_logement from '../pages/Fiche_logement';

const RouterCompo = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/Fiche_logement" element={<Fiche_logement />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterCompo;