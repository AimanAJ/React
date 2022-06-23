import Navbar from "./navbar"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Route, Routes } from 'react-router-dom';


function App() {

  // let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Home/>
  //     break;

  //   case "/contact_us":
  //     Component = <Contact/>
  //     break

  //   case "/about":
  //     Component = <About/>
  //     break

  //     case "/shop":
  //       Component = <Shop/>
  //       break

  //   default:
  //     break;
  // }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact_us" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      {/* {Component} */}
    </>
  )
}

export default App;
