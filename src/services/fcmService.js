import { getToken } from "firebase/messaging";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { messaging, db } from "../firebase";

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

export const fcmService = {
  /**
   * Request push notification permission and register FCM Token in Firestore (used by admin/owner's device)
   */
  requestNotificationPermission: async () => {
    try {
      if (!messaging) {
        console.warn("FCM Messaging is not supported or initialized.");
        return { success: false, reason: "messaging_unsupported" };
      }

      if (!("Notification" in window)) {
        console.warn("This browser does not support desktop notifications.");
        return { success: false, reason: "notifications_unsupported" };
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        console.info("Notification permission denied by user.");
        return { success: false, reason: "permission_denied" };
      }

      const currentToken = await getToken(messaging, {
        vapidKey: VAPID_KEY || undefined,
      });

      if (currentToken) {
        // Save device token in Firestore for the Cloud Function to push alerts to
        if (db) {
          await setDoc(doc(collection(db, "admin_tokens"), currentToken), {
            token: currentToken,
            device_type: navigator.userAgent.includes("Mobi") ? "Mobile" : "Desktop",
            updated_at: serverTimestamp(),
          });
        }
        console.info("FCM Token successfully registered:", currentToken);
        return { success: true, token: currentToken };
      } else {
        console.warn("No registration token available. Request permission to generate one.");
        return { success: false, reason: "no_token" };
      }
    } catch (error) {
      console.warn("Error requesting notification permission:", error);
      return { success: false, error };
    }
  },
};
