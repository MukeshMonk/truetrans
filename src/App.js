import React, { Component } from 'react';
import { Route,BrowserRouter} from 'react-router-dom';
import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import  Dashboard from './componets/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="app">
          <BrowserRouter>
              <div>
                  <div className="content">
                  
                    <Route  path="/login" component={Login}/>
                    <Route  path="/dashboard" component={Dashboard} />
                    <Route path="/register" component={Registration} /> 
                  </div>
              </div>
          </BrowserRouter>
      </div>
    );
  }
 
}
export default App;