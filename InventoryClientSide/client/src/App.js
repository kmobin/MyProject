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
import Vendor from './pages/Vendor';
import AddVendor from './pages/AddVendor';
import SearchVendor from './pages/SearchVendor';
import Profile from './pages/Profile';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './pages/Logout';
import { show } from './actions/CounterAction';
import { useHistory } from 'react-router-dom';
import Customer from './pages/customer';
import Edit from './pages/Edit';

function App() {
  const show1 = useSelector((state)=>state.show)
   const dispatch = useDispatch()
     const history = useHistory()
  //  const logoutFun = ()=>{
    
  //   dispatch(show())
  //   history.push("/Home")

  //  }



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

              {
               show1?null:<li>
              <Link className="nav-link" to="/search"> 
                Search
              </Link>
            </li>
             }




              {show1?<li>
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </li>:
              
              <li>
                <Link className="nav-link" to="/profile"> 
                  Profile
                </Link>
              </li>
              
             }
              {show1? <li>
                <Link className="nav-link" to="/signup">
                 Signup
                </Link>
              </li>:<li>
               <Link className="nav-link" to="/order">
                Orders
               </Link>
             </li>
              }
             {
               show1?null:
               
               <li>
               <Link className="nav-link" to="/cart">
                Cart
               </Link>
             </li>
              
             }
{
               show1?null:<li>
              <Link className="nav-link" to="/logout"> 
                Logout
              </Link>
            </li>
             }


             
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/customer/:data" component={customer} />
          <Route path="/admin" component={admin} />
          <Route path="/product" component={Product} />
          <Route path="/add-product" component={Addproduct} />
          <Route path="/vendor" component={Vendor} />
          <Route path="/add-Vendor" component={AddVendor}/>
          <Route path="/search-Vendor" component={SearchVendor}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/search" component={Customer}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/Edit" component={Edit} /> 
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
