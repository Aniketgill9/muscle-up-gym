import HeroSection from "./HeroSection";
import FitnessTraining from "../fitnessTraining/FitnessTraining";
import Panner from "./Panner";
import Benefits from "./Benefits";
import About from "./About";

import GymAmenities from "./GymAmenities";
import OurPlans from "./OurPlans";


const Home = () => {
  return (
    <div className={` margin-sections `}>
      <HeroSection />
      <Panner />
      <About />
      <Benefits />
      <FitnessTraining />
      <GymAmenities />
      <OurPlans />
     
    </div>
  );
};

export default Home;
