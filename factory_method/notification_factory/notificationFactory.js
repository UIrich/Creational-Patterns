class EmailNotification {
    send(message) {
        console.log(`[Email] Mensagem: ${message}`)
    }
}

class SMSNotification {
    send(message) {
        console.log(`[SMS] Mensagem: ${message}`)
    }
}

class PushNotification {
    send(message) {
        console.log(`[Push] Mensagem: ${message}`)
    }
}

class NotificationFactory {
    static createNotification(type) {
        switch(type) {
            case 'Email':
                return new EmailNotification();
            case 'SMS':
                return new SMSNotification();
            case 'Push':
                return new PushNotification();
            default :
                throw new Error('Tipo de notificação inválida');
        }
    }
}

module.exports = NotificationFactory;