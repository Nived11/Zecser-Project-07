import { useEffect, useState } from "react";
import api from "../../../lib/api";
import swal from "sweetalert";
const useWeProvideFetch = () => {
  const [fetchWeProvideData, setFetchWeProvideData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await api.get("/api/weprovide");
        setFetchWeProvideData(response.data);
      } catch (error: any) {
        console.log(error);
        swal(
          error.response.data.messafe || "An Error Occured while fetching data"
        );
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return { fetchWeProvideData, loading };
};

export default useWeProvideFetch;
