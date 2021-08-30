import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
const axios = require('axios')
const deletevendors=()=>{
    return (
        <div>       
        <div>
        <Link to="/vendor">
         <button className="btn btn-warning">Back</button>
        </Link>
        </div>       
        <Link to="/VendorSearchRow"><h5><a>Delete Vendor</a></h5></Link>
    
        
        
        </div>
        
    )
}

export default deletevendors