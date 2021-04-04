import { Fragment } from "react";

import Hero from "../../components/layout/Hero";
import Header from "../../components/layout/Header";
import HomeBody from "../../components/layout/HomeBody/HomeBody";
import Footer from "../../components/layout/Footer/Footer";


const Home = () => {
    return ( 
        <Fragment>
            <Header />
            <Hero />
            <HomeBody />
            <Footer />
        </Fragment>
     );
}
 
export default Home;