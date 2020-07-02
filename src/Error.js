import React from "react";

  import Error from './imagenesweb/error.png'




class Error404 extends React.Component{
    
    render(){
        return(
            <React.Fragment>

               <div className="col-12"><img className="posicionimagenerror" src={Error} alt="imagen de error"></img></div>

            </React.Fragment>
            
        )
            
    }   
    
}
export default Error404;