import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Main from './MainGrp';
import Sub from './SubGrp';
import Name from './Name';
import ProductDetails from './ProductDetails';
import SubProductDetails from './SubProductDetails';
import NameProductDetails from './NameProductDetails';


const Search = ()=>{



    return(
        <BrowserRouter>
              
              
        <Link to="/Main"><h5><a>Search By Main Group</a></h5></Link>

         <Link to="/Sub"><h5><a>Search By Sub Group</a></h5></Link>
        <Link to="/Name"> <h5><a>Search By Name</a></h5></Link>
        
         
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