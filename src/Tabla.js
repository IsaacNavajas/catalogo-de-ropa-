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

                <div className="row">
                <div className="col-3"></div>
                    <div id="tabla" className="col-6">

                                    <ul className="col-12">
                                        <li className="col-6">
                                                <Link to="/localizacion"><img id="ubicacion" 
                                                src="http://imgfz.com/i/PFQs0X2.png" 
                                                
                                                alt="localización">
                                            </img></Link>
                                        </li>
                                        <li className="col-6 ">
                                                <Link to="/ropa"><img id="ropa" 
                                                src="http://imgfz.com/i/gsSC5UJ.png" 
                                                
                                                alt="ropa">
                                            </img></Link>
                                        </li>



                                    </ul>

                            <img id="imagen"  
                            src="http://imgfz.com/i/uScgwnx.png" 
                            className="img-fluid img-thumbnail " 
                            alt="Carpe Diem 1213">
                                
                            </img>

                    </div>
                    <div className="col-3"></div>
                </div>




            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;