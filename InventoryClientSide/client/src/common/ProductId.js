const React = require("react");

class ProductId extends React.Component{

    constructor(){
        super();
        }
        print(){
            console.log(`id : ${this.pid}`)
            console.log(`pname : ${this.pname}`)
        }

           setProd(pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg,vid){
            this.pid=pid
            this.pname = pname
            this.pimage = pimage
            this.pmaingrp = pmaingrp
            this.psubgrp = psubgrp
            this.ptype = ptype
            this.pbrand = pbrand 
            this.currentstock = currentstock
             this.minstock = minstock
             this.maxstock = maxstock
        this.reorderlevel = reorderlevel
        this.reorderquantity = reorderquantity
         this.sellprice = sellprice
         this.alertmsg=alertmsg
         this.vid=vid

        }
        setPid(pid){
            this.pid=pid
        }
        getPid(){
            return this.pid
        }

        setProductName(pname){
            this.pname=pname
        }
        getProductname(){
            return this.pname
        }

        setProductImage(pimage){
            this.pimage=pimage
        }
        getProductImage(){
            return this.pimage
        }
        setProductMainGrp(pmaingrp){
            this.pmaingrp=pmaingrp
        }
        getProductMainGrp(){
            return this.pmaingrp
        }
        setProductSubGrp(psubgrp){
            this.psubgrp=psubgrp
        }
        getProductSubGrp(){
            return this.psubgrp
        }
        setProductType(ptype){
            this.ptype=ptype
        }
        getProductType(){
            return this.ptype
        }
        setProductBrand(pbrand){
            this.pbrand=pbrand
        }
        getProductBrand(){
            return this.pbrand
        }
        setCurrentStock(currentstock){
            this.currentstock=currentstock
        }
        getCurrentstock(){
            return this.currentstock
        }
        setMinStock(minstock){
            this.minstock=minstock
        }
        getMinstock(){
            return this.minstock
        }
        setMaxStock(maxstock){
            this.maxstock=maxstock
        }
        getmMaxstock(){
            return this.maxstock
        }
        setReorderlevel(reorderlevel){
            this.reorderlevel=reorderlevel
        }
        getReorderlevel(){
            return this.reorderlevel
        }
        setReorderquantity(reorderquantity){
            this.reorderquantity=reorderquantity
        }
        getReorderquantity(){
            return this.reorderquantity
        }
        setSellprice(sellprice){
            this.sellprice=sellprice
        }
        getSellprice(){
            return this.sellprice
        }
        setAlertmsg(alertmsg){
            this.alertmsg=alertmsg
        }
        getAlertmsg(){
            return this.alertmsg
        }
        setVendorId(vid){
            this.vid=vid
        }
        getVendorId(){
            return this.vid
        }
}

module.exports =  new ProductId