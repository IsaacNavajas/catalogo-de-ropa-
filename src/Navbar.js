import React from "react";
import {
  Link,  
} from "react-router-dom";

import logo from './imagenesweb/logo.png'


class Navbar extends React.Component{

    render(){
        return(
            <React.Fragment>
                <nav className="Navbar col-12">

                    <div className="row">
                            <div className=" col-3"></div>
                            
                            <h1 className="h1 col-6">
                                <ul>
                                    <li>
                                    <Link to="/" className="link"><img className="logo" src={logo} alt="logo"></img>
                                    
                                    CarpeDiem1213</Link>
                                    </li>
                                </ul>

                                    
                            </h1>
                            
                            <div className=" col-3">


                            </div>
                    </div>
                    
                    
                </nav>
            </React.Fragment>
        )
            
    }   
    
}
export default Navbar;