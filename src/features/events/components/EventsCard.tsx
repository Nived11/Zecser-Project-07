import type { EventsItem } from "../../../types/events";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  events: EventsItem;
}

const EventsCard = ({ events }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEventDetails = pathname.includes("/events/details");

  return (
    <div
      onClick={() => !isEventDetails && navigate(`/events/details/${events.id}`)}
      className="cursor-pointer border rounded-md shadow-md p-4 hover:shadow-lg transition bg-white"
    >
      <img
        src={events.images?.[0]} // only first image
        // alt={events.title}
        className="w-full h-40 object-cover rounded"
      />
      {!isEventDetails && (
        <>
          {/* <h3 className="text-lg font-bold mt-2">{events.title}</h3> */}
          <p className="text-sm text-gray-600 mt-1">{events.description.slice(0, 80)}...</p>
          <span className="text-blue-600 text-sm mt-2 block">Read more →</span>
        </>
      )}
    </div>
  );
};

export default EventsCard;
