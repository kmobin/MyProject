import { useEffect, useState } from "react";
import VendorId from "../common/VendorId";
import EditVendor from "./EditVendor";
import { useHistory } from 'react-router';

const Vendordetail=()=>{
  
   
    VendorId.print()  
    const [id,setId] = useState(VendorId.id)
    const [vname,setVendorName]=useState(VendorId.vname)
    const [vlname,setVendorlName]=useState(VendorId.vlname)
    const [vadd1 ,setVendorAdd1]=useState(VendorId.vadd1)
    const [vadd2 ,setVendorAdd2]=useState(VendorId.vadd2)
    const [vcity,setVendorCity]=useState(VendorId.vcity)
    const [vstate ,setVendorState]=useState(VendorId.vstate)
    const [vcountry,setVendorCountry]=useState(VendorId.vcountry)
   const [vmobile ,setVendorMobile]=useState(VendorId.vmobile)
    const [email ,setVendorEmail]=useState(VendorId.email)
   
 
   const vendor={id, vname, vlname, vadd1, vadd2, vcity, vstate, vcountry, vmobile, email}
 
    return (
        <div>
       <EditVendor vendor={vendor}/>
       </div>
    )
}

export default Vendordetail