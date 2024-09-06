import {Link,useParams}from "react-router-dom";
import productos from "../data";



export const DetalleProducto=()=>{
    const {productoId} = useParams();
    const resultadoDetalle = productos.find(producto=> producto.id == productoId);
    console.log(productoId);
    console.log(resultadoDetalle);
    const {id,title,image,closeUp,description,category}=resultadoDetalle;
    return(
    <>
    <div className="cardDetailProductShow">
    <article className="cardDetailProduct" key={id}>
    <p className="font">{title}</p>
    <img className="imgDetailProduct" src={image} alt={category} />
    <img className="imgDetailProductCloseUp" src={closeUp} alt={category} />
    <p className="font-paragraph">{description}</p>
    <Link className="btnDetailProductLink">Buy</Link>
    </article>
    <Link className="btnBack" to="/Products">Back</Link>
    </div>
    </>);
}