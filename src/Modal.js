
import React from "react";
import ReactDOM from 'react-dom';

import './Ropa';


import {
    Link,
  } from "react-router-dom";


function Modal(props){
  
    if(props.isOpen === false){return null}

    return ReactDOM.createPortal(
    
        
        <div className="model"  tabIndex="-1" role="dialog">
   
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Catalogo</h5>
                <button type="button" onClick={props.onClose} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secundary"><Link to="/Localizacion">¿Donde estamos?</Link></button>
        
            </div>
            </div>
        </div>
  
        
        , document.getElementById('model')
        )
}

export default Modal;
