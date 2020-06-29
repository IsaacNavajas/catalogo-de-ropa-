import React from "react";

import Tabla from './Tabla'



class Pageone extends React.Component{
    constructor(props) {
        super(props);
        this.state={ time:" "}
 
    }

    
  
    componentDidMount=()=> {
   

    }
  
    componentWillUnmount=()=> {
        
    }
  


    render(
        ){
          
        return(
            <React.Fragment>
                

                <div>
                    <Tabla/>
                </div>

                <div >  
               
                   
                </div>    

            </React.Fragment>
            
        )
            
    }   
    
}
export default Pageone;