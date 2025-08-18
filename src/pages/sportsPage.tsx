import { useSportsGallery } from "../features/sports";
import SportCard from "../features/sports/components/SportCard";

// Page: list of sport cards stacked vertically (scroll)
export default function SportsPage() {
  const { sports, loading } = useSportsGallery();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl md:max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Top header / hero */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Sports</h1>
          <p className="text-gray-600 mt-1">
            Highlights from our Sports Day & Events (demo data).
          </p>
        </header>

        {loading ? (
          <div className="bg-white/90 rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 text-gray-600">
            Loading…
          </div>
        ) : (
          sports.map((sport) => <SportCard key={sport.id} sport={sport} />)
        )}
      </div>
    </div>
  );
}
