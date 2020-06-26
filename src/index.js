import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

import Layout from './Layout'
import Pageone from './Pageone'






ReactDOM.render(
  <BrowserRouter>
<Layout>
                <Switch>
                    <Route exact strict path="/" component={Pageone}></Route>
                </Switch>
            </Layout>
</BrowserRouter>,
  document.getElementById('root')
);
