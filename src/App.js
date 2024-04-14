import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
//import Arizona from './Arizona';
import Snack from './Snack';
const snacks = require('./snacks.json')


function App() {
  return (
    <div className='main-div'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/coke">
            <Snack snack={snacks['coke']} />
          </Route>
          <Route exact path="/takis">
            <Snack snack={snacks['takis']} />          
          </Route>
          <Route exact path="/snickers">
            <Snack snack={snacks['snickers']} />
          </Route>
          <Route exact path="/doritos">
            <Snack snack={snacks['doritos']} />
          </Route>
          <Route exact path="/arizona">
            <Snack snack={snacks['arizona']} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
