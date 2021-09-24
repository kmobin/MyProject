import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import TextField from '@material-ui/core/TextField';
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
        <div id="SignUpPage">
        <h1 id="Sign_up_here">Add Vendor</h1>
        

            <div className="mb-3">
                <label htmlFor="">Vendor Name</label>
                <TextField
                    onChange={(e) => {
                        setVendorName(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">Vendor LastName</label>
                <TextField
                    onChange={(e) => {
                        setVendorLName(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">Vendor Address1</label>
                <TextField
                    onChange={(e) => {

                        setVendorAddress1(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Address2</label>
                <TextField
                    onChange={(e) => {
                        setVendorAddress2(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor City</label>
                <TextField
                    onChange={(e) => {
                        setVendorCity(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor State</label>
                <TextField
                    onChange={(e) => {
                        setVendorState(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Country</label>
                <TextField
                    onChange={(e) => {
                        setVendorCountry(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Mobile</label>
                <TextField
                    onChange={(e) => {
                        setVendorMobile(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="">Vendor Email</label>
                <TextField
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