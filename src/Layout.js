import React from "react";


import Navbar from './Navbar'



class Layout extends React.Component{

    
    render(){
        return(
            <React.Fragment>

                <div className="container-fluid" > 

                    <Navbar/>
                    
                    {this.props.children}
                  
                </div>

                
             </React.Fragment>
        )
            
    }   
    
}
export default Layout;