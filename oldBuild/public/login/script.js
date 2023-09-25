function login() {
  fetch("https://h-and-c.co.uk/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("usernameInput").value,
      password: document.getElementById("passwordInput").value,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
			createCookie('connectionToken', response["access_token"], 30);
			const urlParams = new URLSearchParams(window.location.search);
			if (urlParams.get('redirect')) {
				window.location.replace(urlParams.get('redirect'))
			}
			else {
				window.location.replace('/')
			}
		});
}
