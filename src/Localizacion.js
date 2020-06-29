import React from "react";




class Localizacion extends React.Component{
    constructor() {
        super();
        this.state = { seconds: 0 };
      }
    
      componentDidMount() {
        
        
       
      }
    
      componentWillUnmount() {
    
      }
    render(){
        return(
            <React.Fragment>

  
                <div className="col-12">
                    <div  className="col-6">
                        <iframe   
                            className="googleMap"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11774.654114309524!2d-2.450689701653941!3d42.45617468377403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scuadro!5e0!3m2!1sen!2ses!4v1593252295606!5m2!1sen!2ses" 
                            width="600" 
                            height="450" 
                            frameborder="0" 
                            allowfullscreen="" 
                            aria-hidden="false" 
                            tabindex="0">

                        </iframe>
                    </div>
                    <div  className=" descripcion col-5">hola mundo</div>
                </div>


               
                

            </React.Fragment>
            
        )
            
    }   
    
}
export default Localizacion;