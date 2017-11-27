//Header.js
import React, { Component } from 'react'
import "../../css/Header/Header.css"
import Hamburger from '../Hamburger'
import $ from 'jquery'

class Header extends Component {
 constructor(props) {
 super(props);
  this.state={
    hamburgerOpen: false
  };

  this.hamburgerToggle = this.hamburgerToggle.bind(this);
 }
 componentWillMount(){
 }

 hamburgerToggle(){
   var newState;
   if(this.state.hamburgerOpen){
     $(".hamburgerMenu").css('right', '-25%');
     $(".hamburger").css('right', '0%');
     $(".hamburger").css('color', '#f1f1f1');
     newState = false;
   }
   else{
     $(".hamburgerMenu").css('right', '0%');
     $(".hamburger").css('right', '7%');
     $(".hamburger").css('color', '#333');
     newState = true;
   }
   this.setState({
     hamburgerOpen:newState
   });
 }
 render() {

 return (
 <div >
  <div className="navOuter">
    <div className="logo"><img src="/images/logo2.png"/></div>
    <div className="nav">
      <div className="navItem">HOME</div>
      <div className="navItem">ABOUT US</div>
      <div className="navItem">ABOUT US</div>
      <div className="navItem">ABOUT US</div>
    </div>
    <div onClick={this.hamburgerToggle} className="fa fa-bars hamburger" aria-hidden="true"></div>
    <Hamburger/>
  </div>
 </div>
 )
 }
}
export default Header;
