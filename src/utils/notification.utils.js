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
      icon: 'https://tracker.singaji.in/SSS_logo-animation.png'
    },
    fcm_options: {
      link: '/'
    }
  },
  token
}); 