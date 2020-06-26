import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";



class Pageone extends React.Component{
    contructor(props){
        super(props)
    }
    render(){
        
        return(
            {this.props.children}
            <h1>hello word</h1>
        )
            
    }   
    
}
export default Pageone;