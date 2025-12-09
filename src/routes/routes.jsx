import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import Product from "../pages/product";
import WhyDoIt from "../pages/why-do";
import ScrollToTop from "./scroll-top";


export default function MyRouts() {
   return (
      <>
         <BrowserRouter>
            <ScrollToTop />
            <Routes>
               <Route path="/" element={<Layouts />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/why/dot/it" element={<WhyDoIt />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}