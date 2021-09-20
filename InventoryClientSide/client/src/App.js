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
import ProductMainGrp from './pages/ProductMainGrp';
import ProductSearch from './pages/ProductSearch';
import ProductSearchRow from './pages/ProductSearchRow';
import UpdateProduct from './pages/UpdateProduct';
import ProductMain from './pages/ProductMain';
import ProductSub from './pages/ProductSub';
import ProductSubGrp from './pages/ProductSubGrp';
import ProductName from './pages/ProductName';
import ProductNameGrp from './pages/ProductNameGrp';
import Cart from './pages/Cart';
import DeleteVendor from './pages/deletevendors';
import VendorSearchRow from './pages/VendorSearchRow';
import FindVendor from './pages/FindVendor';
import deletevendors from './pages/deletevendors';
import CustomerInfo from './pages/CustomerInfo';
import CustomerRow from './pages/CustomerRow';
import UpdateProdetail from './pages/UpdateProdetail';
import ForgotPassword from './pages/ForgotPassword';
import SecurityQue from './pages/SecurityQue';
import Updatedetail from './pages/Updatedetail';

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
               show1? <li>
               <Link className="nav-link" to="/forgot">
                Forgot Password
               </Link>
             </li>:<li>
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
          <Route path="/SearchVendor" component={SearchVendor}/>
          <Route path="/DeleteVendor" component={DeleteVendor} />
          <Route path="/deletevendors" component={deletevendors}/>
          <Route path="/CustomerInfo" component={CustomerInfo}/>
    
          <Route path="/CustomerRow" component={CustomerRow}/>
          <Route path="/VendorSearchRow/:data" component={VendorSearchRow} />
          <Route path="/logout" component={Logout}/>
          <Route path="/search" component={Customer}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/Edit" component={Edit} /> 
           <Route path="/cart" component={Cart} /> 
           <Route path="/ProductSearch" component={ProductSearch}/>
           <Route path="/ProductSearchRow" component={ProductSearchRow}/>
           <Route path="/UpdateProduct" component={UpdateProduct}/>
           <Route path="/ProductMain" component={ProductMain}></Route>
         <Route path="/ProductSub" component={ProductSub}></Route>
         <Route path="/ProductName" component={ProductName}></Route>
         <Route path="/ProductMainGrp/:data" component={ProductMainGrp} />
         <Route path="/ProductSubGrp/:data" component={ProductSubGrp} />
         <Route path="/ProductNameGrp/:data" component={ProductNameGrp} />
         <Route path="/FindVendor" component={FindVendor} />
         <Route path="/Updateproductdetail/:id" component={UpdateProdetail}/> 
         <Route path="/forgot" component={ForgotPassword}/>
         <Route path="/securityque" component={SecurityQue}/> 
         <Route path="/Updatedetail" component={Updatedetail}/> 
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
