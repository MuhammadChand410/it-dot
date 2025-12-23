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
import RequestDemo from "../pages/request-demo/requestt-demo";
import CaseStudies from "../pages/case-studies";
import Transforming from "../commponent/common/case-studies-common/transforming";
import Enhancing from "../commponent/common/case-studies-common/enhancing";
import Streamlining from "../commponent/common/case-studies-common/streamlining";
import Revotionizing from "../commponent/common/case-studies-common/revolutionizing";
import Boosting from "../commponent/common/case-studies-common/boosting";
import Reducing from "../commponent/common/case-studies-common/reducing";
import Creating from "../commponent/common/case-studies-common/creating";
import Automating from "../commponent/common/case-studies-common/automating";


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
                  <Route path="/request/demo" element={<RequestDemo />} />
                  <Route path="/case/studies" element={<CaseStudies />} />
                  <Route path="/transforming" element={<Transforming />} />
                  <Route path="/enhancing" element={<Enhancing />} />
                  <Route path="/streamlining" element={<Streamlining />} />
                  <Route path="/revolutionizing" element={<Revotionizing />} />
                  <Route path="/boosting" element={<Boosting />} />
                  <Route path="/reducing" element={<Reducing />} />
                  <Route path="/creating" element={<Creating />} />
                  <Route path="/automating" element={<Automating />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}