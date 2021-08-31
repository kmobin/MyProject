import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../common/constants";
import CustomerRow from "./CustomerRow";

const CustomerInfo = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        console.log(`customers got loaded`)
        getCustomers()
    }, []);

    const getCustomers = () => {
        axios.get(url + '/findAll/cust').then((response) => {
            const result = response.data
            setCustomers(result);
            console.log(result);
        })
    }

    return (
        <div>
            <center><h2 className="page-title">Customer Info</h2></center>
            

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th> LastName</th>
                        <th> Address1</th>
                        <th> Address2</th>
                        <th> City</th>
                        <th> State</th>
                        <th> Country</th>
                        <th> Mobile</th>
                        <th> Email</th>
                        <th> DOB</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => {
                        return <CustomerRow customer={customer} />
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CustomerInfo;



