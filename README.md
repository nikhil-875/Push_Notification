# Push Notification Demo App 🔔

A modern web application demonstrating Firebase Cloud Messaging (FCM) integration for push notifications. Built with Node.js, Express, and Firebase.

## Features ✨

- Real-time push notifications
- Browser notifications support
- Modern UI with animations
- In-app notifications
- Toast messages for better UX
- Secure Firebase configuration

## Prerequisites 📋

- Node.js (v14 or higher)
- npm or yarn
- Firebase account with FCM enabled
- Modern web browser with notifications support

## Setup 🚀

1. **Clone the repository**
```bash
git clone <repository-url>
cd Push_Notification
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**

Create a `.env` file in the root directory with the following variables:

```env
# Firebase Project Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_SERVICE_ACCOUNT={"type":"service_account",...} # Your service account JSON

# Server Configuration
PORT=3000

# Firebase Frontend Config
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-domain.firebaseapp.com
FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
FIREBASE_MEASUREMENT_ID=your-measurement-id
FIREBASE_VAPID_KEY=your-vapid-key
```

4. **Start the server**
```bash
npm start
```

The app will be running at `http://localhost:3000`

## Usage 💡

1. Open the application in your browser
2. Click "Request Notification Permission" button
3. Once permission is granted, you can:
   - Send test notifications using the form
   - Receive real-time notifications
   - See in-app notifications
   - Get toast messages for actions

## Project Structure 📁

```
Push_Notification/
├── src/
│   ├── config/
│   │   └── firebase.config.js
│   │   └── notification.controller.js
│   │   └── notification.routes.js
│   └── index.js
├── public/
│   ├── index.html
│   └── firebase-messaging-sw.js
├── .env
└── package.json
```

## Security Notes 🔒

- All Firebase credentials are stored in environment variables
- Service account JSON is stored securely in environment variable
- Frontend configuration is served through a secure API endpoint
- No sensitive credentials are exposed in the frontend code

## Features in Detail 🎯

1. **Push Notifications**
   - Real-time delivery
   - Custom notification styling
   - Click actions support
   - Background & foreground handling

2. **UI Components**
   - Modern gradient design
   - Smooth animations
   - Responsive layout
   - Interactive elements

3. **Toast Messages**
   - Success & error states
   - Auto-dismissal
   - Smooth animations
   - Clear feedback for user actions

## Troubleshooting 🔧

1. **Notifications not showing:**
   - Check browser permissions
   - Verify Firebase configuration
   - Ensure service worker is registered
   - Check console for errors

2. **Server issues:**
   - Verify environment variables
   - Check Firebase service account
   - Ensure port is available
   - Check server logs

## Contributing 🤝

Feel free to:
- Open issues
- Submit pull requests
- Suggest improvements
- Report bugs

## License 📄

MIT License - feel free to use this project for learning and development.

---

Made with ❤️ using Node.js, Express, and Firebase 