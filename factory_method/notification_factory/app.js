const NotificationFactory = require('./notificationFactory');

const email = NotificationFactory.createNotification('Email');
const sms = NotificationFactory.createNotification('SMS');
const push = NotificationFactory.createNotification('Push');

email.send('Olá!');
sms.send('Olá!');
push.send('Olá!');
