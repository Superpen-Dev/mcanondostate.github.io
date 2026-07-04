import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { images } from "../assets/images";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-emerald-950 shadow-lg shadow-emerald-950/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {[images.nyscLogo, images.mcanLogo, images.ondoLogo].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="MCAN Ondo State logo"
              className="h-10 w-10 rounded-md bg-white p-1 object-contain sm:h-12 sm:w-12"
            />
          ))}
        </NavLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? "bg-brass-500 text-emerald-950"
                        : "text-emerald-50/90 hover:bg-emerald-800 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="rounded-md p-2 text-emerald-50 hover:bg-emerald-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-emerald-800 bg-emerald-950 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? "bg-brass-500 text-emerald-950"
                        : "text-emerald-50/90 hover:bg-emerald-800 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
