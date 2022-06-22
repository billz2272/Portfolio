import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./Components/Header/Header.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import Posts from "./Components/Posts/Posts.js";
import Layout from "./Components/Layout/layout";
import Login from "./screens/LoginScreen/loginScreen";
// import AdminScreen from "./screens/AdminScreen";


function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      {/* <Route path={"/admin"} element={<AdminScreen />} /> */}
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Posts" element={<Posts />} />
     </Route>
    
    </Routes>
  );
}

export default App;