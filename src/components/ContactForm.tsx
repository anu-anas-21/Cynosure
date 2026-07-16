"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contact } from "@/lib/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    wasteStream: "E-Waste Recycling",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink-100 bg-ink-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-brand-500" />
        <h3 className="mt-4 text-lg font-semibold text-ink-800">
          Thanks, {form.name.split(" ")[0] || "there"}!
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          Your enquiry has been noted. Our team will reach out to you at{" "}
          <span className="font-medium text-ink-700">{form.email}</span>{" "}
          shortly. You can also email us directly at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-brand-600">
            {contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ink-100 p-7 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="Your organization"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-ink-700" htmlFor="wasteStream">
          Waste stream of interest
        </label>
        <select
          id="wasteStream"
          value={form.wasteStream}
          onChange={(e) => setForm({ ...form, wasteStream: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        >
          <option>E-Waste Recycling</option>
          <option>Plastic Waste Recycling</option>
          <option>Battery Waste Management</option>
          <option>Tyre Waste Recycling</option>
          <option>End-of-Life Vehicle Recycling</option>
          <option>Data Destruction & ITAD</option>
          <option>EPR Compliance</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-ink-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          placeholder="Tell us about your waste volumes, locations, and compliance needs"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-600 transition-colors sm:w-auto"
      >
        Submit Enquiry
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
