import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import { useHistory } from 'react-router-dom';
import VendorSearchRow from './VendorSearchRow';
const FindVendor = (props) => {
    console.log(props)

    const str = props.match.params.data
    const [vendor, setVendor] = useState([])

    useEffect(() => {

        console.log("Vendort Loaded")
        getProduct()
    }, [])

    const getProduct = () => {

        axios.get(url + `/vendor/${str}`).then(response => {
            const result = response.data
            console.log(result)
            setVendor(response.data)
        })
    }

    return (<div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Name</th>
                    <th> LastName</th>
                    <th> Address1</th>
                    <th> Address2</th>
                    <th> City</th>
                    <th> State</th>
                    <th> Country</th>
                    <th> Mobile</th>
                    <th> Email</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {/* {
                    vendor.map(v => {
                        return <VendorSearchRow vendor ={v} />
                    })
                } */}
            </tbody>
        </table>
    </div>)

}




export default FindVendor;