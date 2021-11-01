import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import SingleItem from './Components/SingleItem/SingleItem';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Exclusive from './Components/Exclusive/Exclusive';
import Features from './Components/Features/Features';
import AddService from './Components/AddServices/AddService';
import Order from './Components/Order/Order';
import MyOrders from './Components/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/Home'>
              <Home></Home>
            </Route>

            <Route exact path='/Features'>
              <Features></Features>
            </Route>

            <Route exact path='/Services'>
              <Services></Services>
            </Route>

            <PrivateRoute exact path="/Exclusive">
              <Exclusive></Exclusive>
            </PrivateRoute>

            <PrivateRoute exact path="/Myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute exact path='/SingleItem/:serviceID'>
              <SingleItem></SingleItem>
            </PrivateRoute>

            <PrivateRoute exact path='/AddService'>
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute exact path='/Order'>
              <Order></Order>
            </PrivateRoute>

            <Route exact path='/LogIn'>
              <Login></Login>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


