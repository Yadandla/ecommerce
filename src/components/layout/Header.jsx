import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { PiShoppingCartFill } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <header>
                <section className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo">
                                    {/* <img src="" alt="logo" /> */}
                                    <h1>TrendsU</h1>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <div className="menu-links">
                                    <ul>
                                        <li className="nav-item"><NavLink to="/" className={({ isActive }) => isActive ? "Nav-link active" : "Nav-link"}>Home</NavLink></li>
                                        <li className="nav-item"><NavLink to="/about" className="Nav-link">About</NavLink></li>
                                        <li className="nav-item"><NavLink to="/shop" className="Nav-link">Shop</NavLink></li>
                                        <li className="nav-item"><NavLink to="/wishlist" className="Nav-link">Wishlist</NavLink></li>
                                        <li className="nav-item"><NavLink to="/contact" className="Nav-link">Contact</NavLink></li>
                                        <li className="search"><FaSearch /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-end align-items-center">
                                <div className="ctas">
                                    <ul>
                                        <li className="nav-item2"><NavLink to="/login"><IoMdPerson /> Login</NavLink></li>
                                        <li className="nav-item2"><NavLink to="/cart"><PiShoppingCartFill /> Cart</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
