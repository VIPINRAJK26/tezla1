import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/header/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));



function App() {

  return (
    <BrowserRouter>
      <div>
        <Suspense>
          <div className="position-sticky sticky-top z-5 w-100 header-shadow">
            <Header />
          </div>
        </Suspense>


        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App
