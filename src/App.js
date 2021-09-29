import Home from './components/Home'
import Navbar from './components/shared/Navbar'
import SignUp from './components/SignUp'
import List from './components/weather/List'
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import AlignItemsList from './components/shared/AlignItemsList'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={SignUp} exact />   
      <Route path="/location/:woeid" component={AlignItemsList} exact />   
      <Route path="/login" component={Login} exact />   
      <Route path="/location" component={List} exact />  

   
        
      </Switch>
      </BrowserRouter>
    </div>
  );  
}

export default App;
