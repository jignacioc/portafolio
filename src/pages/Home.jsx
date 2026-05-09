import Header from "../components/home/header/Header.jsx";
import Slider from "../components/home/header/Slider.jsx";
import AboutHome from "../components/home/aboutHome/AboutHome.jsx";
import HomeProyect from "../components/home/homeProyect/HomeProyect.jsx";
import FAQS from "../components/home/faqs/faqs.jsx";
import Banner from "../components/commons/banners/Banner.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Slider />
            <AboutHome />
            <HomeProyect />
            <FAQS />
            <Banner />
        </>
    );
}
