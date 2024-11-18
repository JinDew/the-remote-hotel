import { useEffect, useRef } from "react";

export function useClickOutside(handler, isCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, isCapture);
      return () =>
        document.removeEventListener("click", handleClick, isCapture);
    },
    [handler, isCapture]
  );

  return ref;
}
