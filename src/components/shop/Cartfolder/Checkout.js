import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import Footer from "../../home/Footer"

import { Link } from 'react-router-dom';

export class Checkout extends Component {
  constructor(props){
    super(props)
    this.state={
        fields:{},
        errors:{}
    }
}
handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;


if(!fields["name"]){
  formIsValid= false;
  errors["name"]="First name cannot be empty"
  
}
else if(typeof fields["name"] !=="undefined"){
  if(!fields["name"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["name"]="First name must be only letters";
      
  }
}
if(!fields["secondname"]){
  formIsValid= false;
  errors["secondname"]="Second name cannot be empty"
  
}
else if(typeof fields["secondname"] !=="undefined"){
  if(!fields["secondname"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["secondname"]="Second name must be only letters";
      
  }
}
 if(typeof fields["company"] !=="undefined"){
  if(!fields["company"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["company"]="Company Name must be only letters";
      
  }
}
 if(!fields["email"]){
  formIsValid= false;
  errors["email"]="Email cannot be empty"

}

else if(typeof fields["email"] !=="undefined"){
  if(!fields["email"].match("@")){
      formIsValid =false;
      errors["emails"]="use @"
     
  }
}


if(!fields["Address"]){
  formIsValid= false;
  errors["Address"]="Address cannot be empty"
  
}

if(!fields["City"]){
  formIsValid= false;
  errors["City"]="City cannot be empty"
  
}
else if(typeof fields["City"] !=="City"){
  if(!fields["City"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["City"]="City must be only letters";
      
  }
}if(!fields["Country"]){
  formIsValid= false;
  errors["Country"]="Country cannot be empty"
  
}
else if(typeof fields["Country"] !=="Country"){
  if(!fields["Country"].match(/^[a-zA-Z]+$/)){
      formIsValid =false;
      errors["Country"]="Country must be only letters";
      
  }
}if(!fields["ZipCode"]){
  formIsValid= false;
  errors["ZipCode"]="ZipCode cannot be empty"
  
}
else if(typeof fields["ZipCode"] !=="ZipCode"){
  if(!fields["ZipCode"]==6){
      formIsValid =false;
      errors["ZipCode"]="ZipCode must be 6 digit";
      
  }
}
if(!fields["number"]){
  formIsValid= false;
  errors["number"]="number cannot be empty"
  
}
else if(typeof fields["number"] !=="number"){
  if(!fields["number"]==11){
      formIsValid =false;
      errors["number"]="number must be 11 digit";
      
  }
}
this.setState({errors:errors});
return  formIsValid;


}
contactSubmit(e){
  e.preventDefault();
  if(this.handleValidation()){
      alert("sumited")
  }else{
      alert(`wrong `)
  }
}
handleChange(field , e){
  let fields = this.state.fields;
  fields[field]= e.target.value;
  this.setState({fields})
}
    render() {
        return (
            <div className="checkout">
                          <div className="divteam wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                    <Link to="/" >Home </Link><span> / Our Team</span>
                </div>
                      <Container className="formchechout">
                        <h3>Billing details</h3>
  <form onSubmit={this.contactSubmit.bind(this )} >

      <Row>

        <Col lg="8" md="8" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
<p>First Name<span>*</span></p>
<input type="text" name="fname" onChange={this.handleChange.bind(this , "name")} value={this.state.fields["name"]} />
<span>{this.state.errors["name"]}</span>
<div className="checkform">
<p>Last Name<span>*</span></p>
<input type="text" name="sname" onChange={this.handleChange.bind(this , "secondname")} value={this.state.fields["secondname"]} />
</div>
<span>{this.state.errors["secondname"]}</span>
<div className="checkform">
<p>Company Name (optional)</p>
<input type="text" name="company"  onChange={this.handleChange.bind(this , "company")} value={this.state.fields["company"]}/>
</div>
<span>{this.state.errors["company"]}</span>
<div className="checkform">
<p>Street Address<span>*</span></p>
<input type="text" name="address"  onChange={this.handleChange.bind(this , "Address")} value={this.state.fields["Address"]} />
</div>
<span>{this.state.errors["Address"]}</span>
<div className="checkform">
<p>City<span>*</span></p>
<input type="text" name="City" onChange={this.handleChange.bind(this , "City")} value={this.state.fields["City"]}/>
</div>
<span>{this.state.errors["City"]}</span>
<div className="checkform">
<p>Country<span>*</span></p>
<input type="text" name="Country"   onChange={this.handleChange.bind(this , "Country")} value={this.state.fields["Country"]}/>
</div>
<span>{this.state.errors["Country"]}</span>
<div className="checkform">
<p>Zip/Postal Code<span>*</span></p>
<input type="text" name="ZipCode"   onChange={this.handleChange.bind(this , "ZipCode")} value={this.state.fields["ZipCode"]}/>
</div>
<span>{this.state.errors["ZipCode"]}</span>
<div className="checkform">
<p>Phone<span>*</span></p>
<input type="number" name="number"  onChange={this.handleChange.bind(this , "number")} value={this.state.fields["number"]} />
</div>
<span>{this.state.errors["number"]}</span>
<div className="checkform">
<p>Email<span>*</span></p>
<input type="email" name="email"  onChange={this.handleChange.bind(this , "email")} value={this.state.fields["email"]}/>
</div>
<span>{this.state.errors["email"]}</span>

  <input type="submit" value="Place Order"  />
 
        </Col>
        <Col lg="4" md="4" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
            <h3>Additional information</h3>
            <div>
            <p>Order Notes (Optional)</p>
<input type="text" name="information"  />
</div>
          
        </Col>
    
        </Row>
        </form>    

        
          <h3>Your order</h3>
          <div className="formcheckn wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
            <div><p>Number Of Products	</p><p>{this.props.totalQuantity} </p></div>
            <hr />
            <div><p>Total Price	</p><p>{this.props.total} $ </p></div>
            <hr />

          </div>
   
         
          </Container>

        <footer>
        <Footer />
        </footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {

    total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0),
  };
};


export default connect(mapStateToProps, null)(Checkout);

