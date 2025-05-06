self.addEventListener('push', () => {
    self.registration.showNotification('Hey User', options);
  });

  self.addEventListener('push', function(e) {

    var options = {
        body: 'Install our bright money app to get 100% cashback',
        icon: 'ihttps://images.brightmoney.co/AMP_LP/new_gradient_logo.png',
        vibrate: [100, 50, 200],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '2'
        },

        actions: [
          {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
          {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
        ]
        };

        e.waitUntil(
            self.registration.showNotification('Hello world!', options)
        );

  });