import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Error from './components/Error';
import MyBill from './views/my-bill';
import MyUse from './views/my-use';
import MyUplift from './views/my-uplift';
import ScheduleMove from './views/schedule-move';
import ContactUs from './views/contact-us';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-bill" component={MyBill} />
        <Route path="/my-use" component={MyUse} />
        <Route path="/my-uplift" component={MyUplift} />
        <Route path="/schedule-move" component={ScheduleMove} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
