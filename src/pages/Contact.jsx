import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { gsap } from "gsap";

import { Spotlight } from "../components/ui/spotlight";
import { BorderBeam } from "../components/ui/border-beam";

const contactMethods = [
  {
    id: "email",
    title: "Email",
    description: "Send us a message and we'll get back to you.",
    value: "hello@wanderly.com",
    icon: Mail,
  },
  {
    id: "support",
    title: "Travel Support",
    description: "Questions about planning your next journey?",
    value: "We're here to help",
    icon: MessageCircle,
  },
  {
    id: "location",
    title: "Explore With Us",
    description: "Discover destinations and experiences around the world.",
    value: "Worldwide",
    icon: MapPin,
  },
];

export default function Contact() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const methodsRef = useRef(null);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(
        [
          heroRef.current,
          contentRef.current,
          methodsRef.current,
          formRef.current,
        ],
        {
          opacity: 1,
          y: 0,
        },
      );

      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          heroRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
        )
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .fromTo(
          methodsRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.25",
        )
        .fromTo(
          formRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.25",
        );
    }, pageRef);

    return () => context.revert();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f5fa8] pt-32 pb-20 sm:pt-36 sm:pb-24">
        <Spotlight className="-top-20 left-1/2 -translate-x-1/2" fill="white" />

        <div className="page-container relative z-10">
          <div ref={heroRef} className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              Get in touch
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              CONTACT WANDERLY
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-sky-50/90 sm:text-lg">
              Have a question about a trip, destination, or booking? We'd love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="page-container">
          <div
            ref={contentRef}
            className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
          >
            {/* Contact methods */}
            <div ref={methodsRef}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
                Let's talk
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0f2a5f] sm:text-4xl">
                We're here to help
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                Whether you're looking for inspiration or need help
                understanding your travel options, send us a message.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <article
                      key={method.id}
                      className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgb(15_42_95/0.05)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(15_42_95/0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-[background-color,color] duration-200 group-hover:bg-sky-600 group-hover:text-white">
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#0f2a5f]">
                            {method.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {method.description}
                          </p>

                          <p className="mt-2 text-sm font-medium text-sky-600">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div
              ref={formRef}
              className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgb(15_42_95/0.08)] sm:p-8"
            >
              <BorderBeam
                size={180}
                duration={10}
                anchor={90}
                borderWidth={1.5}
              />

              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
                  Send a message
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#0f2a5f] sm:text-3xl">
                  How can we help?
                </h2>

                <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-[#0f2a5f]"
                      >
                        Your name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-[#0f2a5f]"
                      >
                        Email address
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="text-sm font-medium text-[#0f2a5f]"
                    >
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-[#0f2a5f]"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us a little about what you need..."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f5fa8] px-5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[#0b4f8c] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500/20"
                  >
                    Send Message
                    <Send size={17} aria-hidden="true" />
                  </button>

                  {submitted && (
                    <p
                      className="rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700"
                      role="status"
                    >
                      Your message has been prepared successfully. This demo
                      does not send a real message.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="page-container">
          <div className="rounded-[1.75rem] bg-[#0f5fa8] px-6 py-12 text-center sm:px-10 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
              Ready to explore?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              YOUR NEXT JOURNEY STARTS HERE
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-sky-50/90 sm:text-base">
              Find a destination that excites you and start planning the trip
              you've been thinking about.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
