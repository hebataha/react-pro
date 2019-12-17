import React from 'react';
import Footer from './components/footer';
import HeaderRegister from './components/headerRegister';
import WhiteDiv from './components/whiteDiv';
// import user from "./images/user.svg";
import ThreeDivs from './components/threeDivs';
import ThreeDivsPage from './pages/ThreeDivsPage'
import SuccessfullyPage from './pages/successfullyPage'





import './App.css';

function App() {
  return (
    <div className="App">
     <SuccessfullyPage/>
     <Footer/> 
                         {/* <img src={user}/> */}
 
 

    </div>
  );
}

export default App;
