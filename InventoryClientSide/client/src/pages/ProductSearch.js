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
    
    <div>       
    <div>
    <Link to="/product">
     <button className="btn btn-warning">Back</button>
    </Link>
    </div>       
    <Link to="/ProductMain"><h5><a>Search By Main Group</a></h5></Link>

     <Link to="/ProductSub"><h5><a>Search By Sub Group</a></h5></Link>
    <Link to="/ProductName"> <h5><a>Search By Name</a></h5></Link>
    
    
    </div>
        
)
}
export default ProductSearch