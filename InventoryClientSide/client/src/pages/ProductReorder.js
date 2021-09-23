import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import ProductRow from './ProductRow';
import ProductReorderdetail from './ProductReorderdetail';

const ProductReorder = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        console.log(`Product component got loaded`)
        getProducts()
    }, []);

    const getProducts = () => {
        axios.get(url + '/product/ReoderQuantity').then((response) => {
            const result = response.data
            setProduct(result);
            console.log(result);
            console.log("Poonam");
        })
    }
    const getVendor = (id) => {

        axios.get(url + `/vendor/${id}`).then(response => {
            console.log(response.data)
        })
    }

    return (<div>
        <center><h2 className="page-title">Product Reorder</h2></center>


        <Link to="/admin">
            <button className="btn btn-warning">Back</button>
        </Link>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Name</th>
                   
                    <th> Current<br></br>stock </th>
                    <th> ReOrder<br></br>Quantity</th>
                    <th>Alert <br></br> Message</th>
                    <th>Vendor Id </th>
                    <th>Send Email</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <ProductReorderdetail product={product} />
                })
                }
            </tbody>
        </table>

    </div>)

    // return (<div>
    //     <table className="table table-striped">
    //         <thead>
    //             <tr>
    //                 <td><strong>ID</strong><br></br>{product.pid}</td>
    //                 <td><strong>Name</strong><br></br>{product.pname}</td>
    //                 <td><strong>ReOrder<br></br>Quantity</strong><br></br>{product.reorderquantity}</td>

    //                 <td><strong>Alert <br></br> Message</strong><br></br>{product.alertmsg}</td>
    //                 <td><strong>Vendor Id <br></br></strong><br></br>{product.vid}</td>
    //                 <td> <button onClick={event=>{getVendor(product.vid)}} >Send Email</button></td>
    //              </tr>
    //         </thead>

    //     </table>
    // </div>)

}

export default ProductReorder