importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Firebase initialization
firebase.initializeApp({
  apiKey: "AIzaSyAk3sPX6A50nilU4eGW9-yavFAM4LN6hpI",
  authDomain: "dns-service-3b132.firebaseapp.com",
  projectId: "dns-service-3b132",
  storageBucket: "dns-service-3b132.firebasestorage.app",
  messagingSenderId: "533411739496",
  appId: "1:533411739496:web:1903b01f025812cdb908dd",
  measurementId: "G-WC2KNSZ0TN"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://www.gstatic.com/notifications/icon_192.png',
    badge: 'https://www.gstatic.com/notifications/icon_192.png',
    data: payload.data,
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: 'Open'
      }
    ]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification clicked:', event);
  
  event.notification.close();
  
  // Handle notification click - open window/tab
  event.waitUntil(
    clients.openWindow('/')
  );
});