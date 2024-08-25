import { useEffect, RefObject } from "react";

// Type for the callback function
type Callback = (isOpen: boolean) => void;

// Custom hook for handling clicks outside a specified ref element
const useClickOutside = (ref: RefObject<HTMLElement>, callback: Callback) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
