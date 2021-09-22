import React,{lazy, Suspense} from 'react';
import './App.css';

import {Switch, Route,Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import Books from './pages/Books/books.components';
function App() {
  
  

  return (
    <div className="App">
    <Header />
    <Switch>
      <Suspense>
        <Route exact path="/" component=""/>
        <Route exact path="/books" component={Books}/>
      </Suspense>
      
    </Switch>
      
    </div>
  );
}

export default App;
