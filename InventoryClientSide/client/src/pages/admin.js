import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const admin=()=>{
    return(
        <div>
            <center><h1>ADMIN</h1></center>
        <Link to="/product">
        <h3><a>Product Info</a></h3> 
        </Link>
        <Link to="/vendor">
        <h3><a>Vendor Info</a></h3>
        </Link>

        </div>
        
    )
}

export default admin;