import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";


import Tabla from './Tabla'


var random = Math.random() * 10
var numerRandom= random.toFixed(0)

function Frases(){
    if(numerRandom <= 2){
        
        document.write(`<p id="frases">  "Vestir bien es un lenguaje instantaneo.” <strong>-Miucca Prada </strong></p>`)
    }
    else if(numerRandom <= 4){
        
        document.write(`<p id="frases"> "La moda es algo más que una manera de vestir, es una forma de expresarse.” <strong>-Marie Claire</strong></p>`)
    }
    else if(numerRandom <= 6){

        document.write(`<p id="frases">"No es la apariencia, es la esencia. No es el dinero, es la educación. No es la ropa, es la clase.” <strong>-Coco Chanel</strong></p>`)
    }
    else if(numerRandom <= 8){

        document.write(`<p id="frases"> "La elegancia no es darse a notar, sino ser recordado.” <strong>Giorgio Armani.</strong></p>`)
    }
    else if(numerRandom <= 10){

        document.write(`<p id="frases"> "Todo el mundo puede hacer pequeñas cosas y marcar la diferencia, todo cuenta.” <strong>Stella McCartney. </strong></p>`)
    }
}


class Pageone extends React.Component{
    
    render(){
        return(
            <React.Fragment>

                <div>
                    <p className="col-12">{Frases()}</p>
                </div>

                <div>


                </div>
               
                <Tabla/>

            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;