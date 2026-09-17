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
