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
          <Router basename="/">
              <div>
                  <div className="content">
                    <Route  exact path="/" component={Dashboard}/>
                    <Route  path="/login" component={Login} />
                    <Route path="/register" component={Registration} /> 
                  </div>
              </div>
          </Router>
      </div>
    );
  }
 
}
export default App;