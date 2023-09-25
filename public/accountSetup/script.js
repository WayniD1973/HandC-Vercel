// script.js
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var displayName = document.getElementById('displayName').value;
    // Here you can send the displayName to your server or do whatever you want with it
    fetch('/api/changeDisplayName', {
			method: "POST",
			headers: {
				"Content-Type": "application/www-form-urlencoded",
				authorization: "Bearer " + accessCookie('connectionToken') + ""
			},
			body: JSON.stringify({
				display_name: displayName
			})
		})
});