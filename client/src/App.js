import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other</Link>
        </div>
        <div>
          <Route exact path="/" component={Fib}></Route>
          <Route exact path="/otherpage" component={OtherPage}></Route>
        </div>
      </div>
    </Router>
  )
}


export default App;
