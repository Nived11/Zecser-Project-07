import type { Winner } from "../types";

const chipByPos: Record<Winner["position"], string> = {
  "1st": "from-indigo-500 to-blue-600",
  "2nd": "from-slate-400 to-slate-500",
  "3rd": "from-amber-400 to-orange-500",
};

export default function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <div className="w-[110px] text-center">
      <div
        className={`rounded-2xl p-3 text-white bg-gradient-to-br ${chipByPos[winner.position]} shadow`}
      >
        <img
          src={winner.photoUrl}
          alt={winner.name}
          className="w-16 h-16 mx-auto rounded-full object-cover mb-2 border-2 border-white/70"
          loading="lazy"
        />
        <div className="text-[11px] font-semibold leading-tight">
          {winner.name}
        </div>
        <div className="text-[10px] opacity-90">{winner.grade}</div>
      </div>

      <div className="mt-2 inline-block rounded-full bg-slate-200 text-slate-800 text-[11px] px-2 py-0.5 font-semibold shadow-sm">
        {winner.position}
      </div>
    </div>
  );
}
