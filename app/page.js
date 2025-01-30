import Hero from "./components/Hero";
import LatestCars from "./components/LatestCars";
import About from "./components/About";
import Steps from "./components/Steps";
import AboutUs from "./components/AboutUs";
import Newslatter from "./components/Newslatter";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestCars />
      <About />
      <AboutUs /> 
      <Steps />
      <Newslatter/>
      
    </>
  );
}