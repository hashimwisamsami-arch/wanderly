import { useEffect, useRef } from "react";
import { Compass, Heart, Map, Sparkles } from "lucide-react";
import { gsap } from "gsap";

import { Spotlight } from "../components/ui/spotlight";
import { BorderBeam } from "../components/ui/border-beam";

const values = [
  {
    id: "discovery",
    title: "Meaningful Discovery",
    description:
      "We believe travel is about discovering places, experiences, and moments that stay with you.",
    icon: Compass,
  },
  {
    id: "simplicity",
    title: "Simple Planning",
    description:
      "Travel planning should feel clear and enjoyable, with the important details easy to understand.",
    icon: Map,
  },
  {
    id: "experiences",
    title: "Memorable Experiences",
    description:
      "We focus on journeys that give travelers opportunities to explore, experience, and create memories.",
    icon: Sparkles,
  },
  {
    id: "travelers",
    title: "Traveler First",
    description:
      "Every part of the experience should help travelers feel more comfortable and confident.",
    icon: Heart,
  },
];

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const heroContent = root.querySelector(".about-hero-content");
    const intro = root.querySelector(".about-intro");
    const valueCards = root.querySelectorAll(".about-value-card");
    const story = root.querySelector(".about-story");
    const storyItems = root.querySelectorAll(".about-story-item");

    if (reduceMotion) {
      gsap.set([heroContent, intro, valueCards, story, storyItems], {
        opacity: 1,
        y: 0,
      });

      return undefined;
    }

    gsap.set(heroContent, {
      opacity: 0,
      y: 24,
    });

    gsap.set(intro, {
      opacity: 0,
      y: 22,
    });

    gsap.set(valueCards, {
      opacity: 0,
      y: 28,
    });

    gsap.set(story, {
      opacity: 0,
      y: 24,
    });

    gsap.set(storyItems, {
      opacity: 0,
      y: 18,
    });

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    heroTimeline.to(heroContent, {
      opacity: 1,
      y: 0,
      duration: 0.7,
    });

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(intro, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });

        introObserver.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(valueCards, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
        });

        cardsObserver.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    const storyObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .to(story, {
            opacity: 1,
            y: 0,
            duration: 0.6,
          })
          .to(
            storyItems,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.1,
            },
            "-=0.3",
          );

        storyObserver.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    if (intro) {
      introObserver.observe(intro);
    }

    if (valueCards.length > 0) {
      cardsObserver.observe(valueCards[0]);
    }

    if (story) {
      storyObserver.observe(story);
    }

    return () => {
      introObserver.disconnect();
      cardsObserver.disconnect();
      storyObserver.disconnect();

      gsap.killTweensOf([
        heroContent,
        intro,
        ...valueCards,
        story,
        ...storyItems,
      ]);
    };
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f5fa8] py-28 sm:py-32 lg:py-36">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <div className="page-container relative z-10">
          <div className="about-hero-content mx-auto max-w-3xl text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              About Wanderly
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              TRAVEL
              <span className="block">DIFFERENTLY</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-50/85 sm:text-base">
              We make travel easier by bringing inspiring destinations,
              thoughtful planning, and memorable experiences together.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="about-intro mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#0f2a5f] sm:text-4xl">
              Travel made easier
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Wanderly is built around a simple idea: planning a journey should
              be part of the excitement, not something that gets in the way. We
              bring trips, destinations, and useful travel information together
              in one clear experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="page-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ id, title, description, icon: Icon }) => (
              <article
                key={id}
                className="about-value-card group rounded-panel border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgb(15_42_95/0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_18px_40px_rgb(15_42_95/0.1)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0f2a5f]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="about-story relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-slate-100 bg-[#0f5fa8] p-7 shadow-[0_16px_40px_rgb(15_42_95/0.08)] sm:p-10 lg:p-14">
            <BorderBeam
              size={120}
              duration={10}
              borderWidth={1.5}
              colorFrom="#38bdf8"
              colorTo="#2563eb"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                  Why Wanderly
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                  Go beyond ordinary
                </h2>
              </div>

              <div className="space-y-5">
                <p className="about-story-item text-sm leading-7 text-sky-50/90 sm:text-base">
                  Every journey can be more than simply reaching a destination.
                  It can be an opportunity to discover something new, experience
                  a different culture, and create memories along the way.
                </p>

                <p className="about-story-item text-sm leading-7 text-sky-50/90 sm:text-base">
                  That is why Wanderly focuses on making the planning experience
                  clear and enjoyable while keeping the journey itself at the
                  center.
                </p>

                <div className="about-story-item flex items-center gap-3 pt-2 text-sm font-semibold text-white">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                    <Compass size={17} aria-hidden="true" />
                  </span>
                  Discover. Plan. Travel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
