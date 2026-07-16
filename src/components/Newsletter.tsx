"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 bg-ink-800 px-8 py-14 sm:px-14 lg:grid-cols-2 lg:items-center">
          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Subscribe to the newsletter
          </h2>

          {subscribed ? (
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="size-6 text-brand-400" />
              <p>
                Thanks{name ? `, ${name.split(" ")[0]}` : ""}! You&apos;re subscribed
                with <span className="font-medium">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="border-b border-white/50 bg-transparent pb-2 text-white placeholder:text-white/70 outline-none focus:border-white"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="border-b border-white/50 bg-transparent pb-2 text-white placeholder:text-white/70 outline-none focus:border-white"
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/80">
                Cynosure Recycling uses your contact information to share the
                latest industry news and updates about our facilities and
                sustainability milestones.
              </p>
              <button type="submit" className="btn-white mt-8">
                Subscribe to Our Newsletter
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
