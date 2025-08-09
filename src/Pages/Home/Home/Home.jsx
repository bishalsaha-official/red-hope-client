import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Faq from "../Faq/Faq";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RedHope | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <ContactUs></ContactUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;