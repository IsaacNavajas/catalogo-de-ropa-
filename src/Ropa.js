import React from "react";

import Modal from './Modal';

import imagenuno from './galeria/uno.png'
import imagendos from './galeria/dos.png'
import imagentres from './galeria/tres.png'
import imagencuatro from './galeria/cuatro.png'
import imagencinco from './galeria/cinco.png'
import imagenseis from './galeria/seis.png'
import imagensiete from './galeria/siete.png'
import imagenocho from './galeria/ocho.png'

import OFERTA from './galeria/barradeoferta/OFERTA.png'


class Ropa extends React.Component{
    state={ abrirModal:false }

    cerrarModal =() => {
        this.setState({abrirModal:false})
    }
    abrirModal =() => {
        this.setState({abrirModal:true})
    }

    render(){
        return(
            <React.Fragment>
                <div className="rebajas col-12">
                    <p className="textoRebajas">Este mes rebajas de primavera! Disfrutalas. </p>
                </div>
                <div className="margendelnavbar col-12">
                    
                    <div className="row">

                        <div  className="col-1 col-sm-3"></div>
                                    <div  className="col-10 col-sm-6">
                                        
                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6">
                                    
                                            {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                            <div>
                                                <img 
                                                onClick={this.abrirModal} 
                                                className="fotoscatalogo" 
                                                src={imagencuatro} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                                </div>
                                            </div>


                                            <div  className="col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagendos} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                                            
                                            <div  className="separador row"></div>

                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                <img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagentres} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>

                                            <div  className="col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagencuatro} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>

                                            <div  className="separador row"></div>

                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagencinco} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                      
                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                <img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagenseis} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>

                                            <div  className="separador row"></div>

                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagensiete} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                            
                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagenocho} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                                            
                                            <div  className="separador row"></div>

                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagenuno} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                            
                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagenocho} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                                            
                                            <div  className="separador row"></div>

                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagensiete} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>
                            
                                            <div  className=" col-12 col-md-12 col-sm-12 col-lg-6"> 
                                                {/*<img  src={OFERTA} onClick={this.abrirModal} className="oferta" alt="estado en oferta"></img>*/}  {/*MOSTRAR OFERTA*/}
                                                <img 
                                                onClick={this.abrirModal}
                                                className="fotoscatalogo" 
                                                src={imagenocho} 
                                                alt="Imagen de CarpeDiem1213"></img>
                                            </div>

                                            <div  className="separador row"></div>
                                            <div  className="separador row"></div>

                                    </div>

                        <div  className="col-1 col-sm-3"></div>
                    </div>
  
                </div>


                                            <Modal 
                                                isOpen={this.state.abrirModal} 
                                                onClose={this.cerrarModal}> 
                                                    <p>Acércate a nuestra tienda y pruébatelo.</p>
                                            </Modal>
               
                

            </React.Fragment>
            
        )
            
    }   
    
}
export default Ropa;