import React from "react";

import imagenuno from './galeria/uno.png'
import imagendos from './galeria/dos.png'
import imagentres from './galeria/tres.png'
import imagencuatro from './galeria/cuatro.png'
import imagencinco from './galeria/cinco.png'
import imagenseis from './galeria/seis.png'
import imagensiete from './galeria/siete.png'
import imagenocho from './galeria/ocho.png'


class Ropa extends React.Component{
    constructor() {
        super();

      }

    render(){
        return(
            <React.Fragment>
  
                <div className="col-12">
                    <div className="row">

                        <div  className="col-3"></div>
                                    <div  className="col-6">
                                        
                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagenuno}></img></div>

                                            <div  className="col-6"> <img className="fotoscatalogo" src={imagendos}></img></div>


                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagentres}></img></div>

                                            <div  className="col-6"> <img className="fotoscatalogo" src={imagencuatro}></img></div>

                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagencinco}></img></div>
                      
                                            <div  className=" col-6"> <img className="fotoscatalogo" src={imagenseis}></img></div>

                                            <div  className=" col-6 "> <img className="fotoscatalogo" src={imagensiete}></img></div>
                            
                                            <div  className=" col-6"> <img className="fotoscatalogo" src={imagenocho}></img></div>

                                    </div>

                        <div  className="col-3"></div>
                    </div>
  
                </div>


               
                
               
                

            </React.Fragment>
            
        )
            
    }   
    
}
export default Ropa;