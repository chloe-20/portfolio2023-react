import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
// import AboutView from "./views/AboutViewView"; 페이지를 만들 수 있다

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                {/* <Route path="/about" element={<AboutView />} /> */} 
            </Routes>
        </BrowserRouter>
    );
};

export default App;