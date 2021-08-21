
const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.pid}</td>
      <td>{product.pname}</td>
      <td>{product.pmaingrp}</td>
      <td>{product.psubgrp}</td>
      <td>{product.ptype}</td>
      <td>{product.pbrand}</td>
      <td>{product.currentstock}</td>
      <td>{product.minstock}</td>
      <td>{product.maxstock}</td>
      <td>{product.reorderlevel}</td>
      <td>{product.reorderquantity}</td>
      <td>{product.sellprice}</td>
      <td>{product.alertmsg}</td>
    </tr>
  )
}

export default ProductRow