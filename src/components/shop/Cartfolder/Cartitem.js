import React from 'react';
import { connect } from "react-redux";


import { removefromcart } from "./action/Action";


function Cartitem( props) {
  const { item, index } = props;
  const { product } = item;

   return (
    
 
   
<tr className="divcarttttt">

          <td className="hhh5">
            <button className="buttonx" onClick={() => props.removefromcart(index)} >x</button> 

<img height="200px"  src={product.img} />

</td>
<td><p>{product.name}</p></td>
          <td><p>{product.price}$</p></td>
          <td><div className="dcartt">{item.quantity}</div></td>
          <td><p>{item.quantity*product.price}$</p></td>

      
        
            
 </tr>
 
 
  





  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removefromcart: (index) => dispatch(removefromcart(index))
  }
}
export default connect(null, mapDispatchToProps)(Cartitem);