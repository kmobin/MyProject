import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


const admin = () => {
    return (

        <div className="text-center">
            <div id="admin"><h1 >Admin Panel</h1></div>
            <div id="ButtonBox">
            

                <Link to="/product">
                    <h3 id="Event"><a>Product Info</a></h3>
                </Link>

                <Link to="/vendor">
                    <h3 id="Create_Event"><a>Vendor Info</a></h3>
                </Link>

                <Link to="/CustomerInfo">
                    <h3 id="Create_Event_name"><a>Customer Info </a></h3>
                </Link>
            </div>
        </div>


    )
}

export default admin;