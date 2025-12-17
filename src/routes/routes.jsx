import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import Product from "../pages/product";
import WhyDoIt from "../pages/why-do";
import ScrollToTop from "./scroll-top";
import Blogs from "../pages/blogs";
import KeyDataBosted from "../pages/keydata-boosted";
import Contact from "../pages/contact";


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
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/key/data/bossted" element={<KeyDataBosted />} />
                  <Route path="/contact/us" element={<Contact />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}