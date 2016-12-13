// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1774955509434506', // your App ID
		'clientSecret' 	: '710bfc95aa36eb3030e0e4855c20e143', // your App Secret
		'callbackURL' 	: 'http://127.0.0.1:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'DmPYp3PMzGunNhEFDibYiZPhZ',
		'consumerSecret' 	: 'dGZsrG168yJYtNANlXNLY473Rfjn29NnGJ7OJWW8EYE61JsunO',
		'callbackURL' 		: 'http://127.0.0.1:8080/auth/twitter/callback'
	},

/*
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}
*/
};