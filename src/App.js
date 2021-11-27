import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cars from './Pages/CarComponents/Cars/Cars';
import Home from './Pages/HomeComoponents/Home/Home';
import AuthProvider from './context/AuthProvider'

import Register from './Pages/Login/Register/Register';
import Signin from './Pages/Login/Signin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import Review from './Pages/Reviews/Review/Review';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cars">
            <Cars />
          </Route>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/purchase/:id">
            <Purchase />
          </PrivateRoute>

        </Switch>

      </BrowserRouter>
    </AuthProvider>
  </div>
  );
}

export default App;
