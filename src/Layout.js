import React from "react";


import Navbar from './Navbar'



class Layout extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid col-12"> 

                    <Navbar/>
                    
                    {this.props.children}
                  
                </div>

                
             </React.Fragment>
        )
            
    }   
    
}
export default Layout;