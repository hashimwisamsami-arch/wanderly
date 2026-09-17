import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { brand, navigationItems } from "../../constants/navigation.js";

function navLinkClasses({ isActive }) {
  return [
    "relative inline-flex items-center py-1 text-sm font-medium tracking-[0.01em] text-white/90 transition-opacity duration-200 ease-out",
    "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:bg-white after:transition-transform after:duration-200 after:ease-out",
    isActive
      ? "text-white after:scale-x-100"
      : "hover:text-white hover:after:scale-x-100 after:scale-x-0",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  ].join(" ");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
  }
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav
        className="page-container flex min-h-20 items-center justify-between gap-6 py-4 sm:min-h-24"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="navbar-enter group flex shrink-0 items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label={`${brand.name} home`}
        >
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
              {brand.name}
            </span>

            <span className="mt-1 text-[9px] font-medium tracking-[0.18em] text-white/70 sm:text-[10px]">
              {brand.tagline}
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigationItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <button
            type="button"
            className="navbar-enter inline-flex min-h-10 items-center justify-center rounded-full border border-white/45 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-[2px] transition-[background-color,border-color,transform,opacity] duration-200 ease-out hover:-translate-y-px hover:border-white/65 hover:bg-white/16 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Sign In
          </button>
        </div>

        <button
          type="button"
          className="navbar-enter inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-[2px] transition-[background-color,border-color,opacity] duration-200 hover:border-white/55 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-200 ease-out`}
        aria-hidden={!isMenuOpen}
      >
        <div className="page-container pb-4">
          <div
            className={`overflow-hidden rounded-card border border-white/20 bg-white/95 shadow-[0_16px_40px_rgb(15_42_95/0.14)] backdrop-blur-md transition-[transform,opacity] duration-200 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col p-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-3 text-sm font-medium transition-[background-color,color] duration-200",
                      isActive
                        ? "bg-sky-50 text-sky-700"
                        : "text-[#0f2a5f] hover:bg-slate-50 hover:text-sky-700",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-1 border-t border-slate-200/80 pt-2">
                <button
                  type="button"
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-[#0f2a5f] transition-[background-color,color] duration-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
