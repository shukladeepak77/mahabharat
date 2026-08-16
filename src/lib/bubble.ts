import type { CSSProperties } from "react";

export const bubbleColors = [
  "#b91c1c", // red-700 (crimson)
  "#334155", // slate-700 (steel)
  "#7f1d1d", // red-900
  "#1e293b", // slate-800
  "#991b1b", // red-800
  "#475569", // slate-600
  "#5b1010", // deep maroon
  "#1f2937", // gray-800
];

export function bubbleStyle(color: string, active: boolean): CSSProperties {
  return {
    background: `linear-gradient(135deg, ${color}ea 0%, ${color}b8 55%, ${color}d8 100%)`,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: active
      ? "1px solid rgba(255,255,255,0.85)"
      : "1px solid rgba(255,255,255,0.4)",
    boxShadow: active
      ? "inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -8px 14px rgba(0,0,0,0.15), 0 6px 18px rgba(0,0,0,0.28)"
      : "inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -8px 14px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.15)",
  };
}
