// import { useEffect } from "react";

// export const useActiveCursorEffectOnPage = () => {
//   useEffect(() => {
//     let root = document.documentElement;
//     const updateMousePosition = () => {
//       root.addEventListener("mousemove", (e) => {
//         root.style.setProperty("--mouse-x", e.clientX + "px");
//         root.style.setProperty("--mouse-y", e.clientY + "px");
//       });
//     };

//     document.documentElement.addEventListener("mousemove", updateMousePosition);

//     return () => {
//       document.documentElement.removeEventListener(
//         "mousemove",
//         updateMousePosition
//       );
//     };
//   }, []);
// };

import { useEffect } from "react";

export const useActiveCursorEffectOnPage  = () => {
  useEffect(() => {
    let root = document.documentElement;
    const updateMousePosition = (e: MouseEvent) => {
      root.style.setProperty("--mouse-x", e.clientX + "px");
      root.style.setProperty("--mouse-y", e.clientY + "px");
    };

    root.addEventListener("mousemove", updateMousePosition);

    return () => {
      root.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
};
