$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	console.log(scroll);

	$("#parallex").css({
	    height: 100 - scroll/2 + "%"
 	});

	$("#parallex").css({
	    width: 100 - scroll/2 + "%"
 	});
});	

function init() {
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyCjShrp-_VXVg-EfRZSWPJW9Pyva33DW2I",
		authDomain: "portfolio-website-73b77.firebaseapp.com",
		databaseURL: "https://portfolio-website-73b77.firebaseio.com",
		projectId: "portfolio-website-73b77",
		storageBucket: "portfolio-website-73b77.appspot.com",
		messagingSenderId: "739093930878",
		appId: "1:739093930878:web:99eb4391e6f31b9e77092f",
		measurementId: "G-HC45222YLS"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
}

function getTime( ) {
	var d = new Date( ); 
	d.setHours( d.getHours() + 2 ); // offset from local time
	var h = (d.getHours() % 12) || 12; // show midnight & noon as 12
	return (
		( h < 10 ? '0' : '') + h +
		( d.getMinutes() < 10 ? ':0' : ':') + d.getMinutes() +
                // optional seconds display
		// ( d.getSeconds() < 10 ? ':0' : ':') + d.getSeconds() + 
		( d.getHours() < 12 ? ' AM' : ' PM' )
	);
	
}

function updateLeads()
{
	init();
	var database = firebase.database().ref('Site_Stats');
	var siteHitsRef = database.child('Visit_stats');
	var newHit = 0;
	var timestamp = getTime();

	firebase.database().ref().child("Site_Stats").orderByChild("lastSeen").once("value", function (snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var oldHit=childSnapshot.val().hits;
			newHit = oldHit + 1;

			siteHitsRef.update({
			hits : newHit,
			lastSeen : timestamp
			})

		});
	});
}