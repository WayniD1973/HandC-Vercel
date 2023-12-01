import "https://cdn.socket.io/socket.io-3.0.5.js"
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
export const socket = io("https://h-and-c.co.uk");

socket.on('reload', () => {
	window.location.reload()
})