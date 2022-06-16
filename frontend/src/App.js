import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./Components/Header/Header.js";
// import Footer from './Components/Footer/Footer.js';
import Nav from "./Components/Nav/Nav.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className= "App">
//       <h2>hello</h2>
//       <BrowserRouter>
//         <Router>
//           <Route exact path="/About" component={About} />
//           <Route exact path="/" component={Header} />
//         </Router>
//       </BrowserRouter>
//       <Nav />

//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// const App = () => {
//   return (
//     <>
//     <Header />
//     <About />
//     <Nav />
//     <Contact />
//     {/* <Footer />  */}
// </>

//   )
// }

// export default App;
