import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import Product from "../pages/product";
import WhyDoIt from "../pages/why-do";
import ScrollToTop from "./scroll-top";
import Blogs from "../pages/blogs";
import Contact from "../pages/contact";
import BillWash from "../commponent/common/single-blog/bill-wash";
import PmMental from "../commponent/common/single-blog/om-mental";
import WhatWirefaring from "../commponent/common/single-blog/what-wirefaring";
import TopJavasript from "../commponent/common/single-blog/top-javascript";
import KeyDataBosted from "../commponent/common/single-blog/key-data-boosted";
import Princing from "../pages/princing";

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
                  <Route path="/contact/us" element={<Contact />} />
                  <Route path="/bill/wash" element={<BillWash />} />
                  <Route path="/pm/mental" element={<PmMental />} />
                  <Route path="/what/wirefaring" element={<WhatWirefaring />} />
                  <Route path="/top/javascript" element={<TopJavasript />} />
                  <Route path="/key/data/bossted" element={<KeyDataBosted />} />
                  <Route path="/princing" element={<Princing />} />
                  
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}