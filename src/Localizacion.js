import React from "react";




class Localizacion extends React.Component{

    render(){
        return(
           
            <React.Fragment>

                    <div className="row"></div>
  
                <div className="col-12 ">
                    
                    <div  className="col-12 col-lg-6">
                       <iframe 
                                SameSite = "Secure"
                                title="mapagoogle"
                                className="googleMap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.379374023255!2d-2.450609184249473!3d42.46221943663594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5aab4658d118e1%3A0xe0a05cf9109bfc4a!2sAv.%20Rep%C3%BAblica%20Argentina%2C%2013%2C%2026002%20Logro%C3%B1o%2C%20La%20Rioja!5e0!3m2!1sen!2ses!4v1593455117418!5m2!1sen!2ses"
                                width="50%" 
                                height="400px"
                                frameBorder="0" 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0">

                        </iframe>


                    </div>
                    <text  className=" descripcion col-12 col-lg-6">{`
                                        C/ Republica Argentina número 13. `}</text>
                    <text  className=" descripcion col-12 col-lg-6">{`
                                        Te estamos esperando. `}</text>
                                          
                            
                </div>


               
                

            </React.Fragment>
            
        )
            
    }   
    
}
export default Localizacion;