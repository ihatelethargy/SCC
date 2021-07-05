import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Main from "./pages/main";
import Detail from "./pages/detail";
import Form from "./pages/form";
import NotFound from "./pages/notfound";
import EduForm from "./pages/edufrom";

import {SccContextProvider} from "./context/scc";

function App() {
  return (
    <SccContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/form" component={Form}/>
        <Route path="/eduform" component={EduForm}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </SccContextProvider>
  );
}

export default App;
