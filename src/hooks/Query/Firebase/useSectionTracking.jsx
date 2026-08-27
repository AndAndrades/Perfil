import { useEffect } from "react";
import { trackSectionView } from "../../../firebase";

export const useSectionTracking = (sectionName, threshold = 0.5) => {
  useEffect(() => {
    const section = document.getElementById(sectionName);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackSectionView(sectionName);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionName, threshold]);
};