import { useEffect, useState } from "react";

export function useFetch(dataSource) {
  const [data, setData] = useState({});
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!dataSource) return;

    setDataLoading(true);

    async function fetchSource() {
      try {
        const response = await fetch(dataSource);
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.error(
          `An error as occured while fetching ${dataSource} : ${err}`
        );
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }

    fetchSource();
  }, [dataSource]);

  return { data, isDataLoading, error };
}
