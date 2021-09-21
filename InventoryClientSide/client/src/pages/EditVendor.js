import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import ProductId from '../common/ProductId';
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
        ProductId.setProd(id, vname, vlname, vadd1, vadd2, vcity, vstate, vcountry, vmobile, email)
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
                <label>Product lastName: </label>
                <input type="text" onChange={event => { setVendorlName(event.target.value) }} defaultValue={vlname} />
            </div>
            <br />



           

            <br />
            <button onClick={update}>Update</button>

            <td><Link to="/admin">
                <button className="btn btn-warning">Back</button>
            </Link></td>


        </div>
    )
}

export default EditVendor;