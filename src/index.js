import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './estyles.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './Layout'
import Pageone from './Pageone'
import Ropa from './Ropa'
import Localizacion from './Localizacion'
import Error from './Error'


ReactDOM.render(
    <BrowserRouter>
      <Layout >
            <Switch>
                    <Route exact strict path="/" component={Pageone}></Route>
                    <Route exact strict path="/ropa" component={Ropa}></Route>
                    <Route exact strict path="/Localizacion" component={Localizacion}></Route>
                    <Route component={Error}></Route>
                    
            </Switch>
      </Layout>
    </BrowserRouter>,
  document.getElementById('root')
);
