import React, { useState , useEffect} from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css"

import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About";
import Process from "./components/Process";
import Ourteam from "./components/Ourteam";
import Meetchef from "./components/Meetchef";
import Reservation from "./components/Reservation";
import Conact from "./components/Conact";
import Blog from "./components/Blog";
import Menu from "./components/Menu";
import Productss from "./components/shop/Productss";
import Productdetail from "./components/shop/Productdetail";
import { Provider } from "react-redux";
import Carticon from "./components/shop/Cartfolder/Carticon"
import Cart from "./components/shop/Cartfolder/Cart"
import HashLoader from "react-spinners/HashLoader";
import Checkout from "./components/shop/Cartfolder/Checkout";

import Store from "./components/shop/Cartfolder/Store";


/*document.addEventListener('DOMContentLoaded', () => {
  console.log(window.location.pathname)
  if( window.location.pathname=="/" ||  window.location.pathname==""){
document.getElementById('nav').style.backgroundColor="#fef3f2 ";

}else{
document.getElementById('nav').style.backgroundColor="white !important "

}  })

 <NavItem>
             <NavLink className="navlink" to="/Signin">Signin</NavLink>
           </NavItem>
 <Route path="/Signin" component={Signin} exact></Route>

*/
const App = (props) => {

  const [isOpen, setIsOpen] = useState(false);
const [loading , setLoading] = useState(false);
useEffect(()=>{
  setLoading(true);
  setTimeout(() => {
    setLoading(false);

  }, 3000);
},[])
  const toggle = () => setIsOpen(!isOpen);




 
  return (
 <div>
    {loading ? 

<div className="preloaderr">
<HashLoader  color={'#405d5d'} loading={loading}  size={300} />

</div>
:
       <Provider store={Store}>

       <BrowserRouter>
     <div className="jjjjj">

     <Navbar  expand="md" id="nav" className="nav">
       <NavbarToggler onClick={toggle} />
       <Collapse isOpen={isOpen} navbar>
         <Nav className="mr-auto navyy" navbar >
        
           <NavItem>
             <NavLink className="navlink" id="container" to="/">home</NavLink>
           </NavItem>
           <NavItem>
           <NavLink className="navlink"    to="/About">About Us</NavLink>
           </NavItem>
          
           <NavItem>
             <NavLink className="navlink" to="/Blog">blog</NavLink>
           </NavItem>
           <NavItem>
            <img src="images/logo.png"   alt="" />
           </NavItem>
           <NavItem>
             <NavLink className="navlink" to="/Productss">shop</NavLink>
           </NavItem>
           <NavItem>
             <NavLink className="navlink" to="/Menu">menu</NavLink>
           </NavItem>
           <UncontrolledDropdown nav inNavbar>
             <DropdownToggle className="navlink" nav >
               More
             </DropdownToggle>
             <DropdownMenu right>
       
               <DropdownItem>
               <NavLink className="navlink" to="/Process">Process</NavLink>
               </DropdownItem>
               <DropdownItem>
               <NavLink className="navlink" to="/Ourteam">Our Team</NavLink>
               </DropdownItem>
               <DropdownItem>
               <NavLink className="navlink" to="/Meetchef">Meet The Chef</NavLink>
               </DropdownItem>
               <DropdownItem>
               <NavLink className="navlink" to="/Reservation">Reservation</NavLink>
               </DropdownItem>
               <DropdownItem>
               <NavLink className="navlink" to="/Conact">Contact Us</NavLink>

               </DropdownItem>
            
             </DropdownMenu>
           </UncontrolledDropdown>
           <NavItem>
            <Carticon />
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
     <Switch>
 <Route path="/" component={Home} exact></Route>
 <Route path="/About" component={About} exact></Route>
 <Route path="/Process" component={Process} exact></Route>
 <Route path="/Ourteam" component={Ourteam} exact></Route>
 <Route path="/Meetchef" component={Meetchef} exact></Route>
 <Route path="/Reservation" component={Reservation} exact></Route>
 <Route path="/Conact" component={Conact} exact></Route>
 <Route path="/Blog" component={Blog} exact></Route>
 <Route path="/Menu" component={Menu} exact></Route>
 <Route path="/Productss" component={Productss} exact></Route>
 <Route path="/Productss/:id" component={Productdetail} exact></Route>
 <Route path="/Cart" component={Cart} exact></Route>
 <Route path="/Checkout" component={Checkout} exact></Route>

     </Switch>
   
   
   </div>
   </BrowserRouter>
        </Provider>
    
    
  
  
  
  }
   
  
</div>
  );
}

export default App;

