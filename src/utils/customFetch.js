import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// since we're not making paginated call, we have to return response by deviding it.
/* 
This is array of array. HOW TO HANDLE THIS COMPLEX LOGIC??
we can ignore query, as we are not QUERYING anything Or we can give the type to know from which data it has to get the result and append it.
or in worst case, what we can do is call the same API multiple times and filter only desirable number of inputs.
*/

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = [] // await axios.get(url);
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;