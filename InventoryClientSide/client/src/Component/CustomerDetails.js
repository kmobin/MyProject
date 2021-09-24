import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from 'react-router-dom';
import Edit from './../pages/Edit';



const CustomerDetails = ({data})=>{

      const history = useHistory() 
 const edit = ()=>{

 
   
   history.push("/Edit")

 }



return (
          
  
      
             <div id="ProfilePage"> 
             <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div  id="ProfilePicture">
                                        <img id="image" src="./Images/profiletwo.png" width="158px" height="145px" alt="inventory Icon"/>
                                        </div>
                                    </td>
                                    <td style={{color: 'red', padding: '20px'}}>
                                        <h1 id="ProfileName">{data.fname} {data.lname}</h1>
                                        <hr />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
         
               First Name : <h4>&nbsp;&nbsp;&nbsp;{data.fname}</h4><hr />

                Middle Name :<h4>&nbsp;&nbsp;&nbsp; {data.mname}</h4><hr />

               Last Name :<h4>&nbsp;&nbsp;&nbsp; 
            {data.lname}
            </h4><hr />
               
                Address 1 : <h4>&nbsp;&nbsp;&nbsp;{data.add1}
                </h4><hr />

                
                City : <h4>&nbsp;&nbsp;&nbsp;
                {data.city}
                </h4><hr />
            
                State : <h4>&nbsp;&nbsp;&nbsp;
                {data.state}
                </h4><hr />
                    
           
                Country : <h4>&nbsp;&nbsp;&nbsp;{data.country}
                </h4><hr />
          
               
                Mobile No :<h4>&nbsp;&nbsp;&nbsp;{data.mobile}
                </h4><hr />

              
                Email : <h4>&nbsp;&nbsp;&nbsp;{data.email}
                 </h4><hr />

                
               
                Date of Birth : <h4>&nbsp;&nbsp;&nbsp;{data.dob}
                </h4><hr />
              
               <div>
            <button variant="contained" color="primary" onClick={edit} className="btn btn-success">Edit</button>      
            </div>
               
                  
             </div>   
)

}


export default CustomerDetails