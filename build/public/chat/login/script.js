/*
function login() {
  login2()
  var usernameinput = document.getElementById('input').value;
  window.location.replace("https://handc.h-and-c.co.uk/wechat/?username=" + usernameinput + '');
}

async function login2() {
  var usernameinput = document.getElementById('input').value;
  var usernamelength = usernameinput.length;
  if (usernameinput === "") {
    error = document.createElement("textarea")
    error.html = "Please Input A Name!"
    error.style = "color: red;"
  }
  else if (usernamelength >= 22) {
    error = document.createElement("textarea")
    error.html = "Please Input A Name Below The 22 Character Limit!"
    error.style = "color: red;"
  }
  else {
    const response = await fetch('https://wechat-db.h-and-c.co.uk/login.php?username=' + usernameinput + '', {
      method: 'POST',
      headers: {
      }
    });
    response.json().then(data => {
      console.log(data);
    });
  }
}
var urlString = window.location.href;
var paramString = urlString.split('?')[1];
var queryString = new URLSearchParams(paramString);
if (queryString.has('error')) {
  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
    username = pair[1]
    localStorage.removeItem("wechatLoginPending")
    localStorage.removeItem("wechatLoginUsername")
    localStorage.removeItem("wechatLoginPassword")
  }
  document.getElementById('ErrorText').style.display="block";
}
if (queryString.has('incorrect')) {
  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
    username = pair[1]
    localStorage.removeItem("wechatLoginPending")
    localStorage.removeItem("wechatLoginUsername")
    localStorage.removeItem("wechatLoginPassword")
  }
  document.getElementById('IncorrectText').style.display="block";
}
if (localStorage.getItem('wechatLoginPending') === 'true') {
  login()
}
else {
  console.log()
}
if (localStorage.getItem('wechatSignupPending') === 'true') {
  signup()
}
else {
  console.log()
}
function setLoginInStorage() {
  var username = document.getElementById('loginUsernameInput').value;
  var password = document.getElementById('loginPassInput').value;
  localStorage.setItem('wechatLoginPending', 'true')
  localStorage.setItem('wechatLoginPassword', password)
  localStorage.setItem('wechatLoginUsername', username)
}
function login() {
  var username = localStorage.getItem('wechatLoginUsername')
  var password = localStorage.getItem('wechatLoginPassword')
  window.location.replace('https://wechat-db.h-and-c.co.uk/login/validate.php?username=' + username + '&password=' + password + '')
}
function setSignupInStorage() {
  var username = document.getElementById('signupUsernameInput').value;
  var password = document.getElementById('signupPassInput').value;
  localStorage.setItem('wechatSignupPending', 'true')
  localStorage.setItem('wechatSignupPassword', password)
  localStorage.setItem('wechatSignupUsername', username)
}
function signup() {
  var username = localStorage.getItem('wechatSignupUsername')
  var password = localStorage.getItem('wechatSignupPassword')
  window.location.replace('https://wechat-db.h-and-c.co.uk/signup/validate.php?username=' + username + '&password=' + password + '')
}
*/
if (localStorage.getItem('username') == '') {
	window.location.replace('https://login.h-and-c.co.uk/logout.php/')
}
else {
	window.location.replace('https://login.h-and-c.co.uk/login/')
}