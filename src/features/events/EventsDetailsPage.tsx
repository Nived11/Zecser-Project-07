import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { EventsItem } from "../../types/events";
import { useFetchEvents } from "./hooks/useFetchEvents";
import Spinner from "../../components/common/Spinner";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: events, loading } = useFetchEvents();
  const [event, setEvent] = useState<EventsItem | null>(null);

  useEffect(() => {
    if (events && id) {
      const foundEvent = events.find((e) => String(e.id) === id);
      setEvent(foundEvent || null);
    }
  }, [events, id]);

  if (loading || !event)
    return (
      <div className="min-h-screen">
        <Spinner />
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* <h1 className="text-2xl font-bold text-center mb-8">{event.title}</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {event.images?.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              <img
                src={img}
                alt={`event-image-${index}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
