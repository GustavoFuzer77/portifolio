import { useEffect } from "react";

export const activeCursorEffectOnPage = () => {
  useEffect(() => {
    let root = document.documentElement;
    const updateMousePosition = () => {
      root.addEventListener("mousemove", (e) => {
        root.style.setProperty("--mouse-x", e.clientX + "px");
        root.style.setProperty("--mouse-y", e.clientY + "px");
      });
    };

    document.documentElement.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.documentElement.removeEventListener(
        "mousemove",
        updateMousePosition
      );
    };
  }, []);
};
