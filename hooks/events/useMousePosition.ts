import React, {MouseEvent, useEffect} from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

const useMousePosition = () => {
  const initPosition: MousePosition = {
    x: null,
    y: null,
  };

  const [mousePosition, setMousePosition] = React.useState(initPosition);

  useEffect(() => {
    const updateMousePosition = (
      event: MouseEvent<HTMLElement, MouseEvent>
    ) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", () => updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", () => updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;
