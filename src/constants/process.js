import { MapPinned, SearchCheck, ShieldCheck, Luggage } from "lucide-react";

export const processSteps = [
  {
    id: "pick-destination",
    number: "01",
    title: "Pick a Destination",
    description: "Choose somewhere that makes you want to pack a bag.",
    icon: MapPinned,
  },
  {
    id: "find-trip",
    number: "02",
    title: "Find Your Trip",
    description:
      "Compare packages and choose the experience that fits your plans.",
    icon: SearchCheck,
  },
  {
    id: "confirm-booking",
    number: "03",
    title: "Confirm Your Booking",
    description: "Review the details and complete your booking securely.",
    icon: ShieldCheck,
  },
  {
    id: "start-exploring",
    number: "04",
    title: "Start Exploring",
    description:
      "Save your plans, pack your essentials, and enjoy the journey.",
    icon: Luggage,
  },
];
