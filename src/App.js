import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/Home/LandingPage";

import RegisterPage from "./components/Register/RegisterPage";
import HomePage from "./components/Home/HomePage";

import "./App.css";
import Head from "./components/Navbar/SinglepageHead";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Head2 from "./components/Navbar/Head2";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const LoginContext = createContext();

export default function App() {
  const [LoggedIn, setloggedIn] = useState(false);
  const [user, setuser] = useState("");
  const types = {
    INFO: "info",
    SUCCESS: "success",
    ERROR: "error",
  };
  const options = {
    position: positions.TOP_CENTER,
    timeout: 7000,
    offset: "90px",
    type: types.SUCCESS,
    transition: transitions.SCALE,
  };
  return (
    <LoginContext.Provider
      value={{ value1: [LoggedIn, setloggedIn], username: [user, setuser] }}
    >
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <div>
            {LoggedIn ? <Head2 /> : <Head />}
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </LoginContext.Provider>
  );
}

export { LoginContext };
