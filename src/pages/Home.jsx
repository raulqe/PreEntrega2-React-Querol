// import { NavBar } from "../components/NavBar/NavBar";
import logo1 from '../images/logo1.png';
import Tshirt from '../images/Tshirts.jpg';
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Link } from 'react-router-dom';



export const Home=()=>{

    return(
        <>
         <ItemListContainer mesage={"Welcome to oh my T-shirt"} logo={logo1} />
            <div className="cardDetailProductShow">
                <article className="cardDetailProduct" id ="paragraph">
                    <p className="font">Loock our designs!!</p>
                    <img className="imgProductInfo" src={Tshirt} alt=" colored T-shirt" />
                    <p className="font-paragraph">Since 2024 Oh my T-shirt make the most funny design in the worl for our costumers. </p>
                    <Link to="Products"className="btnDetailProductLink">Our products</Link>
                </article>
            </div>
        </>
    );
    }