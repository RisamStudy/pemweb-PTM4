import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import App from "./App";
import {Navbar, Nav, Container} from "react-bootstrap"
import 'bootstrap/dist/''

const AppRouter =()=>{
    return(
        <Router>
            <Navbar bg="dark" variant="dark">
            <nav className="">
                <Link to="/Contact">Contact</Link>
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/About">About</Link>
            </nav>
            </Navbar>
            
            <Routes>
                 <Route path="/Contact" element={<Contact/>}></Route>
                 <Route path="/" element={<App/>}/>
                 <Route path="/About" element={<About/>}/>
                 <Route path="/Profile" element={<Profile/>}/>
            </Routes>
        </Router>
    )
}
export default AppRouter;