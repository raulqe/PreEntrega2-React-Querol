import { NavBar } from "../components/NavBar/NavBar";
import {Footer} from "../components/Footer/Footer";
import logo1 from '../images/logo1.png';
import { Outlet } from "react-router-dom";

export const Layout=()=>{

    return(
        <>
            <header>
                <NavBar logo={logo1} />
            </header>
            
            <main>
                <Outlet/>
            </main>

            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-secondary-subtle border-top">
            <Footer logo={logo1}/> 
            </footer>

        </>
    );
    }