import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  // const [watched, setWatched] = useState([]);
  // we can also pass the call back function in the usestate and it will on the the time on the app mount this process is also called lazy evaluation
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
