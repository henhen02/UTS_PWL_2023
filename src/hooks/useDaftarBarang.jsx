import useSWR from "swr";
import axios from "axios";

const useDaftarBarang = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR("/api/barang", fetcher);

  return { data, error, isLoading };
};

export default useDaftarBarang;
