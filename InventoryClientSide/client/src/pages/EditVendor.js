import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import VendorId from '../common/VendorId';
import { vadd2, vcity, vcountry, vmobile, vstate } from '../common/VendorId';
import { email } from '../common/CustId';
const EditVendor = ({ vendor }) => {

    const [id, setId] = useState(vendor.id)
    const [vname, setVendorName] = useState(vendor.vname)
    const [vlname, setVendorlName] = useState(vendor.vlname)
    const [vadd1, setVendorAdd1] = useState(vendor.vadd1)
    const [vadd2, setVendorAdd2] = useState(vendor.vadd2)
    const [vcity, setVendorCity] = useState(vendor.vcity)
    const [vstate, setVendorState] = useState(vendor.vstate)
    const [vcountry, setVendorCountry] = useState(vendor.vcountry)
    const [vmobile, setVendorMobile] = useState(vendor.vmobile)
    const [email, setVendorEmail] = useState(vendor.email)



    const history = useHistory()
    const data1 = new FormData();
    const update = () => {
        VendorId.setVendor(id, vname, vlname, vadd1, vadd2, vcity, vstate, vcountry, vmobile, email)
        data1.append('id', id)
        data1.append('vname', vname)
        data1.append('vlname', vlname)
        data1.append('vadd1', vadd1)
        data1.append('vadd2', vadd2)
        data1.append('vcity', vcity)
        data1.append('vstate', vstate)
        data1.append('vcountry', vcountry)
        data1.append('vmobile', vmobile)
        data1.append('email', email)


        axios.post(url + '/vendor/update', data1).then(response => {
            const result = response.data
            if (result != null) {
                alert("Data Updated")

                history.push('/vendor')
            }
            else {
                alert("Data Not Updated")
            }
        })

    }

    return (
        <div>

            <div></div>
            <br />
            <div>
                <label>Vendor Name : </label>
                <input type="text" onChange={event => { setVendorName(event.target.value) }} defaultValue={vname} />
            </div>

            <br />
           

            <div>
                <label>Vendor lastName: </label>
                <input type="text" onChange={event => { setVendorlName(event.target.value) }} defaultValue={vlname} />
            </div>
            <br />

            <div>
                <label>Vendor Add1: </label>
                <input type="text" onChange={event => { setVendorAdd1(event.target.value) }} defaultValue={vadd1} />
            </div>
            <br />

            
            <div>
                <label>Vendor Add2: </label>
                <input type="text" onChange={event => { setVendorAdd1(event.target.value) }} defaultValue={vadd2} />
            </div>
            <br />

            <div>
                <label>Vendor City: </label>
                <input type="text" onChange={event => { setVendorCity(event.target.value) }} defaultValue={vcity} />
            </div>
            <br />

            <div>
                <label>Vendor State: </label>
                <input type="text" onChange={event => { setVendorState(event.target.value) }} defaultValue={vstate} />
            </div>
            <br />

            <div>
                <label>Vendor Country: </label>
                <input type="text" onChange={event => { setVendorCountry(event.target.value) }} defaultValue={vcountry} />
            </div>
            <br />

            <div>
                <label>Vendor Mobile: </label>
                <input type="text" onChange={event => { setVendorMobile(event.target.value) }} defaultValue={vmobile} />
            </div>
            <br />

            <div>
                <label>Vendor Email: </label>
                <input type="text" onChange={event => { setVendorEmail(event.target.value) }} defaultValue={email} />
            </div>
            <br />

            <br />
            <button onClick={update} className="btn btn-success" >Update</button>

            <td><Link to="/admin">
                <button className="btn btn-warning">Back</button>
            </Link></td>


        </div>
    )
}

export default EditVendor;