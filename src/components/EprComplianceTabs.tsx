"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type ComplianceStream = {
  name: string;
  points: string[];
};

export default function EprComplianceTabs({ streams }: { streams: ComplianceStream[] }) {
  const [active, setActive] = useState(0);
  const current = streams[active];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {streams.map((stream, index) => (
          <button
            key={stream.name}
            onClick={() => setActive(index)}
            className={
              index === active
                ? "btn-primary !py-2.5 !px-5 !text-xs"
                : "border border-ink-200 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-ink-600 hover:border-brand-400 hover:text-brand-600 transition-colors"
            }
          >
            {stream.name.replace(" Recycling", "").replace(" Management", "")}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-ink-800">{current.name}</h3>
        <ul className="mt-6 space-y-4">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" />
              <span className="text-sm leading-relaxed text-ink-600">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
