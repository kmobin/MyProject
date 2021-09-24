import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Main from './MainGrp';
import Sub from './SubGrp';
import Name from './Name';
import ProductDetails from './ProductDetails';
import SubProductDetails from './SubProductDetails';
import NameProductDetails from './NameProductDetails';
import { customer } from './../actions/NavbarAction';
import { useDispatch } from 'react-redux';

const Search = ()=>{
    const dispatch = useDispatch()
    dispatch(customer())

    return(
        <BrowserRouter>
              
        <div>
            <div id="ButtonBox">
        <Link to="/Main"><h5 id="Event"><a>Search By Main Group</a></h5></Link>

         <Link to="/Sub"><h5 id="Create_Event"><a>Search By Sub Group</a></h5></Link>
        <Link to="/Name"> <h5 id="Create_Event_name"><a>Search By Name</a></h5></Link>
        </div>
        </div> 
         
         <Switch>
             <Route path="/Main" component={Main}></Route>
             <Route path="/Sub" component={Sub}></Route>
             <Route path="/Name" component={Name}></Route>
             <Route path="/productDetails/:data" component={ProductDetails} />
             <Route path="/subProductDetails/:data" component={SubProductDetails} />
             <Route path="/nameProductDetails/:data" component={NameProductDetails} />
             
         </Switch>
         </BrowserRouter>

    )
}


export default Search