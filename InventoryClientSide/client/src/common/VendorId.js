const React = require("react");

class VendorId extends React.Component{

    constructor(){
        super();
        }
        print(){
            console.log(`id : ${this.id}`)
            console.log(`vname : ${this.vname}`)
        }

        setVendor(id,vname,vlname,vadd1,vadd2,vcity,vstate,vcountry,vmobile,vemail){
            this.id=id
            this.vname = vname
            this.vlname = vlname
            this.vadd1 = vadd1
            this.vadd2 = vadd2
            this.vcity = vcity
            this.vstate = vstate 
            this.vcountry = vcountry
             this.vmobile = vmobile
             this.vemail = vemail
    
        }
        setId(id){
            this.id=id
        }
        getId(){
            return this.id
        }

        setVendorName(vname){
            this.vname=vname
        }
        getVendorName(){
            return this.vname
        }

        setVendorlName(vlname){
            this.vlname=vlname
        }
        getVendorlName(){
            return this.vlname
        }
        setVendorAdd1(vadd1){
            this.vadd1=vadd1
        }
        getVendorAdd1(){
            return this.vadd1
        }
        setVendorAdd2(vadd2){
            this.vadd2=vadd2
        }
        getVendorAdd2(){
            return this.vadd2
        }
        setVendorCity(vcity){
            this.vcity=vcity
        }
        getVendorCity(){
            return this.vcity
        }
        setVendorState(vstate){
            this.vstate=vstate
        }
        getVendorState(){
            return this.vstate
        }
        setVendorCountry(vcountry){
            this.vcountry=vcountry
        }
        getVendorCountry(){
            return this.vcountry
        }
        setVendorMobile(vmobile){
            this.vmobile=vmobile
        }
        getVendorMobile(){
            return this.vmobile
        }
        setVendorVemail(vemail){
            this.vemail=vemail
        }
        getVendorVemail(){
            return this.vemail
        }
      
}

module.exports =  new VendorId