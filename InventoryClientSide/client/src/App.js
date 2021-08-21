import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import customer from './pages/customer';
import admin from './pages/admin';
import Product from './pages/Product';
import Addproduct from './pages/Addproduct';
function App() {
  return (
    <div>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Inventory Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">
                 Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/customer" component={customer} />
          <Route path="/admin" component={admin} />
          <Route path="/product" component={Product} />
          <Route path="/add-product" component={Addproduct} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
