import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={}/>
        <Route path="/detail" component={}/>
        <Route path="/form" component={}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
