import React, { Component } from 'react';
import { Route,Router,Switch} from 'react-router-dom';
import './App.css';
/* Components */
import Login from './componets/Login/Login';
import Registration from './componets/Registration/Registration';
import  Dashboard from './componets/Dashboard/Dashboard';
import { createBrowserHistory } from "history";

class App extends Component {
  render() {
    const history = createBrowserHistory();
    alert(history);
    return (
      <div className="app">
          <Router history={history}>
              <div>
                  <div className="content">
                    <Switch>
                    <Route  exact path="/" component={Login}/>
                    <Route  path="/dashboard" component={Dashboard} />
                    <Route path="/register" component={Registration} /> 
                    </Switch>
                  </div>
              </div>
          </Router>
      </div>
    );
  }
 
}
export default App;