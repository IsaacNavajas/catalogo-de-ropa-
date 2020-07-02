import React from "react";


import Navbar from './Navbar'



class Layout extends React.Component{

    
    render(){
        return(
            <React.Fragment>
                <div > 

                    <Navbar/>
                        <section  className="container-fluid">
                            {this.props.children}
                        </section>
                </div>

                
             </React.Fragment>
        )
            
    }   
    
}
export default Layout;