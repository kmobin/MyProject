const React = require("react");

class CustId extends React.Component{

    constructor(){
        super();
        }

     print(){
         console.log(`id : ${this.id}`)
         console.log(`fname : ${this.fname}`)
         console.log(`mname : ${this.mname}`)
         console.log(`lname : ${this.lname}`)
         console.log(`add1 : ${this.add1}`)
         console.log(`add2 : ${this.add2}`)
         console.log(`city : ${this.city}`)
         console.log(`state : ${this.state}`)
         console.log(`country : ${this.country}`)
         console.log(`mobile : ${this.mobile}`)
         console.log(`email : ${this.email}`)
         console.log(`password : ${this.password}`)
         console.log(`dob : ${this.dob}`)
         console.log(`security : ${this.security}`)
        }

        setCust(id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob){
            this.id=id
            this.fname = fname
            this.mname = mname
            this.lname = lname
            this.add1 = add1
            this.add2 = add2
            this.city = city 
            this.state = state
            this.country = country
             this.mobile = mobile
             this.email = email
        this.password = password
        this.dob = dob
        // this.security = security
        }
   setId(id){
    this.id = id   
   }
    getId(){
        return this.id
    }
    setFName(fname)
    {
        this.fname = fname
    }
    getFName()
    {
       return this.fname
    }


    setMName(mname)
    {
        this.mname = mname
    }
    
    getMName()
    {
       return this.mname
    }

    setLName(lname)
    {
        this.lname = lname
    }
    
    getLName()
    {
       return this.lname
    }

    setAddress1(add1)
    {
        this.add1 = add1
    }
    getAddress1()
    {
        return this.add1 
    }
    
    setAddress2(add2)
    {
        this.add2 = add2
    }
    
    getAddress2()
    {
        return this.add2 
    }
    setCity(city)
    {
        this.city = city
    }
    getCity()
    {
       return this.city 
    }
    
    setState(state)
    {
        this.state = state
    }
    getState()
    {
     return this.state
    }
    setCountry(country){
        this.country = country
    }
    
    getCountry(){
      return  this.country 
    }
    setMobile(mobile)
    {
        this.mobile = mobile
    }
    
    getMobile()
    {
        return this.mobile
    }
    setEmail(email)
    {
        this.email = email
    }
    getEmail()
    {
        return this.email 
    }

    setPassword(password){
        this.password = password
    }
    getPassword(){
    return this.password
        }
    setDob(dob){
        this.dob = dob
    }
    getDob(){
       return this.dob
    }
}


//  const CustId = function(id){

//    this.id = id
//   this.getId=function(){

//     console.log(this.id)
//   }
// }


module.exports =  new CustId
