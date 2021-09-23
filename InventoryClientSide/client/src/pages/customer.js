
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Main from './MainGrp';
import Sub from './SubGrp';
import Name from './Name';
import ProductDetails from './ProductDetails';
import SubProductDetails from './SubProductDetails';
import NameProductDetails from './NameProductDetails';
import { useEffect } from 'react';
import { url } from './../common/constants';
import { useDispatch } from 'react-redux';
import { id } from './../actions/CounterAction';
import { useHistory } from 'react-router';


const axios = require('axios')
const CustId = require('../common/CustId')
const Customer = (props) => {

    console.log(props)

    const history = useHistory()
const str = props.match.params.data
console.log(`email : ${str}`)

useEffect(()=>{
    getCustomerId()
})



const getCustomerId=()=>{
axios.get(url + `/customer/${str}`).then((response) => {
   const data = response.data 
  
   console.log(data)
   CustId.setCust(data.id,data.fname,data.mname,
    data.lname,data.add1,data.add2,data.city,data.state,data.country,data.mobile,data.email,
    data.password,data.dob,data.securityque,data.securityans)
  CustId.print()
    // CustId.setId(id)
    // const no = CustId.getId()
    // console.log(`no : ${no}`)
    history.push('/home')
  })
  
//   const cust = new CustId(id)
//   cust.getId()
}

 




    return(
            <div>
                

        </div>


    )
}



export default Customer