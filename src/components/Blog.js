import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import Footer from "./home/Footer";
import * as mdb from 'mdb-ui-kit'; // lib

/*       <RiDoubleQuotesL />
<!-- <GiBreakingChain />-->
*/
export default class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mount: false,
            mount1: false,
            mount2: false,
            mount3: false,
            mount4: false,
            mount5: false,
            mount6: false,
            mount7: false,
            mount8: false,


        }
    }
    mountcounter = () => this.setState({ mount: true })
    unmountcounter = () => this.setState({ mount: false })
    mountcounter1 = () => this.setState({ mount1: true })
    unmountcounter1 = () => this.setState({ mount1: false })
    mountcounter2 = () => this.setState({ mount2: true })
    unmountcounter2 = () => this.setState({ mount2: false })
    mountcounter3 = () => this.setState({ mount3: true })
    unmountcounter3 = () => this.setState({ mount3: false })
    mountcounter4 = () => this.setState({ mount4: true })
    unmountcounter4 = () => this.setState({ mount4: false })
    mountcounter5 = () => this.setState({ mount5: true })
    unmountcounter5 = () => this.setState({ mount5: false })
    mountcounter6 = () => this.setState({ mount6: true })
    unmountcounter6 = () => this.setState({ mount6: false })
    mountcounter7 = () => this.setState({ mount7: true })
    unmountcounter7 = () => this.setState({ mount7: false })
    mountcounter8 = () => this.setState({ mount8: true })
    unmountcounter8 = () => this.setState({ mount8: false })
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <section className="blogsec">

                    <h3 className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">Blog</h3>

                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="3" md="3" sm="12" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">

                                <div>
                                    <div className="fsecbloggg">
                                        <img src="images/blog-img-02.png" alt="" />
                                        <h3>Anna Osi</h3>
                                        <p>Main Cook</p>
                                        <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />

                                    </div>

                                    <div className="imgblogg">
                                        <h3>Recent Posts</h3>

                                        <img src="images/h5-blog-featured-img-3.jpg" alt="" />
                                        <p>April 13, 2021</p>
                                        <h5>From black or blue drinks to famous classic cocktails</h5>

                                    </div>
                                    <div className="imgblogg">
                                        <img src="images/h5-blog-featured-img-2.jpg" alt="" />
                                        <p>April 13, 2021</p>
                                        <h5>From black or blue drinks to famous classic cocktails</h5>

                                    </div>
                                    <div className="imgblogg">
                                        <img src="images/h5-blog-featured-img-1.jpg" alt="" />
                                        <p>April 13, 2021</p>
                                        <h5>From black or blue drinks to famous classic cocktails</h5>

                                    </div>
                                    <div>
                                        <div className="divflexblogggg">
                                            <div className="divyyyblog"><img src="images/175700720_377193473476529_952246582101252249_nfull.jpg" alt="" /><button><FiInstagram /></button></div>
                                            <div className="divyyyblog"><img src="images/178869355_498457467953054_5470290483997024678_nfull.jpg" alt="" /><button><FiInstagram /></button></div>
                                            <div className="divyyyblog"><img src="images/178167344_311404807286470_8188824360500680463_nfull.jpg" alt="" /><button><FiInstagram /></button></div>




                                        </div>

                                        <div className="divflexblogggg">
                                            <div className="divyyyblog"><img src="images/178513393_1407418809617048_3636048826663259834_nfull.jpg" alt="" /><button><FiInstagram /></button></div>
                                            <div className="divyyyblog"><img src="images/178188410_260612339142678_5135231227878148437_nfull.jpg" alt="" /><button><FiInstagram /></button></div>
                                            <div className="divyyyblog"><img src="images/178379541_140073071363046_7423492925548166562_nfull.jpg" alt="" /><button><FiInstagram /></button></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="9" md="9" sm="12">
                                <div className="divbloggg" >


                                    <div className="tab-content" id="ex1-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="ex1-tabs-1"
                                            role="tabpanel"
                                            aria-labelledby="ex1-tab-1"
                                        >
                                            <div>
                                                <div className="fsecblog  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"><img src="images/blog-img-03 (1).jpg" alt="" /></div>
                                                <div className="ssecblog  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>THE BEST WAY TO PREPARE CRISPY & DELICIOUS BURGERS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    </p>
                                                    {this.state.mount ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}






                                                </div>

                                                <div className="thirdsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <h3>
                                                        “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut”
                                                    </h3>
                                                    <p>Lily Ward - Food Critic
                                                    </p>

                                                </div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <img src="images/blog-img-01 (1).jpg" alt="" />
                                                </div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>THE BEST WAY TO PREPARE CRISPY & DELICIOUS BURGERS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount1 ?
                                                       (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter1} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter1} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <div className="lastsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>Lorem ipsum dolor sit amet, consec tetur</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                            <div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"><img src="images/blog-img-06.jpg" alt="" /></div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>EASY, OVEN BAKED HAMBURGERS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount2 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter2} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter2} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/jKjGY98nvR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>WHOLESOME NOURISH BOWLS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount3 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter3} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter3} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <img src="images/blog-img-01 (1).jpg" alt="" />
                                                </div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>RAINBOW VEGGIE SPRING BOWL</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount4 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter4} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter4} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <Slider {...settings} className="hhhhhhhhhhhhhhh wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <div className="fsecblkkkog">
                                                        <img src="images/p6-img-04.jpg" alt="" />
                                                    </div>
                                                    <div className="fsecblog">
                                                        <img src="images/blog-img-05.jpg" alt="" />


                                                    </div>


                                                </Slider>





                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>HOMEMADE BEEF BURGER RECIPE</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount5 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter5} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter5} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>


                                            </div>  </div>
                                        <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                            <div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"><img src="images/h5-blog-img-1.jpg" alt="" /></div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>AUTUMN COCKTAILS ARE FILLED WITH SEASONAL FLAVORS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount6 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter6} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter6} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"><img src="images/h5-blog-img-2.jpg" alt="" /></div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>THE VAMPIRE’S KISS MARTINI IS AN EXTREMELY SIMPLE</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount7 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter7} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter7} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>
                                                <div className="fsecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"><img src="images/h5-blog-img-3.jpg" alt="" /></div>
                                                <div className="ssecblog wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                                    <p>April 12, 2021 / Lunch</p>
                                                    <h3>FROM BLACK OR BLUE DRINKS TO FAMOUS CLASSIC COCKTAILS</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                                    {this.state.mount8 ?


                                                        (<div><p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p><div className="dflexyyyy"><button onClick={this.unmountcounter8} >Read less</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>) :
                                                        <div><div className="dflexyyyy"><button onClick={this.mountcounter8} >Read more</button><div>SHARE: <FiInstagram /><AiOutlineTwitter /><AiFillFacebook /></div></div></div>}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
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
                                            >01</a>
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
                                            >02</a >
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
                                            >03</a>
                                        </li>
                                    </ul>
                                </div>


                            </Col>
                        </Row>
                    </Container>
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>

        );
    }
}
