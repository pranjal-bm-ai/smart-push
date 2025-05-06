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

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dQ0ku1ZU7qs:APA91bGz1RcZUnNiK-I75hSZ-MatoarfO_bvn_ByNQ9EJs9gSGTe-JPNRREypQRhl8-hLC6vn-keOIsBWLgFVx-X1VMs6qwweAPAecsYSNwxNZwCFzUdoIZjBWoncDiwnZvOWWHHZ6rR","expirationTime":null,"keys":{"p256dh":"BA_NSSTW3AmMCn0yZUfs3SRoCup5vj_ZwofHnb4dqhP_jhTDV9dgvmxvjrYmL3C6E_hqbHwW4RH6qERIP8RLmgA","auth":"UMmPaLI6viROeje5LUhsJA"}}

webpush.sendNotification(sub, 'Your Push Payload Text');