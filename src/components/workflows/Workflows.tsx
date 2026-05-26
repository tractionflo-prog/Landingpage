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
    <section id="workflows" className="section-grey" aria-labelledby="workflows-heading">
      <div className="page-wrap">
        <h2 id="workflows-heading" className="t-section text-center">
          Same creator workflows.
          <br />
          <BrushHighlight>No builder headache.</BrushHighlight>
        </h2>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-start md:gap-8 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-10">
          <div className="wf-tab-list" role="tablist" aria-label="Workflow types">
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
