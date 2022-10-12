import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register'
import Home from './Components/Home'
import Book from './Components/Book'
import Cars from './Components/Cars'
import Bikes from './Components/Bikes'
import AddCar from './Components/AddCar'
import AddBike from './Components/AddBike'
import HistoryCar from './Components/HistoryCar'
import HistoryBike from './Components/HistoryBike'
import Logout from './Components/Logout'
import Error from './Components/Error'


function App() {
  return (
    <div className="App">
      <Switch>
      
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/book' component={Book}/>
      <Route exact path='/cars' component={Cars}/>
      <Route exact path='/bikes' component={Bikes}/>
      <Route exact path='/addcar/:id' component={AddCar}/>
      <Route exact path='/addbike/:id' component={AddBike}/>
      <Route exact path='/historycar' component={HistoryCar}/>
      <Route exact path='/historybike' component={HistoryBike}/>
      <Route exact path='/logout' component={Logout}/>
      <Route  component={Error}/>

      </Switch>
    </div>
  );
}

export default App;
