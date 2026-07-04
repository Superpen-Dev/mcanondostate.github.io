import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { images } from "../assets/images";
import { navLinks } from "../data/content";

type IconProps = { size?: number; className?: string };

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} className={props.className} fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} className={props.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} className={props.className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.08-1.8-.11-.42-.12-.96-.31-1.65-.6-2.9-1.25-4.8-4.18-4.94-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.15.46.13.63-.08.17-.2.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

function XLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} className={props.className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
    </svg>
  );
}

const socials = [
  { href: "https://www.facebook.com/mcanondostate?mibextid=LQQJ4d", label: "Facebook", Icon: FacebookIcon },
  { href: "https://wa.me/2348062359302", label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://x.com/McanOndo", label: "X (Twitter)", Icon: XLogo },
  { href: "https://www.instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "mailto:mcanondostate23@gmail.com", label: "Email", Icon: Mail },
  { href: "tel:08062359302", label: "Phone", Icon: Phone },
];

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {[images.nyscLogo, images.mcanLogo, images.ondoLogo].map((src, i) => (
              <img key={i} src={src} alt="MCAN Ondo State logo" className="h-12 w-12 rounded-md bg-white p-1 object-contain" />
            ))}
          </div>
          <div>
            <p className="font-display text-lg font-semibold">
              Muslim Corpers' Association of Nigeria, Ondo State Chapter
            </p>
            <p className="mt-1 text-sm text-brass-200">MCAN&nbsp;&mdash;&nbsp;Serving Islam through the Nation.</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-display text-base font-semibold text-brass-300">Contact</h3>
            <ul className="space-y-2 text-sm text-emerald-100/90">
              <li>
                Email:{" "}
                <a href="mailto:mcanondostate23@gmail.com" className="hover:text-brass-300">
                  mcanondostate23@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+2348062359302" className="hover:text-brass-300">
                  +234 806 235 9302
                </a>
              </li>
              <li>Location: 26, Adeyeye Street, Oke Ijebu, Akure, Ondo State, Nigeria.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-display text-base font-semibold text-brass-300">Quick Links</h3>
            <ul className="space-y-2 text-sm text-emerald-100/90">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-brass-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-6 sm:justify-between sm:px-6">
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-emerald-50 transition-colors hover:bg-brass-500 hover:text-emerald-950"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-emerald-200/70">&copy; MCAN Ondo {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
