import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { BsArrowsFullscreen } from "react-icons/bs";

export const Home = () => {
    return (
        <>
            <main>
                {/* Banners Part Starts*/}
                <section className="banner-part">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/banner1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/banner2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/banner3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                {/* Banners Part Ends*/}

                {/* Introduction Part Starts */}
                <section className="Intro-part space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h2 className="pb-1 fw-bold">Welcome to Trends<span className="u-char">U</span> – Redefine Your Style!</h2>
                                    <p>Step into a world where fashion meets individuality. At TrendsU, we believe every woman deserves to feel confident and stylish in pieces crafted with care. Discover our exclusive collection of timeless essentials, bold trends, and season-ready looks curated just for you. Whether you’re dressing up or keeping it casual, we’ve got styles that speak to your unique personality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Introduction Part Ends */}

                {/* Know More Part Starts */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Free Delivery</h2>
                                    <p>Enjoy free shipping on all orders, straight to your doorstep!</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>24/7 Support</h2>
                                    <p>Our team is here to help anytime, day or night.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Easy Returns</h2>
                                    <p>Shop with confidence with hassle-free returns.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Exclusive Collection</h2>
                                    <p>Explore unique styles, crafted just for you.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Secure Payments</h2>
                                    <p>Pay with ease, knowing your information is safe.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Loyalty Rewards</h2>
                                    <p>Earn points on every purchase and save more!</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Satisfaction Guaranteed</h2>
                                    <p>Our priority is your happiness with every order.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <img />
                                    <h2>Fast Shipping</h2>
                                    <p>Get your order delivered in record time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Know More Part Ends */}

                {/* Collections Part Starts */}
                <section className="collections-part space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-left">
                                    <h2 className="pb-1 fw-bold">Top Picks for You</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row new-arrivals">
                            <div className="col-md-3">
                                <div className="product-card">
                                    <div className="likes">
                                        <ul>
                                            <li><FaHeart /></li>
                                            <li><FaCartShopping /></li>
                                            <li><FaShare /></li>
                                            <li><BsArrowsFullscreen /></li>
                                        </ul>
                                    </div>
                                    <img src="./images/jacket.png" alt="" />
                                    <div className="text-center pt-2 bg-white">
                                        <h4 className="fw-bold">warrior arrival1</h4>
                                        <p>$ 20.00</p>
                                        <div className="buy-btn pb-3">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-card">
                                    <div className="likes">
                                        <ul>
                                            <li><FaHeart /></li>
                                            <li><FaCartShopping /></li>
                                            <li><FaShare /></li>
                                            <li><BsArrowsFullscreen /></li>
                                        </ul>
                                    </div>
                                    <img src="./images/jacket.png" alt="" />
                                    <div className="text-center pt-2 bg-white">
                                        <h4 className="fw-bold">warrior arrival1</h4>
                                        <p>$ 20.00</p>
                                        <div className="buy-btn pb-3">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-card">
                                    <div className="likes">
                                        <ul>
                                            <li><FaHeart /></li>
                                            <li><FaCartShopping /></li>
                                            <li><FaShare /></li>
                                            <li><BsArrowsFullscreen /></li>
                                        </ul>
                                    </div>
                                    <img src="./images/jacket.png" alt="" />
                                    <div className="text-center pt-2 bg-white">
                                        <h4 className="fw-bold">warrior arrival1</h4>
                                        <p>$ 20.00</p>
                                        <div className="buy-btn pb-3">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-card">
                                    <div className="likes">
                                        <ul>
                                            <li><FaHeart /></li>
                                            <li><FaCartShopping /></li>
                                            <li><FaShare /></li>
                                            <li><BsArrowsFullscreen /></li>
                                        </ul>
                                    </div>
                                    <img src="./images/jacket.png" alt="" />
                                    <div className="text-center pt-2 bg-white">
                                        <h4 className="fw-bold">warrior arrival1</h4>
                                        <p>$ 20.00</p>
                                        <div className="buy-btn pb-3">
                                            <a href="#">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Collections Part Ends */}

                {/* Offers Part Starts */}
                <section className="poster space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <img src="images/example2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <img src="images/example.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Offers Part Ends */}
            </main>
        </>
    )
}

