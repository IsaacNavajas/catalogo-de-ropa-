import React from "react";
import {
    Link,
  } from "react-router-dom";

  import imagenubicacion from './imagenesweb/imagenubicacion.png'
  import imagenropa from './imagenesweb/imagenropa.png'
  import imagenfondo from './imagenesweb/imagenfondo.png'




class Tabla extends React.Component{
    
    render(){
        return(
            <React.Fragment>

                <div className="row">
                <div className="col-md-3 col-md-3 col-sm-12"></div>
                    <div id="tabla" className="col-6 col-md-6 col-sm-12">



                                    <ul>

                                        <li className="col-lg-6 col-md-12 col-sm-12">
                                                <Link to="/ropa"><img 
                                                id="ropa" 
                                                src={imagenropa}
                                                
                                                alt="ropa">
                                            </img></Link>
                                        </li>
                                        
                                        <li className="col-lg-6 col-md-12 col-sm-12">
                                                <Link to="/localizacion"><img 
                                                id="ubicacion" 
                                                src={imagenubicacion}
                                                
                                                alt="localización">
                                            </img></Link>
                                        </li>


                                        

                                    </ul>

                            <img id="imagen"  
                            src={imagenfondo}
                            className="img-fluid img-thumbnail " 
                            alt="Carpe Diem 1213">
                                
                            </img>

                    </div>
                    <div className="col-md-3 col-md-0 col-sm-0"></div>
                </div>




            </React.Fragment>
            
        )
            
    }   
    
}
export default Tabla;