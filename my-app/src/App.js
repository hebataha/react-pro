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
import SliderSection from './components/SliderSection';
import SimpleSlider from './components/SliderComponent';
import CartComponent from './components/CartComponent';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";








import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
    <Route path="/" exact component={SliderSection}>
      
       </Route>

    <Route path="/lo" component={ThreeDivsPage}>
      
       </Route>


       <Route path="/RE"  component={ResetPass}>

       </Route>

     <Route path="/Send" component={Send}>
      </Route>



      <Route path="/Cart" component={CartComponent}>
      </Route>


                         {/* <img src={user}/> */}
 
 
                         </Switch>
                         <Footer/> 

     </div>

   </Router>
  );
}

export default App;
