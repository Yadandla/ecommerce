import { Outlet } from "react-router-dom"
import Footer from "./layout/footer"
import Header from "./layout/header"

const Applayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Applayout
