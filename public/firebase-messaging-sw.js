importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker
// Note: In production build, these match your Firebase project configuration
firebase.initializeApp({
  apiKey: "PLACEHOLDER_SERVICE_WORKER_KEY",
  authDomain: "PLACEHOLDER.firebaseapp.com",
  projectId: "PLACEHOLDER_PROJECT_ID",
  storageBucket: "PLACEHOLDER.appspot.com",
  messagingSenderId: "PLACEHOLDER_SENDER_ID",
  appId: "PLACEHOLDER_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  
  const notificationTitle = payload.notification?.title || "🔔 Nueva visita a tu portafolio";
  const notificationOptions = {
    body: payload.notification?.body || "Alguien acaba de visitar tu portafolio personal.",
    icon: "/favicon.svg",
    badge: "/favicon.svg",
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
