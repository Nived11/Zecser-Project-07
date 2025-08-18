import { useEffect, useState } from "react";
import type { EventsItem } from "../../../types/events";
import api from "../../../lib/api";

export const useFetchEvents = () => {
  const [data, setData] = useState<EventsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {

      const res = await api.get("/events/"); 
      // console.log("events data:", res.data.results);
      
      setData(res.data.results); 
    } catch (err: any) {
      setError(err.messag || "server not responding");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { data, loading, error};
};
