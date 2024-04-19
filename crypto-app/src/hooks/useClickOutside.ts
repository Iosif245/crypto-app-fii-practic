import React from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void): React.RefObject<HTMLElement> => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callback, ref]);

  return ref;
};

export default useClickOutside;
