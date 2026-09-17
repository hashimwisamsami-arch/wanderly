import { gsap } from "gsap";

export const gsapDefaults = {
  ease: "power3.out",
  duration: 0.6,
};

export const gsapRevealDefaults = {
  opacity: 0,
  y: 24,
  duration: 0.6,
  ease: "power3.out",
};

export function setGsapDefaults() {
  gsap.defaults(gsapDefaults);
}
