import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Main from "./pages/main";
import Detail from "./pages/detail";
import Form from "./pages/form";
import NotFound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/form" component={Form}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
