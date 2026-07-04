import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";

const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzk5BBdyfFLgoKHhhcN_WWJyknaTYUnXBG2EbojpjXgh3BFyFPJLtV27zEefu6SJ-zl/exec";

const inputClass =
  "mt-1 w-full rounded-md border border-brass-200 bg-white px-4 py-2.5 text-sm text-emerald-950 outline-none transition-colors focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";
const labelClass = "block text-sm font-medium text-emerald-900";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="bg-parchment py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-brass-200 bg-white p-8 shadow-sm">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input
                id="name"
                required
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email"
                type="email"
                required
                className={inputClass}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className={inputClass}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-emerald-950 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brass-500 hover:text-emerald-950 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm font-medium text-emerald-700">
                Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-medium text-red-600">
                There was a problem sending your message. Please try again.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-brass-200 shadow-sm">
              <iframe
                title="MCAN Ondo State location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.912362225054!2d-122.08424968469106!3d37.4219997798258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5cdd2e84f53%3A0x120d7344c8f6a9f5!2sGoogleplex!5e0!3m2!1sen!2s!4v1617168793848!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-brass-200 bg-white p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-emerald-950">Contact Details</h2>
              <ul className="mt-4 space-y-3 text-sm text-emerald-800/90">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-brass-500" />
                  <a href="tel:+2348062359302" className="hover:text-brass-600">+234 806 235 9302</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-brass-500" />
                  <a href="mailto:mcanondostate23@gmail.com" className="hover:text-brass-600">
                    mcanondostate23@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
