"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Check,
  ChevronDown,
  LayoutGrid,
  MessageSquare,
  Plus,
  Settings,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  avatarFor,
  badgeForStage,
  BOARD_COLUMNS,
  BOARD_STATS,
  type BoardCard,
} from "@/lib/heroBoard";
import { useHeroBoard } from "./useHeroBoard";

const BADGE_STYLES: Record<string, { bg: string; fg: string; check?: boolean }> = {
  won: { bg: "#DCFCE7", fg: "#16A34A", check: true },
  onboarding: { bg: "#E0F2FE", fg: "#0284C7" },
  repeat: { bg: "#FEF3C7", fg: "#B45309" },
  referral: { bg: "#FEF3C7", fg: "#B45309" },
};

const NAV_ITEMS = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Target, label: "Opportunities", active: true },
  { icon: MessageSquare, label: "Conversations", count: "8" },
  { icon: Users, label: "Customers", count: "56" },
  { icon: TrendingUp, label: "Revenue", count: "$42.6K" },
  { icon: Check, label: "Tasks", count: "12" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

function seedFromId(id: string): number {
  return id.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0);
}

function PipelineCard({ card, isActive }: { card: BoardCard; isActive: boolean }) {
  const avatar = avatarFor(card.name);
  const badge = badgeForStage(card.stage, seedFromId(card.id));
  const badgeStyle = badge ? BADGE_STYLES[badge.kind] : null;

  return (
    <div className={`hb-card${isActive ? " hb-card--active" : ""}`}>
      <div className="hb-card-row">
        <span
          className="hb-card-avatar"
          style={{ backgroundImage: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})` }}
          aria-hidden
        >
          {avatar.initials}
        </span>
        <div className="hb-card-main">
          <p className="hb-card-name">{card.name}</p>
          <p className="hb-card-status">{card.status}</p>
        </div>
        {badge && badgeStyle ? (
          <span className="hb-card-badge" style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.fg }}>
            {badgeStyle.check ? <Check size={9} strokeWidth={3.5} /> : null}
            {badge.label}
          </span>
        ) : null}
      </div>
      <p className="hb-card-time">{card.time}</p>
    </div>
  );
}

export function HeroBoard() {
  const reduceMotion = useReducedMotion();
  const { cards, wonCustomers, revenue, lastMovedId } = useHeroBoard(!reduceMotion);

  return (
    <div className="hb-window">
      {/* Title bar */}
      <div className="hb-chrome">
        <span className="hb-dot hb-dot--red" />
        <span className="hb-dot hb-dot--yellow" />
        <span className="hb-dot hb-dot--green" />
      </div>

      <div className="hb-body">
        {/* Sidebar */}
        <aside className="hb-sidebar">
          <div className="hb-brand">
            <span className="hb-brand-logo">T</span>
            <span className="hb-brand-name">TractionFlo</span>
          </div>

          <p className="hb-sidebar-label">Workspace</p>
          <nav className="hb-nav">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className={`hb-nav-item${item.active ? " hb-nav-item--active" : ""}`}>
                  <Icon size={15} strokeWidth={2} className="hb-nav-icon" />
                  <span className="hb-nav-text">{item.label}</span>
                  {item.count ? <span className="hb-nav-count">{item.count}</span> : null}
                </span>
              );
            })}
          </nav>

          <div className="hb-user">
            <span className="hb-user-avatar" aria-hidden>
              ST
            </span>
            <div className="hb-user-main">
              <p className="hb-user-name">Sarah Thompson</p>
              <p className="hb-user-role">Acquisition HQ</p>
            </div>
            <ChevronDown size={14} className="hb-user-chevron" />
          </div>
        </aside>

        {/* Main */}
        <div className="hb-main">
          <div className="hb-main-head">
            <div>
              <div className="hb-title-row">
                <h3 className="hb-title">Customer Pipeline</h3>
                <span className="hb-live">
                  <span className="hb-live-dot" />
                  Live
                </span>
              </div>
              <p className="hb-subtitle">Visualize every customer and where they are in their journey.</p>
            </div>
            <div className="hb-filters">
              <span className="hb-filter">
                All sources
                <ChevronDown size={13} />
              </span>
              <span className="hb-filter">
                Last 7 days
                <ChevronDown size={13} />
              </span>
            </div>
          </div>

          <div className="hb-board-scroll">
            <LayoutGroup id="hero-board">
              <div className="hb-columns">
                {BOARD_COLUMNS.map((col, stageIndex) => {
                  const colCards = cards.filter((c) => c.stage === stageIndex);
                  return (
                    <div key={col.id} className="hb-col">
                      <div className="hb-col-head">
                        <span className="hb-col-dot" style={{ backgroundColor: col.accent }} />
                        <span className="hb-col-title">{col.title}</span>
                        <span
                          className="hb-col-count"
                          style={{ backgroundColor: col.tint, color: col.accent }}
                        >
                          {col.count}
                        </span>
                      </div>
                      <p className="hb-col-value">{col.value}</p>

                      <div className="hb-col-body">
                        <AnimatePresence initial={false} mode="popLayout">
                          {colCards.map((card) => (
                            <motion.div
                              key={card.id}
                              layoutId={`hb-${card.id}`}
                              layout
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.94 }}
                              transition={{
                                layout: { type: "spring", stiffness: 340, damping: 34 },
                                opacity: { duration: 0.3 },
                              }}
                            >
                              <PipelineCard card={card} isActive={card.id === lastMovedId} />
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        <span className="hb-add">
                          <Plus size={12} strokeWidth={2.5} />
                          Add card
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>

          {/* Stat bar */}
          <div className="hb-stats">
            <div className="hb-stat">
              <span className="hb-stat-value">{BOARD_STATS.activeOpportunities}</span>
              <span className="hb-stat-label">Active Opportunities</span>
            </div>
            <div className="hb-stat">
              <span className="hb-stat-value">${BOARD_STATS.pipelineValue.toLocaleString("en-US")}</span>
              <span className="hb-stat-label">Pipeline Value</span>
            </div>
            <div className="hb-stat">
              <motion.span key={wonCustomers} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className="hb-stat-value">
                {wonCustomers}
              </motion.span>
              <span className="hb-stat-label">Won Customers</span>
            </div>
            <div className="hb-stat">
              <motion.span key={revenue} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className="hb-stat-value">
                ${revenue.toLocaleString("en-US")}
              </motion.span>
              <span className="hb-stat-label">Revenue (This Month)</span>
            </div>
            <div className="hb-stat">
              <span className="hb-stat-value">{BOARD_STATS.tasksDue}</span>
              <span className="hb-stat-label">Tasks Due Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
