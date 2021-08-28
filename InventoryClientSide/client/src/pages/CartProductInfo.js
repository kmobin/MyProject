

const CartProductInfo = ({product})=>{

    return(
        
      <div >
       <img src="..." class="card-img-top" alt="..."  height="100px" width="100px" /> 
      <div >
        <p className="card-title"><strong>Name : </strong> {product.pname}</p>
        <p className="card-text"><strong>Brand : </strong>{product.pbrand}</p>
        <p className="card-text"><strong>Price : </strong>{product.sellprice}</p>
        <a href="#" class="btn btn-primary">Buy</a>
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
      </div>
   
    )
  
  
  
  }
  
  
  export default CartProductInfo