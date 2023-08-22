import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ImageComponent from './components/adventure1';
import ImageComponenta from './components/adrenaline';
import ImageComponentb from './components/adventure2';
import ImageComponentc from './components/luxury';
import ImageComponentd from './components/mystery';
import video from './components/video';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/image' component={ImageComponent} />
          <Route path='/imagea' component={ImageComponenta} />
          <Route path='/imageb' component={ImageComponentb} />
          <Route path='/imagec' component={ImageComponentc} />
          <Route path='/imaged' component={ImageComponentd} />
          <Route path='/trailer' component={video} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
