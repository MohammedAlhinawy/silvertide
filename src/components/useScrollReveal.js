import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          } else {
            // Remove visible class when element leaves viewport
            // so the animation replays when scrolling back
            e.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default useScrollReveal;
