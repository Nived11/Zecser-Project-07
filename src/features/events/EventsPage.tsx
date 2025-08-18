import EventsCard from "./components/EventsCard";
import { useFetchEvents } from "./hooks/useFetchEvents";
import EventsSkeleton from "./components/EventsSkeleton";

const EventsPage = () => {
  const { data, loading } = useFetchEvents();

  const hasNews = Array.isArray(data) && data.length > 0;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-800 bg-[url('/school2.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay text-white text-center py-16">
        <h1 className="text-2xl font-bold">EVENTS</h1>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-[300px]">
        {loading ? (
          <EventsSkeleton />
        ) : hasNews ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {data.map((item) => (
              <EventsCard key={item.id} events={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No new events.</p>
        )}
      </div>
     
    </div>
  );
};

export default EventsPage;
