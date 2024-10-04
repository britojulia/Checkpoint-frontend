import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tema3 from "./temas/tema3/page";
import NotFound from "./not-found";
import Home from "./page";

const AppRouter: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/tema/tema3" element={<Tema3/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;