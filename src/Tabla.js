import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Router
  } from "react-router-dom";




class Pageone extends React.Component{
    
    render(){
        return(
            <React.Fragment>

                <div >
                    <div id="tabla" className="col-12">
                <ul className="col-12">
                    <li className="col-12">
                            <Link><img id="ubicacion" 
                            src="http://imgfz.com/i/EVkZ1Fy.png" 
                            
                            alt="...">
                           </img></Link>
                    </li>
                    <li className="col-12 z-index:10;">
                            <Link><img id="ropa" 
                            src="http://imgfz.com/i/0IFqwo8.png" 
                            
                            alt="...">
                           </img></Link>
                    </li>



                </ul>
                            <img id="imagen" 
                            src="http://imgfz.com/i/BPANe7L.png" 
                            className="img-fluid img-thumbnail" 
                            alt="...">
                                
                            </img>

                    </div>
                </div>




            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;