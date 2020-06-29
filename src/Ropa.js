import React from "react";
import {
    Link,
  } from "react-router-dom";

import imagenuno from './galeria/uno.png'
import imagendos from './galeria/dos.png'
import imagentres from './galeria/tres.png'
import imagencuatro from './galeria/cuatro.png'
import imagencinco from './galeria/cinco.png'
import imagenseis from './galeria/seis.png'
import imagensiete from './galeria/siete.png'
import imagenocho from './galeria/ocho.png'


class Ropa extends React.Component{


    render(){
        return(
            <React.Fragment>
  
                <div className="col-12">
                    <div className="row">

                        <div  className="col-3"></div>
                                    <div  className="col-6">
                                        
                                            <div  className=" col-6 "><img className="fotoscatalogo" src={imagenuno} alt="Imagen de CarpeDiem1213"></img></div>

                                            <div  className="col-6"> <img className="fotoscatalogo" src={imagendos} alt="Imagen de CarpeDiem1213"></img></div>
                                            
                                            <div  className="separador row"></div>

                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagentres} alt="Imagen de CarpeDiem1213"></img></div>

                                            <div  className="col-6"> <img className="fotoscatalogo" src={imagencuatro} alt="Imagen de CarpeDiem1213"></img></div>

                                            <div  className="separador row"></div>

                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagencinco} alt="Imagen de CarpeDiem1213"></img></div>
                      
                                            <div  className=" col-6"> <img className="fotoscatalogo" src={imagenseis} alt="Imagen de CarpeDiem1213"></img></div>

                                            <div  className="separador row"></div>

                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagensiete} alt="Imagen de CarpeDiem1213"></img></div>
                            
                                            <div  className=" col-6"> <img className="fotoscatalogo" src={imagenocho} alt="Imagen de CarpeDiem1213"></img></div>

                                            <div  className="separador row"></div>
                                            <div  className="separador row"></div>

                                    </div>

                        <div  className="col-3"></div>
                    </div>
  
                </div>


               
                
               
                

            </React.Fragment>
            
        )
            
    }   
    
}
export default Ropa;