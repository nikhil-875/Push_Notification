export const createNotificationMessage = (token, title, body) => ({
  notification: {
    title,
    body,
  },
  webpush: {
    headers: {
      Urgency: 'high'
    },
    notification: {
      requireInteraction: true,
      icon: 'https://www.gstatic.com/notifications/icon_192.png'
    },
    fcm_options: {
      link: '/'
    }
  },
  token
}); 