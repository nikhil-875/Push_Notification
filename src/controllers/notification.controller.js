import { admin } from '../config/firebase.config.js';
import { createNotificationMessage } from '../utils/notification.utils.js';

export const registerToken = async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }
    
    console.log('Received FCM token:', token);
    res.status(200).json({ message: 'Token registered successfully' });
  } catch (error) {
    console.error('Error registering token:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const sendNotification = async (req, res) => {
  try {
    const { token, title, body } = req.body;
    
    if (!token || !title || !body) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['token', 'title', 'body']
      });
    }

    const message = createNotificationMessage(token, title, body);
    const response = await admin.messaging().send(message);
    
    console.log('Successfully sent message:', response);
    res.status(200).json({ 
      message: 'Notification sent successfully',
      messageId: response
    });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ 
      error: 'Failed to send notification',
      details: error.message 
    });
  }
}; 