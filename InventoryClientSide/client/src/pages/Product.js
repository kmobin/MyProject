import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import ProductRow from './ProductRow';
const Product=()=>{
const [products,setProducts]=useState([])

useEffect(() => {
    console.log(`Artists component got loaded`)
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(url + '/product/all').then((response) => {
      const result = response.data
      setProducts(result.data)
    })
  }

    return (
        <div>
        <center><h2 className="page-title">Product Info</h2></center>
        <Link to="/add-product">
        <a className="btn btn-success">Add Product</a>
        </Link>

        <table className="table table-striped">
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th> MainGrp</th>
            <th> SubGrp</th>
            <th> Type</th>
            <th> Brand</th>
            <th> Currentstock</th>
            <th> Maxstock</th>
            <th> Minstock</th>
            <th> ReorderLevel</th>
            <th> Reorderquantity</th>
            <th> Sell Price</th>
            <th> Alert </th>
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