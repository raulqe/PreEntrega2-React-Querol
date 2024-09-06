
import logo1 from '../images/logo1.png';
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
// import { Productos } from '../pages/Productos.jsx';
import productos from "../data";
import { Link } from "react-router-dom";

export const Products=()=>{

    return(
        <>

            <ItemListContainer mesage={"Welcome to Products"} logo={logo1} />
            <div className="cardProductShow">
                {productos.map((producto)=>{
                    const {id,title,image,category}=producto;

                    return(
                        <article className="cardProduct" key={id}>
                            <p className='font'>{title}</p>
                            <img className="imgProduct" src={image} alt={category} />
                        <Link Link to={`${id}`}className=" btnDetailProduct btnDetailProductLink" >More details</Link>
                            
                        </article>
                    );
                })};
            </div>
       </>
    );
    }