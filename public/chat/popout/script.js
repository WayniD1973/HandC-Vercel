try {
  localStorage.getItem("username")
}
catch (err) {
  window.location.replace('errors/cookieAccessBlocked/')
};

var theme
var urlString = window.location.href;
var paramString = urlString.split('?')[1];
var queryString = new URLSearchParams(paramString);
if (queryString.has('username')) {
  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
    username = pair[1]
    localStorage.removeItem("color");
    localStorage.setItem("username", pair[1]);
    localStorage.removeItem("wechatLoginPending")
    localStorage.removeItem("wechatLoginUsername")
    localStorage.removeItem("wechatLoginPassword")
    localStorage.removeItem("wechatSignupPending")
    localStorage.removeItem("wechatSignupUsername")
    localStorage.removeItem("wechatSignupPassword")
    var username = localStorage.getItem("username");
    console.log(username)
    window.location.replace('https://handc.harleydyson.repl.co/wechat/')
  }
}
else {
  if (localStorage.getItem('username') !== "" && localStorage.getItem('username') !== null) {
    username = localStorage.getItem('username')
  }
  else {
    window.location.replace("login/")
  }
  if (localStorage.getItem('Wechat_Theme') !== null) {
    theme = localStorage.getItem('Wechat_Theme')
  }
  else {
    localStorage.setItem('Wechat_Theme', 'regular')
    theme = 'regular'
  }
}
function loadlog() {
  theme = localStorage.getItem('Wechat_Theme')
  var iframe = document.createElement('iframe');
  iframe.id = 'logiframe';
  iframe.class = 'logiframe';
  document.body.appendChild(iframe);
  document.getElementById('logiframe').src = 'https://wechat-db.harleydyson.repl.co/views/loading.php';
  var iframe2 = document.getElementById('logiframe');
  iframe2.scroll({ top: iframe2.scrollHeight, behavior: "smooth" })
  reloadlog()
};
function reloadlog() {
  var theme = localStorage.getItem('Wechat_Theme')
  document.getElementById('logiframe').src = "https://wechat-db.harleydyson.repl.co/views/" + theme + ".php";
  var iframe2 = document.getElementById('logiframe')
  iframe2.scroll({ top: iframe2.scrollHeight, behavior: "smooth" })
};
setInterval(reloadlog, 4000);
async function sendmessage() {
  var username = localStorage.getItem("username");
  var message = document.getElementById('chatinput').value;
  if (message === "") {
    window.location.reload()
  }
  else {
    const response = await fetch('https://wechat-db.harleydyson.repl.co/write.php?message=' + message + '&username=' + username + '', {
      method: 'POST',
      headers: {
      }
    });
    response.json().then(data => {
      console.log(data);
    });
  }
};

function logout() {
  logout2()
  localStorage.setItem('username', '')
  window.location.reload()
}

async function logout2() {
  var username = localStorage.getItem("username");
  const response = await fetch('https://wechat-db.harleydyson.repl.co/logout.php?username=' + username + '', {
    method: 'POST',
    headers: {
    }
  });
  response.json().then(data => {
    console.log(data);
  });
};
loadlog();
function joinVoice() {
  joinVoice2()
  window.location.replace('menus/selectVideoOnOrOff/')
}
async function joinVoice2() {
  var username = localStorage.getItem("username");
  const response = await fetch('https://wechat-db.harleydyson.repl.co/sysWrite.php?username=' + username + '&message=has joined the General Voice Chat.', {
    method: 'POST',
    headers: {
    }
  });
  response.json().then(data => {
    console.log(data);
  });
}
async function ask() {
  let permission = await Notification.requestPermission();
};
ask()
function gohome() {
  window.location.replace('../home/')
};
if (localStorage.getItem('wechatPopoutWindowOpen') == 'true') {
  console.log()
}
else {
  window.location.replace('../')
}
function closeWindow() {
  localStorage.removeItem('wechatPopoutWindowOpen')
  window.close()
}