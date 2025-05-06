const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BO_xQRtk0yw4JxRPD1F1n3plsE76Z6-PmMCPaXPDX5pbbXwHQtzi8DjzxDLys5MmGofgGF1QdhpYmWXcVkiBDqk',
  privateKey: 'b29AEPLco0NFVtv9Y89o2bcyLQW05_p7cJLvF7TA6rU'
};

webpush.setVapidDetails(
  'mailto:pranjal.agarwal@brightmoney.co',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');