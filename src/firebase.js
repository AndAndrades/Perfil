import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getMessaging, isSupported as isMessagingSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const isConfigValid = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app = null;
let analytics = null;
let db = null;
let messaging = null;

if (isConfigValid) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    
    // Firestore setup
    try {
      db = getFirestore(app);
    } catch (e) {
      console.warn("Firebase Firestore could not be initialized:", e);
    }

    // Analytics setup
    isAnalyticsSupported()
      .then((supported) => {
        if (supported && app) {
          analytics = getAnalytics(app);
        }
      })
      .catch((e) => console.warn("Firebase Analytics not supported:", e));

    // Messaging setup (FCM)
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      isMessagingSupported()
        .then((supported) => {
          if (supported && app) {
            messaging = getMessaging(app);
          }
        })
        .catch((e) => console.warn("Firebase Messaging not supported:", e));
    }
  } catch (error) {
    console.warn("Firebase initialization skipped or failed:", error);
  }
} else {
  console.info("Firebase credentials not configured yet. Analytics & push notifications running in fallback mode.");
}

export const trackSectionView = (sectionName) => {
  // Maintained for backwards compatibility; real calls routed through analyticsService
  import("./services/analyticsService").then((module) => {
    module.analyticsService.trackSectionView(sectionName);
  }).catch(() => {});
};

export { app, analytics, db, messaging, firebaseConfig };
