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
                <div className="col-3"></div>
                    <div id="tabla" className="col-6">

                                    <ul className="col-12">
                                        <li className="col-6">
                                                <Link to="/localizacion"><img id="ubicacion" 
                                                src={imagenubicacion}
                                                
                                                alt="localización">
                                            </img></Link>
                                        </li>
                                        <li className="col-6 ">
                                                <Link to="/ropa"><img id="ropa" 
                                                src={imagenropa}
                                                
                                                alt="ropa">
                                            </img></Link>
                                        </li>



                                    </ul>

                            <img id="imagen"  
                            src={imagenfondo}
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
export default Tabla;