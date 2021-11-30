import  React ,{ useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getBreeds} from "./redux/actions/index"
import AllBreeds from './components/AllBreeds';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <AllBreeds/>
    </div>
  );
}

export default App;
