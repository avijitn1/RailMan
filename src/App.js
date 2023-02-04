import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { BrowserRouter } from "react-router-dom"
import MyRoutes from './Routes/Route';

function App() {
  return (
    <>
        <div className='Container'> 
            <a href="/" className="scrolltop" id="scroll-top">
                <i className='bx bx-chevron-up scrolltop__icon'></i>
            </a> 
            
            <BrowserRouter>
                <Navbar/>
                <main className="l-main">
                    <MyRoutes/>
                </main>
            </BrowserRouter>
            
       <Footer/>
       </div>
    </>
  );
}

export default App;
