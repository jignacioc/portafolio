import Hero from "../components/commons/hero/Hero.jsx";
import AboutMe from "../components/about/AboutMe.jsx";
import Experience from "../components/about/Experience.jsx";
import Features from "../components/about/Features.jsx";
import Skills from "../components/about/Skills.jsx";
import FaqsAbout from "../components/about/FaqsAbout.jsx";
import BannerGithub from "../components/about/BannerGithub.jsx";
import Banner from "../components/commons/banners/Banner.jsx";

export default function About() {
    return (
        <>
            <Hero titulo="Sobre Mi" />
            <AboutMe />
            <Experience />
            <Features />
            <Skills />
            <FaqsAbout />
            <BannerGithub />
            <Banner />
        </>
    );
}
