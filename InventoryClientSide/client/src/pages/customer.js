
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
const axios = require('axios')
const CustId = require('../common/CustId')
const Customer = (props) => {

    console.log(props)

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
    data.password,data.dob)
  CustId.print()
    // CustId.setId(id)
    // const no = CustId.getId()
    // console.log(`no : ${no}`)
  })
  
//   const cust = new CustId(id)
//   cust.getId()
}

 




    return(
            <div>
                

              <BrowserRouter>
              
              
             <Link to="/Main"><h5><a>Search By Main Group</a></h5></Link>

              <Link to="/Sub"><h5><a>Search By Sub Group</a></h5></Link>
             <Link to="/Name"> <h5><a>Search By Name</a></h5></Link>
             
              
              <Switch>
                  <Route path="/Main" component={Main}></Route>
                  <Route path="/Sub" component={Sub}></Route>
                  <Route path="/Name" component={Name}></Route>
                  <Route path="/productDetails/:data" component={ProductDetails} />
                  <Route path="/subProductDetails/:data" component={SubProductDetails} />
                  <Route path="/nameProductDetails/:data" component={NameProductDetails} />
                  
              </Switch>
              </BrowserRouter>
        </div>


    )
}



export default Customer