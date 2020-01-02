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


import { useMachine } from "@xstate/react";
import dataMachine from "./store/data-machine";
import XState from './views/xstate';
import XState2 from './views/xstate2';

function App() {
  const [current, send] = useMachine(dataMachine);

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/my-bill" component={MyBill} />
        <Route path="/my-use" component={MyUse} />
        <Route path="/my-uplift" component={MyUplift} />
        <Route path="/schedule-move" component={ScheduleMove} />
        <Route path="/contact-us" component={ContactUs} />

        <Route path="/xstate"
          render={() => <XState dataMachine={dataMachine}/>} />

        <Route path="/xstate2"
          render={() => <XState2/>} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
