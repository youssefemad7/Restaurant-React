import React, { useState } from 'react';
import products from "./products.json";
import Productitem from "./Productitem";
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from "../home/Footer";

function Productss() {
  const [search, setSearch] = useState('');
  const [search3, setSearch3] = useState(0);
  const [search4, setSearch4] = useState("");

  const [quantityy, setQuantityy] = useState("");


  return (
    <div>
      <div className="divteam">
        <Link to="/" >Home </Link><span> / Our Team</span>
      </div>
      <Container className="SHOPALLL">
        <Row>


          <Col lg="9" md="9" sm="9" >

            <div>
              <form className="formmms">
                <select className="selectttt" onChange={event => { setQuantityy(event.target.value) }}>
                  <option >Default Something</option>

                  <option value="rate">Sort By Average Rating</option>
                  <option value="1-10">Sort By Price: Low to High</option>
                  <option value="10-1">Sort By Price: High to Low </option>

                </select>
              </form>
              <Row>

                {products.filter((product) => {
                  if (search === "" && search3 === "" && search4 === "" ) { return product; }
                  else if (product.name.toLowerCase().includes(search.toLowerCase()) && product.Category.toLowerCase().includes(search4.toLowerCase())) {
                    if (search3 == 0) { return product; }
                    else if (product.price == search3) {
                      return product;
                    }

                  }

                }).sort((x, y) => {
                  if (quantityy === '1-10') { return x.price < y.price ? -1 : 1 }
                  else if (quantityy === '10-1') { return x.price > y.price ? -1 : 1 }
                  else if (quantityy === 'rate') { return x.stars > y.stars ? -1 : 1 }

                }).map((product) => (
                  <Col lg="4" md="4" sm="12" key={product.id} >
                    <Productitem product={product} />
                  </Col>))}

              </Row>
            </div>

          </Col>
          <Col lg="3" md="3" sm="3" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">




            <form className="formaa">


              <input type="range" className="rangeee" id="range" name="range" max="30" min="0" onChange={event => { setSearch3(event.target.value) }} /><br />
              <div className="dflexyyy"><p>FILTER</p> <output name="textrange" id="textrange" for="range" >price: $ {search3} </output> </div>

              <img src="images/shop-banner.png" alt="" />

              <input type="text" placeholder='Search' onChange={event => { setSearch(event.target.value) }} />

              <h3>Categories</h3>
              <input type="radio"  name="fav_language1" value="" onChange={event => { setSearch4(event.target.value) }} />
              <label><span></span> all</label>
              <br />

              <input type="radio"  name="fav_language1" value="Classics" onChange={event => { setSearch4(event.target.value) }} />
              <label><span></span> Classics</label>
              <br />
              <input type="radio"  name="fav_language1" value="Cocktail" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Cocktail</label>
              <br />
              <input type="radio"  name="fav_language1" value="Drinks" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Drinks</label>
              <br />
              <input type="radio"  name="fav_language1" value="Organic" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Organic</label>
              <br />
              <input type="radio"  name="fav_language1" value="Specials" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Specials</label>
              <br />
            </form>

          </Col>
        </Row>











      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Productss
