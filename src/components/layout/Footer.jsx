import { Send, Mail, Bird } from "lucide-react";
import { NavLink } from "react-router-dom";

const exploreLinks = [
  { label: "Trips", to: "/trips" },
  { label: "Destinations", to: "/destinations" },
  { label: "Experiences", to: "/trips" },
  { label: "Travel Guides", to: "/destinations" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Help", to: "/contact" },
  { label: "Terms", to: "/contact" },
];

const socialLinks = [
  {
    label: "Send ",
    href: "#",
    icon: Send,
  },

  {
    label: "X",
    href: "#",
    icon: Bird,
  },
  {
    label: "Email",
    href: "mailto:hello@wanderly.com",
    icon: Mail,
  },
];

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081d3f]"
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081d3f] text-white">
      <div className="page-container">
        {/* Main footer */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <NavLink
              to="/"
              className="inline-flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081d3f]"
              aria-label="Wanderly home"
            >
              <span className="text-xl font-bold tracking-[-0.02em]">
                Wanderly
              </span>

              <span className="mt-1 text-[9px] font-medium tracking-[0.18em] text-slate-400">
                GO BEYOND ORDINARY
              </span>
            </NavLink>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Travel made easier, from the first search to the journey home.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Explore">
              {exploreLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Company">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold text-white">Connect</h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081d3f]"
                  {...(href !== "#" && {
                    target: href.startsWith("http") ? "_blank" : undefined,
                    rel: href.startsWith("http") ? "noreferrer" : undefined,
                  })}
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {currentYear} Wanderly. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">Travel made easier.</p>
        </div>
      </div>
    </footer>
  );
}
