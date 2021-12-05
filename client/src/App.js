import  React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Form from './components/pages/Form';
import LandingPage from './components/pages/LandingPage';
import BreedDetail from './components/pages/BreedDetail';
import Home from './components/pages/Home';


function App() {

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route exact path="/dogs/:id" component={BreedDetail}/>
      <Route path="/create" component={Form}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={LandingPage}/>
      </div>
  );
}

export default App;
