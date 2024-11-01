import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <p>50% special offer</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <p>50% special offer</p>
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

