import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Products from './components/Products/Products';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Category from './components/Categories/Category'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="App">
            <ToastContainer position="top-center" autoClose={2000} />
            <Navbar />
            <div className="app">
              <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/login" component={Login} />
                <Route path="/category" component={Category} />
              </Switch>
            </div>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
