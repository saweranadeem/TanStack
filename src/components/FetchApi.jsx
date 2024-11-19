import { useQuery } from "@tanstack/react-query";

const FetchApi = () => {
  const fetchProducts = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(`${apiUrl}/products`);
    const data = await res.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { data, isLoading, isError };
};

export default FetchApi;
