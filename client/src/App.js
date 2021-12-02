import  React ,{ useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getBreeds} from "./redux/actions/index"
import AllBreeds from './components/AllBreeds';
import { Route } from 'react-router-dom';
import Form from './components/form/Form';
import AlphabeticSort from './components/sort and filters.jsx/AlphabeticSort';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <AlphabeticSort/>
      <Route exact path="/" component={AllBreeds}/>
      <Route path="/create" component={Form}/>
    </div>
  );
}

export default App;
