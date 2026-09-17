import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";

function EmptyPage() {
  return <main className="min-h-screen bg-sky-500" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
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
