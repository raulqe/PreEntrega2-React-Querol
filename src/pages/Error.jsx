import logo1 from "../images/logo1.png";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

export const Error=()=>{
return(
    <>
    
    <ItemListContainer logo={logo1} mesage={"Error 404: Página no encontrada "} />
    <Link className="btnBack" to="/">Home</Link>
    
    </>
)   
}