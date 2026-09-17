import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";

import Hero from "./components/sections/Hero.jsx";
import TripSearch from "./components/sections/TripSearch.jsx";
import Benefits from "./components/sections/Benefits.jsx";
import PopularTrips from "./components/sections/PopularTrips.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import HowItWorks from "./components/sections/HowItWorks.jsx";

function Home() {
  return (
    <main>
      <Hero />
      <TripSearch />
      <Benefits />
      <PopularTrips />
      <Pricing />
      <HowItWorks />
    </main>
  );
}

function EmptyPage() {
  return <main className="min-h-screen bg-sky-500" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trips" element={<EmptyPage />} />
        <Route path="/destinations" element={<EmptyPage />} />
        <Route path="/bookings" element={<EmptyPage />} />
        <Route path="/about" element={<EmptyPage />} />
        <Route path="/contact" element={<EmptyPage />} />

        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}
