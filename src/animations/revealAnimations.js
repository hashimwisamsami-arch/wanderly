import gsap from "gsap";

export function animateTripSearch(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const card = element.querySelector(".trip-search-card");
  const tabs = element.querySelector(".trip-search-tabs");
  const form = element.querySelector(".trip-search-form");

  if (!card || !tabs || !form) return undefined;

  if (reduceMotion) {
    gsap.set([card, tabs, form], {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  // الحالة الابتدائية قبل ظهور العنصر
  gsap.set(card, {
    opacity: 0,
    y: 45,
  });

  gsap.set([tabs, form], {
    opacity: 0,
    y: 14,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
      .to(
        tabs,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.3",
      )
      .to(
        form,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.18",
      );
  };

  // مراقبة ظهور العنصر في الشاشة
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([card, tabs, form]);
  };
}

export function animateBenefits(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const header = element.querySelector(".benefits-header");
  const cards = element.querySelectorAll(".benefit-card");

  if (!header || !cards.length) return undefined;

  if (reduceMotion) {
    gsap.set([header, cards], {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  gsap.set(header, {
    opacity: 0,
    y: 20,
  });

  gsap.set(cards, {
    opacity: 0,
    y: 24,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(header, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
      .to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.25",
      );
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([header, cards]);
  };
}

export function animatePopularTrips(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const header = element.querySelector(".popular-trips-header");
  const cards = element.querySelectorAll(".trip-card");

  if (!header || !cards.length) return undefined;

  if (reduceMotion) {
    gsap.set([header, cards], {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  gsap.set(header, {
    opacity: 0,
    y: 24,
  });

  gsap.set(cards, {
    opacity: 0,
    y: 30,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(header, {
        opacity: 1,
        y: 0,
        duration: 0.55,
      })
      .to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.09,
        },
        "-=0.25",
      );
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.12,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([header, cards]);
  };
}

export function animatePricing(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const intro = element.querySelector(".pricing-intro");
  const visual = element.querySelector(".pricing-visual");
  const cards = element.querySelectorAll(".pricing-card");

  if (!intro || !visual || !cards.length) return undefined;

  if (reduceMotion) {
    gsap.set([intro, visual, cards], {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  gsap.set(intro, {
    opacity: 0,
    y: 24,
  });

  gsap.set(visual, {
    opacity: 0,
    y: 20,
  });

  gsap.set(cards, {
    opacity: 0,
    y: 28,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(intro, {
        opacity: 1,
        y: 0,
        duration: 0.55,
      })
      .to(
        visual,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.3",
      )
      .to(
        cards,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.35",
      );
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([intro, visual, cards]);
  };
}

export function animateHowItWorks(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const header = element.querySelector(".how-it-works-header");
  const steps = element.querySelectorAll(".step-item");
  const connectors = element.querySelectorAll(".step-connector");

  if (!header || !steps.length) return undefined;

  if (reduceMotion) {
    gsap.set([header, steps, connectors], {
      opacity: 1,
      y: 0,
      scaleX: 1,
    });

    return undefined;
  }

  gsap.set(header, {
    opacity: 0,
    y: 20,
  });

  gsap.set(steps, {
    opacity: 0,
    y: 24,
  });

  if (connectors.length) {
    gsap.set(connectors, {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center",
    });
  }

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(header, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
      .to(
        steps,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.25",
      );

    if (connectors.length) {
      timeline.to(
        connectors,
        {
          opacity: 0.6,
          scaleX: 1,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.35",
      );
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([header, steps, connectors]);
  };
}

export function animateStatistics(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const items = element.querySelectorAll(".stat-item");

  if (!items.length) return undefined;

  if (reduceMotion) {
    gsap.set(items, {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  gsap.set(items, {
    opacity: 0,
    y: 20,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    });
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf(items);
  };
}

export function animateTestimonial(element) {
  if (!element) return undefined;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const header = element.querySelector(".testimonial-header");
  const card = element.querySelector(".testimonial-card");
  const footer = element.querySelector(".testimonial-footer");

  if (!header || !card || !footer) return undefined;

  if (reduceMotion) {
    gsap.set([header, card, footer], {
      opacity: 1,
      y: 0,
    });

    return undefined;
  }

  gsap.set(header, {
    opacity: 0,
    y: 24,
  });

  gsap.set(card, {
    opacity: 0,
    y: 30,
  });

  gsap.set(footer, {
    opacity: 0,
    y: 16,
  });

  let hasAnimated = false;

  const playAnimation = () => {
    if (hasAnimated) return;

    hasAnimated = true;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(header, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
      .to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.25",
      )
      .to(
        footer,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        "-=0.25",
      );
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        playAnimation();
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    gsap.killTweensOf([header, card, footer]);
  };
}
