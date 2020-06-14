import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
