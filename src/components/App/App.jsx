import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Footer from "../Footer/Footer";

const App = () => {
    return ( 
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
     );
}
 
export default App;