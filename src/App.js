
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Navigation from './Pages/Navigation/Navigation';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Home/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer';




function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute exact path="/purchase/:productsId">
            <Purchase/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/*">
            <Error />
          </Route>          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
