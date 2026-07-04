import { useRef, useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";

const REGISTRATION_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw7SteBwMFYFUIJEf6-pGNdP1vay1DyMF8SLa17B24gFnTtaUZeIoutYFtSdd-PrvGb/exec";

type Step = "form" | "payment" | "confirmed";

const inputClass =
  "mt-1 w-full rounded-md border border-brass-200 bg-white px-4 py-2.5 text-sm text-emerald-950 outline-none transition-colors focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";
const labelClass = "block text-sm font-medium text-emerald-900";

export default function Registration() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);

  function handleContinue(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (form.checkValidity()) {
      setStep("payment");
    } else {
      form.reportValidity();
    }
  }

  async function confirmPayment() {
    const form = formRef.current;
    if (!form) return;
    setSubmitting(true);
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    try {
      await fetch(REGISTRATION_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
      });
      setStep("confirmed");
    } catch (error) {
      console.error("Registration error:", error);
      alert("There was a problem submitting your registration. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader title="New Corp Members Registration" subtitle="MCAN/OD/....." />

      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          {step === "form" && (
            <>
              <p className="mb-8 text-center text-sm text-emerald-800/80">
                Please fill out the form appropriately. Ensure all details are correct and complete the
                payment to finalize your registration.
              </p>
              <form ref={formRef} onSubmit={handleContinue} className="space-y-5 rounded-2xl border border-brass-200 bg-white p-8 shadow-sm">
                <div>
                  <label htmlFor="regNo" className={labelClass}>
                    REG NO: MCAN/OD/…….
                  </label>
                  <input id="regNo" name="regNo" required className={inputClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input id="firstName" name="firstName" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input id="lastName" name="lastName" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="middleName" className={labelClass}>Middle Name (optional)</label>
                  <input id="middleName" name="middleName" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="homeAddress" className={labelClass}>Home Address</label>
                  <input id="homeAddress" name="homeAddress" required className={inputClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nyscCallUpNumber" className={labelClass}>NYSC Call-Up Number</label>
                    <input id="nyscCallUpNumber" name="nyscCallUpNumber" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="stateCode" className={labelClass}>State Code</label>
                    <input id="stateCode" name="stateCode" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobileNumber" className={labelClass}>Mobile Number (WhatsApp)</label>
                  <input id="mobileNumber" name="mobileNumber" type="tel" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="maritalStatus" className={labelClass}>Marital Status</label>
                  <select id="maritalStatus" name="maritalStatus" required className={inputClass}>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="stateOfOrigin" className={labelClass}>State of Origin</label>
                    <input id="stateOfOrigin" name="stateOfOrigin" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="institutionAttended" className={labelClass}>Institution Attended</label>
                    <input id="institutionAttended" name="institutionAttended" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="courseOfStudy" className={labelClass}>Course of Study</label>
                  <input id="courseOfStudy" name="courseOfStudy" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="nextOfKinPhoneNumber" className={labelClass}>Next of Kin Phone Number</label>
                  <input id="nextOfKinPhoneNumber" name="nextOfKinPhoneNumber" type="tel" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="leadershipRole" className={labelClass}>Leadership Role (in any organization)</label>
                  <input id="leadershipRole" name="leadershipRole" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="redeploying" className={labelClass}>Are you redeploying?</label>
                  <select id="redeploying" name="redeploying" required className={inputClass}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="passport" className={labelClass}>Upload Passport</label>
                  <input id="passport" name="passport" type="file" accept="image/*" required className={`${inputClass} py-2`} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-950 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brass-500 hover:text-emerald-950"
                >
                  Continue to Payment
                </button>
              </form>
            </>
          )}

          {step === "payment" && (
            <div className="space-y-4 rounded-2xl border border-brass-200 bg-white p-8 text-center shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-emerald-950">Payment Instructions</h2>
              <p className="text-sm text-emerald-800/80">
                Thank you for filling out the registration form. To complete your registration, please make
                a bank transfer to the following account:
              </p>
              <dl className="mx-auto max-w-sm space-y-2 text-left text-sm text-emerald-900">
                <div className="flex justify-between border-b border-brass-100 pb-2">
                  <dt className="font-semibold">Bank Name</dt>
                  <dd>First Bank of Nigeria</dd>
                </div>
                <div className="flex justify-between border-b border-brass-100 pb-2">
                  <dt className="font-semibold">Account Name</dt>
                  <dd>MCAN Ondo Capital Project</dd>
                </div>
                <div className="flex justify-between border-b border-brass-100 pb-2">
                  <dt className="font-semibold">Account Number</dt>
                  <dd>3051345672</dd>
                </div>
                <div className="flex justify-between pb-2">
                  <dt className="font-semibold">Amount</dt>
                  <dd>&#8358;2,000</dd>
                </div>
              </dl>
              <p className="text-sm text-emerald-800/80">
                After making the transfer, please send a confirmation message to{" "}
                <a href="https://wa.me/2348062359302" target="_blank" rel="noreferrer" className="font-semibold text-brass-600 hover:underline">
                  +234 806 235 9302
                </a>
                . Once payment is confirmed, your registration will be finalized.
              </p>
              <button
                onClick={confirmPayment}
                disabled={submitting}
                className="w-full rounded-full bg-brass-500 px-8 py-3 text-sm font-semibold tracking-wide text-emerald-950 transition-colors hover:bg-brass-400 disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Confirm Payment and Submit Registration"}
              </button>
            </div>
          )}

          {step === "confirmed" && (
            <div className="rounded-2xl border border-brass-200 bg-white p-8 text-center shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-emerald-950">Registration Confirmation</h2>
              <p className="mt-3 text-sm text-emerald-800/80">
                Your registration is now complete. Thank you for your payment and registration!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
