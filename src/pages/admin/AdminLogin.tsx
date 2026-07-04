import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const AUTH_KEY = "mcan-admin-auth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (form.email === "admin@mcano.com" && form.password === "admin123") {
      window.localStorage.setItem(AUTH_KEY, "true");
      navigate("/admin", { replace: true });
      return;
    }

    setError("Invalid admin credentials. Try admin@mcano.com / admin123");
  }

  return (
    <>
      <PageHeader title="Admin Access" subtitle="Sign in to manage the website" />
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-brass-200 bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-emerald-900" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm outline-none focus:border-emerald-600"
              />
            </div>
            <div className="mt-5 space-y-2">
              <label className="block text-sm font-medium text-emerald-900" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm outline-none focus:border-emerald-600"
              />
            </div>
            {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brass-500 hover:text-emerald-950"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
