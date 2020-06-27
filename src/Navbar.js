import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";


class Navbar extends React.Component{

    render(){
        return(
            <React.Fragment>
                <nav className="Navbar col-12">

                    <div class="row">
                            <div className=" col-3"></div>
                            
                            <h1 className="h1 col-6">
                                    <img className="logo" src="http://imgfz.com/i/HEczg5t.png" alt="logo"></img>
                                    
                                    CarpeDiem1213
                                    
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