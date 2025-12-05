import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import Product from "../pages/product";


export default function MyRouts(){
    return(
        <>
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Layouts/>}>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/product" element={<Product/>}/>
              </Route>
           </Routes>
        </BrowserRouter>
        </>
    )
}