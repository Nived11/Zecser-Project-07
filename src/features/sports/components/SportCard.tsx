import type { SportItem } from "../types";
import WinnerCard from "./WinnerCard";

export default function SportCard({ sport }: { sport: SportItem }) {
  return (
    <section className="bg-white/90 backdrop-blur rounded-2xl shadow-sm ring-1 ring-gray-100 p-5 md:p-6 mb-8">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center">{sport.title}</h2>

      {/* Description */}
      <p className="text-gray-700 text-sm md:text-[15px] mt-2 text-justify">
        {sport.description}
      </p>

      {/* Winners */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-center text-gray-700 mb-3">
          Winners
        </h3>

        {/* Put 1st in the middle visually (optional) */}
        <div className="flex items-end justify-center gap-4 flex-wrap">
          {/* 2nd */}
          {sport.winners
            .filter((w) => w.position === "2nd")
            .map((w) => <WinnerCard key={`${sport.id}-2nd`} winner={w} />)}
          {/* 1st */}
          {sport.winners
            .filter((w) => w.position === "1st")
            .map((w) => <WinnerCard key={`${sport.id}-1st`} winner={w} />)}
          {/* 3rd */}
          {sport.winners
            .filter((w) => w.position === "3rd")
            .map((w) => <WinnerCard key={`${sport.id}-3rd`} winner={w} />)}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {sport.images.map((src, i) => (
          <img
            key={`${sport.id}-img-${i}`}
            src={src}
            alt={`${sport.title} ${i + 1}`}
            className="w-full h-36 md:h-40 object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
