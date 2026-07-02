"use client";

import { useEffect, useRef, useState } from "react";
import {
  BOARD_STATS,
  INITIAL_CARDS,
  LAST_STAGE,
  LEAD_NAMES,
  statusForStage,
  STAGE_TIME,
  TICK_MS,
  type BoardCard,
} from "@/lib/heroBoard";

const WON_STAGE = 4;

type BoardState = {
  cards: BoardCard[];
  wonCustomers: number;
  revenue: number;
  lastMovedId: string | null;
};

function paymentAmount(status: string): number {
  const match = status.match(/\$(\d+)/);
  return match ? Number(match[1]) : 497;
}

export function useHeroBoard(enabled = true) {
  const [state, setState] = useState<BoardState>({
    cards: INITIAL_CARDS,
    wonCustomers: BOARD_STATS.wonCustomers,
    revenue: BOARD_STATS.revenueThisMonth,
    lastMovedId: null,
  });

  const sourcePointer = useRef(0);
  const seq = useRef(0);
  const nameIdx = useRef(0);
  const seed = useRef(3);

  useEffect(() => {
    if (!enabled) return;

    const id = window.setInterval(() => {
      setState((prev) => {
        let cards = [...prev.cards];
        let { wonCustomers, revenue } = prev;
        let lastMovedId: string | null = null;

        // Count cards per stage.
        const counts = new Array(LAST_STAGE + 1).fill(0) as number[];
        for (const c of cards) counts[c.stage] += 1;

        // Movable stages hold 2+ cards (so a stage never empties on move).
        const movable: number[] = [];
        for (let s = 0; s <= LAST_STAGE; s += 1) {
          if (counts[s] >= 2) movable.push(s);
        }

        if (movable.length > 0) {
          const source =
            movable.find((s) => s >= sourcePointer.current) ?? movable[0]!;
          sourcePointer.current = (source + 1) % (LAST_STAGE + 1);

          // Oldest card in the source stage = first in array order.
          const idx = cards.findIndex((c) => c.stage === source);
          const moving = cards[idx]!;

          if (source === LAST_STAGE) {
            // Journey complete — the card leaves the board.
            cards.splice(idx, 1);
          } else {
            const nextStage = source + 1;
            seed.current += 1;
            cards[idx] = {
              ...moving,
              stage: nextStage,
              status: statusForStage(nextStage, seed.current),
              time: STAGE_TIME[nextStage] ?? "Just now",
            };
            lastMovedId = moving.id;
            if (nextStage === WON_STAGE) {
              wonCustomers += 1;
              revenue += paymentAmount(cards[idx]!.status);
            }
          }
        }

        // Keep the "New" column fed so the pipeline always feels active.
        const newCount = cards.filter((c) => c.stage === 0).length;
        if (newCount < 3) {
          seq.current += 1;
          nameIdx.current = (nameIdx.current + 1) % LEAD_NAMES.length;
          seed.current += 1;
          cards.push({
            id: `live-${seq.current}`,
            name: LEAD_NAMES[nameIdx.current]!,
            stage: 0,
            status: statusForStage(0, seed.current),
            time: "Just now",
          });
        }

        return { cards, wonCustomers, revenue, lastMovedId };
      });
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [enabled]);

  return state;
}
