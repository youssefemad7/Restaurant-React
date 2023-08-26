import React, { Component } from 'react'
import { getById } from "./products";
import Slider from "react-slick";
import { addToCart } from "./Cartfolder/action/Action";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import Footer from "../home/Footer";
import Lists from "./Lists";

class Productdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      quantity: 1,
      product: {},
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
      this.handleInput = this.handleInput.bind(this)
      this.addItem = this.addItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
  
    };



  componentDidMount() {
    const id = this.props.match.params.id;


    getById(parseInt(id))
      .then(product => {
        this.setState({
          product
        });
      })
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });

  }

  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  }
  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 1)
      return;
    this.setState({
      quantity: value
    })
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()

      }

    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''

        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }


  render() {
    const product = this.state.product;
    const quantity = this.state.quantity;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const runcallback = (cb) => {
      return cb();
    }
    return (
      <div className="slidessdetail">

        <Container >
          <Row>

            <Col lg="6" md="6" sm="12"  className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
              >
                <div className="imgslide">
                  <img src={product.img} alt="" />
                </div>
                <div className="imgslide">
                  <img src={product.img2} alt="" />
                </div>
                <div className="imgslide">
                  <img src={product.img3} alt="" />
                </div>
                <div className="imgslide">
                  <img src={product.img4} alt="" />
                </div>
              </Slider>
              <Slider
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                <div className="imgggyyyy">
                  <img src={product.img} alt="" />
                </div>
                <div className="imgggyyyy">
                  <img src={product.img2} alt="" />
                </div>
                <div className="imgggyyyy">
                  <img src={product.img3} alt="" />
                </div>
                <div className="imgggyyyy">
                  <img src={product.img4} alt="" />
                </div>
              </Slider>

            </Col>

            <Col lg="6" md="6" sm="12"  className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">


              <div className="detailyyy">

                <h3>{product.name}</h3>
                <h4> {runcallback(() => {
                  const row = []
                  for (var i = 0; i < product.stars; i++) {
                    row.push(<span className="stary" >  ★ </span>)
                  }
                  for (var n = 0; n < 5 - product.stars; n++) {
                    row.push(<span className="stary">   ☆</span>)
                  }
                  return row;
                })
                }</h4>
                <h5>${product.price}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam qui is nostrum. Lorem ipsum dolor sit amet.</p>
                <div className="dibutton">
                  <input className="inputdetail" type="number" value={quantity} onChange={this.handleQuantity} />
                  <button onClick={() => this.addToCart(product)} >Add to Cart</button>
                </div>
                <h5>Total Price:<span> ${quantity * product.price}</span></h5>

                <h5>Category: <span>{product.Category}</span></h5>


              </div>
            </Col>

          </Row>
        <section  className="reviewww wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
              > Description</a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
              > Additional information</a >
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
              >Reviews </a>
            </li>
          </ul>
          <div className="tab-content" id="ex1-content">
            <div
              className="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam nostrum d. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam qui is nostrum dos. Lorem ipsum dolor sit amet.</p>


            </div>
            <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              <h5>Weight: <span>{product.Weight}</span></h5>
             <h5>Dimensions: <span>{product.Dimensions}</span></h5>

            </div>
            <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
              <h3>Reviews</h3>
              <p>There are no reviews yet.</p>
<div className="reviewma">
  <h3> review “{product.name}”</h3>
  <Lists items={this.state.items} deleteItem={this.deleteItem} />

  <p>Your email address will not be published. Required fields are marked *</p>
</div>
<form id="to-do-form" onSubmit={this.addItem}>
<textarea rows="5"  value={this.state.currentItem.text} onChange={this.handleInput} placeholder="Your Review*"></textarea>
<div className="dflexyy">
                      <input type="text" placeholder="Your Name*"/>
                      <input type="email" placeholder="Your Email*"/>
</div>
<input type="checkbox" /><label>Save my name, email, and website in this browser for the next time I comment</label>
                   <br />
                      <button type="submit">Submit</button>
                    </form>
            </div>
          </div>

        
        </section>
      

        <section className="hhhhhhh">

          <Slider {...settings}   className=" wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="prrrrrr">


              <img src="/images/shop-img-7.jpg" alt="" />



              <button onClick={() => window.location.href = "/Productss/3"}>view more</button>

            </div>
            <div className="prrrrrr">


              <img src="/images/shop-img-5 (1).jpg" alt="" />



              <button onClick={() => window.location.href = "/Productss/7"}>view more</button>

            </div>
            <div className="prrrrrr">


              <img src="/images/shop-img-9.jpg" alt="" />



              <button onClick={() => window.location.href = "/Productss/9"}>view more</button>

            </div>
            <div className="prrrrrr">


              <img src="/images/shop-img-12.jpg" alt="" />



              <button onClick={() => window.location.href = "/Productss/15"}>view more</button>

            </div>
            <div className="prrrrrr">


              <img src="/images/shop-img-3.jpg" alt="" />



              <button onClick={() => window.location.href = "/Productss/5"}>view more</button>

            </div>
          </Slider>




        </section>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
  }
}
export default connect(null, mapDispatchToProps)(Productdetail)


