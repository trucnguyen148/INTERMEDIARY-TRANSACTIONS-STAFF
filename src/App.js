
import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom';

import history from './helpers/history';
import AuthenticatedComponent from './helpers/AuthenticatedComponent';

import Login from './Screens/Login';
import Transactions from './Screens/Transactions';
import PointRequests from './Screens/PointRequests';
import TakeMoneyRequests from './Screens/TakeMoneyRequests';

import 'semantic-ui-css/semantic.min.css';
import Layout from './Screens/Layout';
import Header from './Screens/Header';

export default class App extends Component {
  render(){
   
    return(
      < >
        <Router history={history}>
          <Switch>
              <Route path="/" exact component={Login} />
                <AuthenticatedComponent>
                  <div style={{backgroundColor: '#FFF6F0'}}>
                    <Layout>
                      <Header/>
                      <Route path="/transactions" exact component={Transactions}/>
                      <Route path="/pointrequests" exact component={PointRequests}/>
                      <Route path="/takemoneyrequests" exact component={TakeMoneyRequests}/>
                    </Layout>
                  </div>
                   
                </AuthenticatedComponent>
          </Switch>
        </Router>
      </>
    )
  }
}