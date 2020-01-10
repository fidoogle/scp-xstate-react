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

//For bar charts
import LoadMore from './views/load-more';
import SelectAccount from './views/select-account';
import GlobalSelect from './views/global-select';

//For State and Context
//import { MachineStore } from './components/global-machine-context';
import StoreProvider from './stores/store'


function App() {
  

  return (
    <div className="App">
      <StoreProvider>
        <Nav/>
        <Switch>
          <Route path="/my-bill" component={MyBill} />
          <Route path="/my-use" component={MyUse} />
          <Route path="/my-uplift" component={MyUplift} />
          <Route path="/schedule-move" component={ScheduleMove} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/load-more" component={LoadMore} />
          <Route path="/select-account" component={SelectAccount} />
          <Route path="/global-select" component={GlobalSelect} />
          <Route component={Error} />
        </Switch>
      </StoreProvider>
    </div>
  );
}

export default App;
