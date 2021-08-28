import { useDispatch, useSelector } from "react-redux"
import { show } from "../actions/CounterAction"
import CustId from "../common/CustId"
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = ()=>{
    
    const show1 = useSelector((state)=>state.show)
   const dispatch = useDispatch()
    const history = useHistory()

   useEffect(()=>{
       signout()
   })

    const signout=()=>{

        CustId.setCust(null,null,null,null,null,null,null,null,null,null,null,null,null)
        alert("Thank You For Visiting!")
        dispatch(show())
        history.push('/home')
    }

    return(
   <div></div>     
    )
}

export default Logout

