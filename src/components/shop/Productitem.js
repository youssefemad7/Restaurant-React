import React, { Component } from 'react';
import {Link } from "react-router-dom";
import { addToCart } from "./Cartfolder/action/Action";
import { connect } from "react-redux";


export class Productitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      quantity: 1,
      product: {},}
}
    addToCart = (product) => {
      this.props.addToCart(product, this.state.quantity);
    }
  render() {
  
    const product = this.props.product;
   
    return (
      <div className="productitemm wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
          <Link  to={"/Productss/" + product.id} >


          <img  src={product.img} alt="" />
   
          <h3>{product.name}</h3>
      
           <p>{product.price} $</p>

          </Link>
          <button onClick={() => this.addToCart(product)}>Add to cart</button>

        </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),

  }
}
export default connect(null, mapDispatchToProps)(Productitem)



