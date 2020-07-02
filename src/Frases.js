


var random = Math.random() * 10
var numerRandom= random.toFixed(0)

function imagen(){
    if(numerRandom <= 2){
        var imagen = document.getElementById("imagen")
        imagen.innerHTML='<img alt ="imagen" class="StylePicture" src="https://i.postimg.cc/q727ZLjp/rojo.png" />';
    
    }
    else if(numerRandom <= 4){
        var imagen = document.getElementById("imagen")
        imagen.innerHTML='<img alt ="imagen" class="StylePicture" src="https://i.postimg.cc/y6L85WX3/rosa.png" />';
        
    }
    else if(numerRandom <= 6){
        var imagen = document.getElementById("imagen")
        imagen.innerHTML='<img alt ="imagen" class="StylePicture" src="https://i.postimg.cc/DyfbJt5L/amarillo.png" />';

    }
    else if(numerRandom <= 8){
        var imagen = document.getElementById("imagen")
        imagen.innerHTML='<img alt ="imagen" class="StylePicture" src="https://i.postimg.cc/G2cbg14j/verde.png" />';

    }
    else if(numerRandom <= 10){
        var imagen = document.getElementById("imagen")
        imagen.innerHTML='<img alt ="imagen" class="StylePicture" src="https://i.postimg.cc/gjgjH24R/azul.png" />';

    }

 
}


class Pageone extends React.Component{

    constructor(props) {
        super(props);
        this.state={  }
 
    }
    
    componentDidMount=()=> {
        this.setState='1'        
    }
  
    componentWillUnmount=()=> {
        this.setState='0' 
    }
  

    render(

        ){

        return(
            <React.Fragment>
                

                <div>
                    <Tabla/>
                </div>

                <div >  
                    {this.componentDidMount}
                </div>    

            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;