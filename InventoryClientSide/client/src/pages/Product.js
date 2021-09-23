import { useState ,useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import ProductRow from './ProductRow';
const Product=()=>{
const [products,setProducts]=useState([])

useEffect(() => {
    console.log(`Product component got loaded`)
    getProducts()
  }, []);

  const getProducts = () => {
    axios.get(url + '/product/all').then((response) => {
      const result = response.data
        setProducts(result);
        console.log(result);
    })
  }

    return (
        <div>
        <center><h2 className="page-title">Product Info</h2></center>
        
        <Link to="/add-product">
        <button className="btn btn-success">Add Product</button>
        </Link>
 
        <Link to="/ProductSearch"><button className="btn btn-success">Search Product</button></Link> 
        <Link to="/ProductReorder"><button className="btn btn-success">Reorder Product</button></Link> 

       <Link to="/admin">
     <button className="btn btn-warning">Back</button>
    </Link>
           
        <table className="table table-striped">
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th>Image </th>
            <th> MainGrp</th>
            <th> SubGrp</th>
            <th> Type</th>
            <th> Brand</th>
            <th> Current<br></br>stock </th>
            <th> Minstock</th>
            <th> Maxstock</th>
            <th> Reorder<br></br>Level</th>
            <th> ReOrder<br></br>Quantity</th>
            <th> Sell Price</th>
            <th>Alert <br></br> Message</th>
            <th>Vendor Id </th>
          </tr>
        </thead>
        <tbody>
          { products.map((product) => {
            return <ProductRow product={product} />
          })
          }
        </tbody>
      </table>

      </div>
    )
}

export default Product;