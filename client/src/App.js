import  React from 'react';
import styles from "./App.module.css";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Form from './components/pages/Form';
import LandingPage from './components/pages/LandingPage';
import BreedDetail from './components/pages/BreedDetail';
import Home from './components/pages/Home';


function App() {

  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/dogs/:id" component={BreedDetail}/>
        <Route path="/create" component={Form}/>
        <Route path="/home" component={Home}/>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
