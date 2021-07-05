import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Main from "./pages/main";
import Detail from "./pages/detail";
import Form from "./pages/form";
import EduForm from "./pages/eduform";
import NotFound from "./pages/notfound";
import Barifurcation from "./pages/barifurcation";

import {SccContextProvider} from "./context/scc";

function App() {
  return (
    <SccContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/eduform" component={EduForm}/>
        <Route path="/form" component={Form}/>
        <Route path="/barifurcation" component={Barifurcation}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </SccContextProvider>
  );
}

export default App;
