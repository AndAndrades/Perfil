import { useEffect } from "react";
import { analyticsService } from "../../../services/analyticsService";

export const useSectionTracking = (sectionName, threshold = 0.4) => {
  useEffect(() => {
    const section = document.getElementById(sectionName);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          analyticsService.trackSectionView(sectionName);
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