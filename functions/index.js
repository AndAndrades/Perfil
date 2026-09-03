const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Cloud Function triggered automatically when a new portfolio visit is logged in Firestore (portfolio_visits)
 * Sends FCM Push Notification to owner's registered phone / browser tokens.
 */
exports.notifyOnPortfolioVisit = onDocumentCreated("portfolio_visits/{visitId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }

  const visitData = snapshot.data();
  const deviceType = visitData.device_type || "Desconocido";
  const section = visitData.section || "Inicio";
  
  // Format current local time (Chile/Local HH:mm)
  const now = new Date();
  const timeString = now.toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const deviceEmoji = deviceType.toLowerCase().includes("mobile") ? "📱" : "💻";

  const payload = {
    notification: {
      title: "🔔 Nueva visita a tu portafolio",
      body: `Alguien acaba de entrar.\n${deviceEmoji} ${deviceType}\n📄 Sección: ${section}\n🕐 ${timeString}`,
    },
    data: {
      section: section,
      device_type: deviceType,
      timestamp: String(visitData.created_at || Date.now()),
    },
  };

  try {
    // 1. Retrieve all registered FCM tokens (admin/phone tokens)
    const tokensSnapshot = await admin.firestore().collection("admin_tokens").get();
    
    if (tokensSnapshot.empty) {
      console.log("No admin tokens found in Firestore. Please register your phone/browser token.");
      return;
    }

    const tokens = tokensSnapshot.docs.map((doc) => doc.id);

    // 2. Send notification to all registered admin devices via FCM
    const response = await admin.messaging().sendEachForMulticast({
      tokens: tokens,
      notification: payload.notification,
      data: payload.data,
    });

    console.log(`Successfully sent ${response.successCount} visit notification(s).`);
    
    // Clean up expired or invalid tokens
    if (response.failureCount > 0) {
      const failedTokens = [];
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          failedTokens.push(tokensSnapshot.docs[idx].ref.delete());
        }
      });
      await Promise.all(failedTokens);
    }
  } catch (error) {
    console.error("Error sending visit FCM notification:", error);
  }
});
