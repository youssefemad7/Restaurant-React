import React from "react";
import { connect } from "react-redux";
import Cartitem from "./Cartitem";
import { clearcart } from "./action/Action";
import { Link } from 'react-router-dom';

import { Container} from "reactstrap";

import Footer from "../../home/Footer"
function Cart({ cart, total, totalQuantity }) {

  return (
    <div >

      <div className="divteam">
        <Link to="/" >Home </Link><span> / Cart</span>
      </div>

{totalQuantity?(

<Container>
  <div  className="fff">
      <table className="tbleee  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
        <thead>
          <tr>
          <th></th>

            <th><p>Product</p></th>
            <th><p>Price</p></th>
            <th><p>Quantity</p></th>
            <th><p>Subtotal</p></th>

          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
         
            <Cartitem key={item.id} item={item} />
       
          ))}
        </tbody>
      </table>
      </div>
      <div className="formyn wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
        <form >
          <input type="text" placeholder="Coupon code" />
          <input type="submit" value="APPLY COUPON" />

        </form>
        <Link to="/Productss" > <button>UPDATE CART</button></Link>
      </div>
      <div className="totalll">
        <h3>CART TOTALS</h3>
        <div><h5>Subtotal</h5> <p>${total}</p></div>
        <hr />
        <div><h5>Total Items</h5> <p>${totalQuantity}</p></div>
        <hr />
        <Link to="/Checkout" > <button>proceed to checkout</button></Link>

      </div>
      </Container>
      
):<div className="cartxy wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s"><p>Your cart is currently empty.</p> <Link to="/Productss" ><button>Back to Shop</button></Link></div>}     
     
     
     
      <footer>
        <Footer />
      </footer>

    </div>


  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearcart: () => dispatch(clearcart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);