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
function createCookie(cookieName, cookieValue, daysToExpire) {
  var date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie =
    cookieName +
    "=" +
    cookieValue +
    "; expires=" +
    date.toGMTString() +
    ";path=/";
}
fetch("https://login-finished.wumpus-dev.repl.co/relogin", {
  method: "GET",
  headers: {
    Accept: "application/json",
    authorization: "Bearer " + accessCookie("connectionToken") + "",
  },
})
  .then((response) => response.json())
  .then((response) =>
    createCookie("connectionToken", response["access_token"], 30)
  );
