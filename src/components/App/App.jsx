import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../Footer/Footer";
import Contact from "../pages/Contact/Contact";
import ExampleWork from "../pages/ExampleWork/ExampleWork";
import Services from "../Servis/Servis";
import About from "../pages/About/About";

const App = () => {
    return ( 
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<ExampleWork/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
     );
}
 
export default App;