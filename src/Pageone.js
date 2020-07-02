import React from "react";

import Tabla from './Tabla'


var random = Math.random() * 10
var numerRandom= random.toFixed(0)

function Quotes(){
    if(numerRandom <= 2){
        var imagen = document.getElementById("frase")
        imagen.innerHTML='"Vestir bien es un lenguaje instantaneo.” <strong>-Miucca Prada </strong>';
    
    }
    else if(numerRandom <= 4){
        var imagen = document.getElementById("frase")
        imagen.innerHTML='"No es la apariencia, es la esencia. No es el dinero, es la educación. No es la ropa, es la clase.” <strong>-Coco Chanel</strong>`';
        
    }
    else if(numerRandom <= 6){
        var imagen = document.getElementById("frase")
        imagen.innerHTML='"La moda es algo más que una manera de vestir, es una forma de expresarse.” <strong>-Marie Claire</strong>';

    }
    else if(numerRandom <= 8){
        var imagen = document.getElementById("frase")
        imagen.innerHTML='"La elegancia no es darse a notar, sino ser recordado.” <strong>Giorgio Armani.</strong>';

    }
    else if(numerRandom <= 10){
        var imagen = document.getElementById("frase")
        imagen.innerHTML='"Todo el mundo puede hacer pequeñas cosas y marcar la diferencia, todo cuenta.” <strong>Stella McCartney. </strong>';

    }
}



class Pageone extends React.Component{

    
    componentDidMount=()=> {   
        this.interval = setInterval(() => Quotes());
    }
  
    componentWillUnmount=()=> {
        clearInterval(this.interval);
    }
  

    render(

        ){

        return(
            <React.Fragment>
                

                <div>
                    <Tabla/>
                </div>

                <div > 
                    
                    <p id="frase"></p> 
                </div>    

            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;