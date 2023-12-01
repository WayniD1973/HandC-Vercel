fetch('https://login-finished.wumpus-dev.repl.co/signup', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		"username": "Wumpus",
		"password": "This is a password"
	})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))

fetch('https://login-finished.wumpus-dev.repl.co/login', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		"username": "Wumpus",
		"password": "This is a password"
	})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))

fetch('https://login-finished.wumpus-dev.repl.co/users/@Wumpus/admin', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NjQ5OTMzMSwianRpIjoiMGYxMTRiMzEtYWY5OC00YTFkLTkyZDctZGMxMDlmZWE1ZjY3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjg2NDk5MzMxLCJleHAiOjE2ODY1MDAyMzF9.O1Mty3JRM3Cnmc1j-m1Veopc5hd1TRn3W6a4Cce3kxE"
	},
	body: JSON.stringify({
		"username": "Wumpus",
		"password": "This is a password"
	})
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))