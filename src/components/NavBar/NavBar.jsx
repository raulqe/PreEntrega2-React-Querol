import {CartWidget} from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = ({ logo }) => {

    return (
        <>
            <nav className="d-flex flex-wrap justify-content-center py-3 border-secondary-subtle border-bottom ">

                <Link className="d-flex align-items-center me-5 mb-3 mb-md-1 me-md-auto link-body-emphasis text-white text-decoration-none" to="Products">
                    <img className=" logo bi ms-2 me-2 " src={logo} alt="Origo logo. Two concentric circles involved within an other circle which has two spheres, one on the top right and the other one on the bottom left."></img>
                    <span className="logoTitle fs-4 ">h my T-shirt</span>
                </Link>
                
                <ul className="nav nav-pills  ">
                <li className="nav-item "><Link  className="btnS font nav-link  text-white" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item "><Link  className="btnS font nav-link nav-link-hover text-white" to="Products">Products</Link></li>
                <li className="nav-item "><Link  className="btnS font nav-link nav-link-hover text-white" to="Sale">Sale</Link></li>
                <li className="nav-item "><Link  className="btnS font nav-link nav-link-hover text-white" to="Shipping">Shipping</Link></li>

                    <li className="nav-item" ><CartWidget/></li>
                </ul>
            </nav>
        </>
    );
}