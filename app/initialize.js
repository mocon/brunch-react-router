import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from './components/Home'
import Emergency from './components/Emergency'
import Flights from './components/Flights'
import Accommodations from './components/Accommodations'
import GumgumEvents from './components/GumgumEvents'
import CannesEvents from './components/CannesEvents'
import ThingsToKnow from './components/ThingsToKnow'

document.addEventListener('DOMContentLoaded', () => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/sos/" component={Emergency} />
      <Route path="/flights/" component={Flights} />
      <Route path="/accommodations/" component={Accommodations} />
      <Route path="/gumgum-events/" component={GumgumEvents} />
      <Route path="/cannes-events/" component={CannesEvents} />
      <Route path="/faq/" component={ThingsToKnow} />
    </Router>
  ), document.querySelector('#app'));
});
