function accessCookie(cookieName) {
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(";");
  for (var i = 0; i < allCookieArray.length; i++) {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name) == 0)
      return temp.substring(name.length, temp.length);
  }
  return "";
}
window.onload = function() {
	fetch('https://login-finished.wumpus-dev.repl.co/addSession', {
		method: "POST",
		headers: {
			authorization: 'Bearer ' + accessCookie('connectionToken') + ''
		}
	})
}

window.addEventListener('unload', async function () {
	alert('unload')
  const unloadResponse = await fetch('https://login-finished.wumpus-dev.repl.co/revokeSession', {
    method: "POST",
    headers: {
      authorization: 'Bearer ' + accessCookie('connectionToken') + ''
    },
		keepalive: true
	})
});
