import useSWR from "swr";
import axios from "axios";

const useDetailBarang = (params) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(`/api/barang/${params}`, fetcher);

  return { data, error, isLoading };
};

export default useDetailBarang;
