importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCjShrp-_VXVg-EfRZSWPJW9Pyva33DW2I",
    authDomain: "portfolio-website-73b77.firebaseapp.com",
    databaseURL: "https://portfolio-website-73b77.firebaseio.com",
    projectId: "portfolio-website-73b77",
    storageBucket: "portfolio-website-73b77.appspot.com",
    messagingSenderId: "739093930878",
    appId: "1:739093930878:web:99eb4391e6f31b9e77092f",
    measurementId: "G-HC45222YLS"
  });


const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  return self.registration.showNotification(
    message.notification.title,
    message.notification
  );
});