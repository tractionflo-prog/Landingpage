"use client";

import { useState } from "react";
import { BrushHighlight } from "@/components/ui/BrushHighlight";
import { pageStory } from "@/lib/pageStory";
import { WorkflowSimulation } from "./WorkflowSimulation";

const TABS = [
  { id: "comment" as const, label: "Comment → DM" },
  { id: "faq" as const, label: "Pricing DMs" },
  { id: "broadcasts" as const, label: "Reach warm leads" },
  { id: "followups" as const, label: "Follow up" },
];

export function Workflows() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("comment");
  const { howItWorks } = pageStory;

  return (
    <section id="workflows" className="section-white" aria-labelledby="workflows-heading">
      <div className="page-wrap">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-[#999]">
          {howItWorks.eyebrow}
        </p>
        <h2 id="workflows-heading" className="t-section mx-auto mt-3 max-w-[720px] text-center">
          From first comment to{" "}
          <BrushHighlight>real conversation.</BrushHighlight>
        </h2>
        <p className="t-body mx-auto mt-4 max-w-[520px] text-center">{howItWorks.subhead}</p>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-start md:gap-8 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-10">
          <div className="wf-tab-list" role="tablist" aria-label="Scenarios">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                aria-controls={`workflow-panel-${t.id}`}
                id={`workflow-tab-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`wf-tab-btn ${tab === t.id ? "wf-tab-btn-active" : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            id={`workflow-panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`workflow-tab-${tab}`}
            className="card min-w-0 p-4 sm:p-5 md:p-7"
          >
            <WorkflowSimulation tab={tab} />
          </div>
        </div>
      </div>
    </section>
  );
}
