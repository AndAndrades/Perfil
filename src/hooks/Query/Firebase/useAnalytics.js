import { analyticsService } from "../../../services/analyticsService";

export const useAnalytics = () => {
  return {
    trackVisit: analyticsService.trackVisit,
    trackSectionView: analyticsService.trackSectionView,
    trackProjectView: analyticsService.trackProjectView,
    trackProjectLinkClick: analyticsService.trackProjectLinkClick,
    trackLinkedinClick: analyticsService.trackLinkedinClick,
    trackEmailClick: analyticsService.trackEmailClick,
    trackCvDownload: analyticsService.trackCvDownload,
  };
};

export default useAnalytics;
