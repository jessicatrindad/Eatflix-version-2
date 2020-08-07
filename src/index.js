import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Help from './pages/Help';
import Home from './pages/Home'
import Page404 from './pages/Error';

//const Pagina404 = () =>(<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path= "/cadastro/video" component={CadastroVideo}/>
    <Route path= "/cadastro/categoria" component={CadastroCategoria}/>
    <Route path= "/help" component={Help}/>
    <Route component={Page404} /> 
    
  
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
//// <Route component = {() => <div>Página 404</div>} />