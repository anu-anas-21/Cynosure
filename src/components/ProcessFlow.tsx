import { ArrowRight } from "lucide-react";

export default function ProcessFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="border border-ink-200 bg-ink-50 px-3.5 py-2 text-xs font-medium text-ink-600">
            {step}
          </span>
          {index < steps.length - 1 && (
            <ArrowRight className="size-4 shrink-0 text-brand-500" />
          )}
        </div>
      ))}
    </div>
  );
}
