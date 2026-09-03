import { logEvent } from "firebase/analytics";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { analytics, db } from "../firebase";

const SESSION_KEY = "portfolio_session_id";
const SESSION_TIMESTAMP_KEY = "portfolio_session_time";
const SESSION_EXPIRATION_MS = 30 * 60 * 1000; // 30 minutes window

const getDeviceType = () => {
  if (typeof window === "undefined") return "Unknown";
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "Mobile";
  }
  return "Desktop";
};

const getOrCreateSession = () => {
  if (typeof window === "undefined") return { sessionId: "ssr", isNew: false };

  try {
    const existingId = sessionStorage.getItem(SESSION_KEY);
    const existingTime = sessionStorage.getItem(SESSION_TIMESTAMP_KEY);
    const now = Date.now();

    if (existingId && existingTime && now - parseInt(existingTime, 10) < SESSION_EXPIRATION_MS) {
      return { sessionId: existingId, isNew: false };
    }

    const newSessionId = `sess_${Math.random().toString(36).substring(2, 11)}_${now}`;
    sessionStorage.setItem(SESSION_KEY, newSessionId);
    sessionStorage.setItem(SESSION_TIMESTAMP_KEY, now.toString());
    return { sessionId: newSessionId, isNew: true };
  } catch (err) {
    return { sessionId: `fallback_${Date.now()}`, isNew: true };
  }
};

export const analyticsService = {
  /**
   * Track initial portfolio visit and trigger deduplicated Firestore entry for push notifications
   */
  trackVisit: async (initialSection = "inicio") => {
    try {
      const { sessionId, isNew } = getOrCreateSession();
      const deviceType = getDeviceType();
      const pagePath = window.location.pathname + window.location.search + window.location.hash;
      const referrer = document.referrer || "Direct";

      // 1. Firebase Analytics event
      if (analytics) {
        logEvent(analytics, "portfolio_visit", {
          page: pagePath,
          section: initialSection,
          device_type: deviceType,
          session_id: sessionId,
          timestamp: new Date().toISOString(),
          referrer,
        });
      }

      // 2. Firestore document for push notifications (Deduplicated per session)
      if (db && isNew) {
        await addDoc(collection(db, "portfolio_visits"), {
          session_id: sessionId,
          section: initialSection,
          device_type: deviceType,
          page: pagePath,
          referrer: referrer.substring(0, 150),
          event_type: "portfolio_visit",
          created_at: serverTimestamp(),
        });
      }
    } catch (error) {
      console.warn("Analytics trackVisit notice:", error);
    }
  },

  /**
   * Track section view
   */
  trackSectionView: (sectionName) => {
    try {
      if (!analytics) return;
      logEvent(analytics, "section_view", {
        section_name: sectionName,
        firebase_screen: sectionName,
        firebase_screen_class: "PortfolioSection",
      });
    } catch (error) {
      console.warn("Analytics trackSectionView notice:", error);
    }
  },

  /**
   * Track project view details modal
   */
  trackProjectView: (projectName) => {
    try {
      if (!analytics) return;
      logEvent(analytics, "project_view", {
        project_name: projectName,
      });
    } catch (error) {
      console.warn("Analytics trackProjectView notice:", error);
    }
  },

  /**
   * Track project link click (GitHub, Live Demo)
   */
  trackProjectLinkClick: (projectName, linkType) => {
    try {
      if (!analytics) return;
      logEvent(analytics, "project_link_click", {
        project_name: projectName,
        link_type: linkType,
      });
    } catch (error) {
      console.warn("Analytics trackProjectLinkClick notice:", error);
    }
  },

  /**
   * Track LinkedIn click
   */
  trackLinkedinClick: () => {
    try {
      if (!analytics) return;
      logEvent(analytics, "linkedin_click", {
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.warn("Analytics trackLinkedinClick notice:", error);
    }
  },

  /**
   * Track Email click or copy
   */
  trackEmailClick: (actionType = "click") => {
    try {
      if (!analytics) return;
      logEvent(analytics, "email_click", {
        action_type: actionType,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.warn("Analytics trackEmailClick notice:", error);
    }
  },

  /**
   * Track CV Download
   */
  trackCvDownload: () => {
    try {
      if (!analytics) return;
      logEvent(analytics, "cv_download", {
        timestamp: new Date().toISOString(),
        file_name: "CV_Andrew_Andrades.pdf",
      });
    } catch (error) {
      console.warn("Analytics trackCvDownload notice:", error);
    }
  },
};
