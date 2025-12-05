import Header from "../commponent/common/header/header";
import Footer from "../commponent/common/footer/footer";
import { Outlet } from "react-router-dom";


export default function Layouts() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}