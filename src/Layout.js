import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

import Navbar from './Pages/Navbar'

class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            
            <div ClassName="contructor col-12"> 
            {this.props.children}
             </div>
        )
            
    }   
    
}
export default Layout;