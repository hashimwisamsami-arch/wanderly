import Hero from "../components/sections/Hero.jsx";
import TripSearch from "../components/sections/TripSearch.jsx";
import Benefits from "../components/sections/Benefits.jsx";
import PopularTrips from "../components/sections/PopularTrips.jsx";
import Pricing from "../components/sections/Pricing.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import Statistics from "../components/sections/Statistics.jsx";
import Testimonial from "../components/sections/Testimonial.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <TripSearch />
      <Benefits />
      <PopularTrips />
      <Pricing />
      <HowItWorks />
      <Statistics />
      <Testimonial />
    </main>
  );
};

export default Home;
