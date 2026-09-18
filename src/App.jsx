import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Trips from "./pages/Trips.jsx";
import Destinations from "./pages/Destinations.jsx";
import Bookings from "./pages/Bookings.jsx";
import About from "./pages/About.jsx";

function EmptyPage() {
  return <main className="min-h-screen bg-sky-500" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trips" element={<Trips />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<EmptyPage />} />

        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}
