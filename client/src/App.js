import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar';
import SinglePost from './components/SinglePost'
import SingleCity from './components/SingleCity';
import EditPostForm from './components/EditPostForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path ='/cities/:id' component={SingleCity} /> 
            <Route exact path ='/cities/:city_id/posts/:id' component={SinglePost} /> 
            <Route exact path = '/cities/:city_id/posts/:id/edit' component= {EditPostForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
