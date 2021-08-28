import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import ProductMain from './ProductMain';
import ProductMainGrp from './ProductMainGrp';
import ProductSub from './ProductSub';
import ProductSubGrp from './ProductSubGrp';
import ProductName from './ProductName';
import ProductNameGrp from './ProductNameGrp'
const axios = require('axios')
const ProductSearch=()=>{
return(
    
    <BrowserRouter>
              
              
    <Link to="/ProductMain"><h5><a>Search By Main Group</a></h5></Link>

     <Link to="/ProductSub"><h5><a>Search By Sub Group</a></h5></Link>
    <Link to="/ProductName"> <h5><a>Search By Name</a></h5></Link>
    
     
     <Switch>
         <Route path="/ProductMain" component={ProductMain}></Route>
         <Route path="/ProductSub" component={ProductSub}></Route>
         <Route path="/ProductName" component={ProductName}></Route>
         <Route path="/ProductMainGrp/:data" component={ProductMainGrp} />
         <Route path="/ProductSubGrp/:data" component={ProductSubGrp} />
         <Route path="/ProductNameGrp/:data" component={ProductNameGrp} />
         
     </Switch>
     </BrowserRouter> 
        
)
}
export default ProductSearch