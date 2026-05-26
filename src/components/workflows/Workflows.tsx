"use client";

import { useState } from "react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { WorkflowSimulation } from "./WorkflowSimulation";

const TABS = [
  { id: "comment" as const, label: "Comment → DM" },
  { id: "faq" as const, label: "FAQ replies" },
  { id: "broadcasts" as const, label: "Broadcasts" },
  { id: "followups" as const, label: "Follow-ups" },
];

export function Workflows() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("comment");

  return (
    <section id="workflows" className="section-grey">
      <div className="page-wrap">
        <h2 className="t-section text-center">
          Same creator workflows.
          <br />
          <BrushHighlight>No builder headache.</BrushHighlight>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`tab-pill ${tab === t.id ? "tab-pill-active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="card mt-8 p-5 md:p-7">
          <WorkflowSimulation tab={tab} />
        </div>
      </div>
    </section>
  );
}
