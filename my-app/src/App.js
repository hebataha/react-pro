import React from 'react';
import Footer from './components/footer';
import HeaderRegister from './components/headerRegister';
import WhiteDiv from './components/whiteDiv';
// import user from "./images/user.svg";
import ThreeDivs from './components/threeDivs';
import ThreeDivsPage from './pages/ThreeDivsPage';
import SuccessfullyPage from './pages/successfullyPage';
import ResetPass from './pages/ResetPass';
import Send from './pages/Send';
import FaqPage from './pages/FaqPage';
import SliderSection from './pages/SliderSection';
import SimpleSlider from './pages/SliderComponent';
import CartComponent from './pages/CartComponent';







import './App.css';

function App() {
  return (
    <div className="App">
     <SliderSection/>
     <CartComponent/>
     <Footer/> 
                         {/* <img src={user}/> */}
 
 

    </div>
  );
}

export default App;
