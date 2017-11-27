//Header.js
import React, { Component } from 'react';
import "../css/Hamburger.css"

class Hamburger extends Component {
 constructor(props) {
 super(props);
 }
 componentWillMount(){
 }

 render() {

 return (
    <div className="hamburgerMenu">
        <div className="hamburgerMenuItem">HOME</div>
        <div className="hamburgerMenuItem">MY PROJECTS</div>
        <div className="hamburgerMenuItem">MY COMMUNITIES</div>
        <div className="hamburgerMenuItem">MY PLANTS</div>
    </div>
 )
 }
}
export default Hamburger;
