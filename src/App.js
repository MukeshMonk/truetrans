import React, { Component } from 'react';
import { Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import  Dashboard from './componets/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
              <div>
                  <div className="content">
                    <Route  exact path="/" component={Login}/>
                    <Route  path="/truetrans/dashboard" component={Dashboard} />
                    <Route path="/truetrans/register" component={Registration} /> 
                  </div>
              </div>
          </Router>
      </div>
    );
  }
 
}
export default App;