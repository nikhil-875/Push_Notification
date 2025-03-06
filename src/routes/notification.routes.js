import express from 'express';
import { sendNotification } from '../controllers/notification.controller.js';

const router = express.Router();

// Firebase config route
router.get('/firebase-config', (req, res) => {
  // Send only necessary config for frontend
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  });
});

// Register device token
router.post('/register-token', async (req, res) => {
  try {
    const { token } = req.body;
    // Store token in database or handle as needed
    res.json({ message: 'Token registered successfully' });
  } catch (error) {
    console.error('Error registering token:', error);
    res.status(500).json({ error: 'Failed to register token' });
  }
});

// Send notification route
router.post('/send-notification', sendNotification);

export default router; 