import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./PAGES/Header";
import Home from "./PAGES/Home";
import ErrorPage from "./PAGES/ErrorPage";
import Contact from "./PAGES/Contact";
import Cart from './PAGES/Cart'
import Footer from "./COMPONENTS/Footer";
import Menu from "./COMPONENTS/Menu";
import UserDetails from "./COMPONENTS/UserDetails";


function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/contact" Component={Contact} />
        <Route path="/cart" Component={Cart} />
        <Route path="/userDetails" Component={UserDetails} />
        <Route path="/*" Component={ErrorPage} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
