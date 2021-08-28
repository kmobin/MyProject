
import { useHistory } from 'react-router-dom';
import Edit from './../pages/Edit';



const CustomerDetails = ({data})=>{

      const history = useHistory() 
 const edit = ()=>{

 
   
   history.push("/Edit")

 }



return (
          
    <center>
        <div></div>
             <div> 
               First Name :{data.fname}
                 </div>
                 <div> 
                Middle Name : {data.mname}
                 </div>
                 <div> 
                Last Name : 
            {data.lname}
                 </div>

                 <div> 
                Address 1 : {data.add1}
                 </div>


                 <div> 
                City : 
                {data.city}
                 </div>
                 
                 <div> 
                State : 
                {data.state}
                 </div>
                 
                 <div> 
                Country : {data.country}
                </div>
                
                 <div> 
                Mobile No :{data.mobile}
                 </div>

                 <div> 
                Email : {data.email}
                 </div>

                 <div> 
                Email : {data.email}
                 </div>
                 <div> 
                Date of Birth : {data.dob}
                 </div>
               

            <button onClick={edit} >Edit</button>      
            </center>
                 
)

}


export default CustomerDetails