import  React ,{ useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getBreeds} from "./redux/actions/index"
import AllBreeds from './components/AllBreeds';
import { Route } from 'react-router-dom';
import Form from './components/form/Form';
import AlphabeticSort from './components/sort and filters.jsx/AlphabeticSort';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import Breed from './components/Breed';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route path="/dog/" component={Breed}/>
      <Route path="/home" component={SearchBar}/>
      <Route path="/home" component={AlphabeticSort}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={AllBreeds}/>
      <Route path="/home/create" component={Form}/>
    </div>
  );
}

export default App;
