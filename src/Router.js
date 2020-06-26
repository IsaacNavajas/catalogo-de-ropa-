import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

import Pageone from '../Pages/Pageone'
import Layout from '../Layout'


class Reactrouter extends React.Component{
    render(){
        return(
            <div>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact strict path="/" component={Pageone}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
        </div>
    )
      
  };

  
            
}   


export default Reactrouter;