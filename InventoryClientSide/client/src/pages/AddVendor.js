import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
const AddVendor = () => {
    const [vname, setVendorName] = useState('')
    const [vlname, setVendorLName] = useState('')
    const [vadd1, setVendorAddress1] = useState('')
    const [vadd2, setVendorAddress2] = useState('')
    const [vcity, setVendorCity] = useState('')
    const [vstate, setVendorState] = useState('')
    const [vcountry, setVendorCountry] = useState('')
    const [vmobile, setVendorMobile] = useState('')
    const [vemail, setVendorEmail] = useState('')

    const history = useHistory()

    const addvendorToDB = () => {
        const data = { vname, vlname, vadd1, vadd2, vcity, vstate, vcountry, vmobile, vemail };

        axios.post(url + '/vendor/save ', data).then((response) => {
            const result = response.data
            console.log(result);
            alert("Vendor Added successfully");
            history.push('/vendor')
        })
    }

    return (
        <div>
            <h1 className="page-title">Add Vendor</h1>

            <div className="mb-3">
                <label htmlFor="">Vendor Name</label>
                <input
                    onChange={(e) => {
                        setVendorName(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">Vendor LastName</label>
                <input
                    onChange={(e) => {
                        setVendorLName(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">Vendor Address1</label>
                <input
                    onChange={(e) => {

                        setVendorAddress1(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Address2</label>
                <input
                    onChange={(e) => {
                        setVendorAddress2(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor City</label>
                <input
                    onChange={(e) => {
                        setVendorCity(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor State</label>
                <input
                    onChange={(e) => {
                        setVendorState(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Country</label>
                <input
                    onChange={(e) => {
                        setVendorCountry(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Mobile</label>
                <input
                    onChange={(e) => {
                        setVendorMobile(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Email</label>
                <input
                    onChange={(e) => {
                        setVendorEmail(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <button onClick={addvendorToDB} className="btn btn-success">
                    Add
                </button>

                <Link to="/vendor">
                    <button className="btn btn-warning">Back</button>
                </Link>
            </div>
        </div>

    )
}

export default AddVendor;