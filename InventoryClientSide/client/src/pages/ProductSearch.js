import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
const axios = require('axios')
const ProductSearch=()=>{
return(
    
    <div>       
    <div>
    <Link to="/product">
     <button className="btn btn-warning">Back</button>
    </Link>
    </div>       
    
    <div>
            <div id="ButtonBox">
        <Link to="/ProductMain"><h5 id="Event"><a>Search By Main Group</a></h5></Link>

         <Link to="/ProductSub"><h5 id="Create_Event"><a>Search By Sub Group</a></h5></Link>
        <Link to="/ProductName"> <h5 id="Create_Event_name"><a>Search By Name</a></h5></Link>
        </div>
        </div> 
    </div>
        
)
}
export default ProductSearch