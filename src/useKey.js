import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // here cleaning up this function is important because every time this movie component render the new EventListener is added
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
