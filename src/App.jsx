import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import './App.css';
/* Pages Link Routes  */
import { Layout } from "./pages/Layout";
import {Home} from "./pages/Home";
import { Products } from "./pages/Products";
import { Sale } from "./pages/Sale";
import { Shipping } from "./pages/Shipping";
import { Error } from "./pages/Error";
import { DetalleProducto } from "./pages/DetalleProducto";

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<Layout/>}>
					<Route index element={<Home />}/>
					<Route path="Products" element={<Products />}/>
					<Route path="Sale" element={ <Sale  />}/> 
					<Route path="Shipping" element={<Shipping  />}/> 
					<Route path="Products/:productoId" element={<DetalleProducto/>}/>
					<Route path="*" element={<Error/>}/>     
			</Route>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
