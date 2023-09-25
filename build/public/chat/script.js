if (localStorage.getItem("maintenanceBypass") === 'true') {
	console.log('maintenance prevented')
}
else {
	maintenance()
}
try {
  localStorage.getItem("username")
}
catch (err) {
  window.location.replace('errors/cookieAccessBlocked/')
};

if (localStorage.getItem('hammychatCustomChannelID') != null && window.location.href == 'https://h-and-c.co.uk/wechat/?') {
  window.location.replace('?channel=custom&id=' + localStorage.getItem('wechatCustomChannelID'))
}

if (window.location.href == 'https://h-and-c.co.uk/wechat/') {
  localStorage.removeItem('hammychatCustomChannelID')
}

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
    localStorage.removeItem("hammychatLoginPending")
    localStorage.removeItem("hammychatLoginUsername")
    localStorage.removeItem("hammychatLoginPassword")
    localStorage.removeItem("hammychatSignupPending")
    localStorage.removeItem("hammychatSignupUsername")
    localStorage.removeItem("hammychatSignupPassword")
    var username = localStorage.getItem("username");
		fetch('https://wechat-db.h-and-c.co.uk/login.php?username=' + username + '', {
      method: 'POST',
      headers: {
      }
    });
    console.log(username)
    window.location.replace('https://h-and-c.co.uk/chat/')
  }
}
else {
  if (localStorage.getItem('username') !== "" && localStorage.getItem('username') !== null) {
    username = localStorage.getItem('username')
  }
  else {
    window.location.replace("login/")
  }
  if (localStorage.getItem('hammychat_Theme') !== null) {
    theme = localStorage.getItem('hammychat_Theme')
  }
  else {
    localStorage.setItem('hammychat_Theme', 'regular')
    theme = 'regular'
  }
}
if (queryString.has('channel') && queryString.has('id')) {
  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);
    if (pair[1] == 'custom') {
      var customChannel = true;
    }
    else if (pair[0] == 'id') {
      var customChannelID = pair[1]
      localStorage.setItem('hammychatCustomChannelID', customChannelID)
    }
  }
}
function loadlog() {
  theme = localStorage.getItem('hammychat_Theme')
  var loadingtext = document.getElementById("loadingText")
  loadingtext.style = "display: none;";
  var iframe = document.createElement('iframe');
  iframe.id = 'logiframe';
  iframe.class = 'logiframe';
  document.body.appendChild(iframe);
  if (customChannel == true) {
    document.getElementById('logiframe').src = 'https://wechat-db.h-and-c.co.uk/channels/' + customChannelID + '/' + theme + '.php';
  }
  var iframe2 = document.getElementById('logiframe');
  iframe2.scroll({ top: iframe2.scrollHeight, behavior: "smooth"})
  reloadlog()
  
};
function reloadlog() {
  var theme = localStorage.getItem('hammychat_Theme')
  if (customChannel == true) {
    document.getElementById('logiframe').src = 'https://wechat-db.h-and-c.co.uk/channels/' + customChannelID + '/' + theme + '.php';
		//document.getElementById('logiframe').src="https://wechat-db.h-and-c.co.uk/" + theme + "Shutoff.php"
  }
  else {
    document.getElementById('logiframe').src = "https://wechat-db.h-and-c.co.uk/views/" + theme + ".php";
		//document.getElementById('logiframe').src="https://wechat-db.h-and-c.co.uk/" + theme + "Shutoff.php"
  }
  var iframe2 = document.getElementById('logiframe')
  iframe2.scroll({ top: iframe2.scrollHeight, behavior: "smooth" })
};
function maintenance() {
	document.querySelector('html').innerHTML=`<title>Maintenence</title>
<style>
  @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');

@-moz-keyframes rocket-movement { 100% {-moz-transform: translate(1200px,-600px);} }
@-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }
@keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }
@-moz-keyframes spin-earth { 100% { -moz-transform: rotate(-360deg); transition: transform 20s;  } }
@-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }
@keyframes spin-earth{ 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); transition: transform 20s; } }

@-moz-keyframes move-astronaut {
    100% { -moz-transform: translate(-160px, -160px);}
}
@-webkit-keyframes move-astronaut {
    100% { -webkit-transform: translate(-160px, -160px);}
}
@keyframes move-astronaut{
    100% { -webkit-transform: translate(-160px, -160px); transform:translate(-160px, -160px); }
}
@-moz-keyframes rotate-astronaut {
    100% { -moz-transform: rotate(-720deg);}
}
@-webkit-keyframes rotate-astronaut {
    100% { -webkit-transform: rotate(-720deg);}
}
@keyframes rotate-astronaut{
    100% { -webkit-transform: rotate(-720deg); transform:rotate(-720deg); }
}

@-moz-keyframes glow-star {
    40% { -moz-opacity: 0.3;}
    90%,100% { -moz-opacity: 1; -moz-transform: scale(1.2);}
}
@-webkit-keyframes glow-star {
    40% { -webkit-opacity: 0.3;}
    90%,100% { -webkit-opacity: 1; -webkit-transform: scale(1.2);}
}
@keyframes glow-star{
    40% { -webkit-opacity: 0.3; opacity: 0.3;  }
    90%,100% { -webkit-opacity: 1; opacity: 1; -webkit-transform: scale(1.2); transform: scale(1.2); border-radius: 999999px;}
}

.spin-earth-on-hover{
    
    transition: ease 200s !important;
    transform: rotate(-3600deg) !important;
}

html, body{
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Dosis', sans-serif;
    font-weight: 300;
    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
    user-select: none; /* Standard syntax */
}

.bg-purple{
    background: url(http://salehriaz.com/404Page/img/bg_purple.png);
    background-repeat: repeat-x;
    background-size: cover;
    background-position: left top;
    height: 100%;
    overflow: hidden;
    
}

.custom-navbar{
    padding-top: 15px;
}

.brand-logo{
    margin-left: 25px;
    margin-top: 5px;
    display: inline-block;
}

.navbar-links{
    display: inline-block;
    float: right;
    margin-right: 15px;
    text-transform: uppercase;
    
    
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
/*    overflow: hidden;*/
    display: flex; 
    align-items: center; 
}

li {
    float: left;
    padding: 0px 15px;
}

li a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing : 2px;
    font-size: 12px;
    
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

li a:hover {
    color: #ffcb39;
}

.btn-request{
    padding: 10px 25px;
    border: 1px solid #FFCB39;
    border-radius: 100px;
    font-weight: 400;
}

.btn-request:hover{
    background-color: #FFCB39;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 20px 20px rgba(0,0,0,0.1);
}

.btn-go-home{
    position: relative;
    z-index: 200;
    margin: 15px auto;
    width: 100px;
    padding: 10px 15px;
    border: 1px solid #FFCB39;
    border-radius: 100px;
    font-weight: 400;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing : 2px;
    font-size: 11px;
    
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.btn-go-home:hover{
    background-color: #FFCB39;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 20px 20px rgba(0,0,0,0.1);
}

.central-body{
/*    width: 100%;*/
    padding: 17% 5% 10% 5%;
    text-align: center;
}

.objects img{
    z-index: 90;
    pointer-events: none;
}

.object_rocket{
    z-index: 95;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    animation: rocket-movement 200s linear infinite both running;
}

.object_earth{
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 90;
/*    animation: spin-earth 100s infinite linear both;*/
}

.object_moon{
    position: absolute;
    top: 12%;
    left: 25%;
/*
    transform: rotate(0deg);
    transition: transform ease-in 99999999999s;
*/
}

.earth-moon{
    
}

.object_astronaut{
    animation: rotate-astronaut 200s infinite linear both alternate;
}

.box_astronaut{
    z-index: 110 !important;
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;
}

.image-404{
    position: relative;
    z-index: 100;
    pointer-events: none;
    font-size: 50px;
    color: white;
}

.stars{
    background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
    background-repeat: repeat;
    background-size: contain;
    background-position: left top;
}

.glowing_stars .star{
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    width: 3px;
    height: 3px;
    opacity: 0.3;
    will-change: opacity;
}

.glowing_stars .star:nth-child(1){
    top: 80%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 1s;
}
.glowing_stars .star:nth-child(2){
    top: 20%;
    left: 40%;
    animation: glow-star 2s infinite ease-in-out alternate 3s;
}
.glowing_stars .star:nth-child(3){
    top: 25%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 5s;
}
.glowing_stars .star:nth-child(4){
    top: 75%;
    left: 80%;
    animation: glow-star 2s infinite ease-in-out alternate 7s;
}
.glowing_stars .star:nth-child(5){
    top: 90%;
    left: 50%;
    animation: glow-star 2s infinite ease-in-out alternate 9s;
}

@media only screen and (max-width: 600px){
    .navbar-links{
        display: none;
    }
    
    .custom-navbar{
        text-align: center;
    }
    
    .brand-logo img{
        width: 120px;
    }
    
    .box_astronaut{
        top: 70%;
    }
    
    .central-body{
        padding-top: 25%;
    }
}</style>

<body class="bg-purple">
        
        <div class="stars">
            <div class="custom-navbar">
                <div class="brand-logo" style="font-size: 38px; color: white;">
                    H&C
                </div>
                <div class="navbar-links">
                </div>
            </div>
            <div class="central-body">
                <div class="image-404">Hammy Chat is officially being redesigned! This version of Hammy Chat will not be in use until we reopen it as a legacy version. Please check back later for more information!</div>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px">
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px">
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px">
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px">
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>

        </div>

    </body>`;
};
setInterval(reloadlog, 4000);
async function sendmessage() {
  var username = localStorage.getItem("username");
  var message = document.getElementById('chatinput').value;
  if (message === "") {
    window.location.reload()
  }
  else {
    if (customChannel == true) {
      const response = await fetch('https://wechat-db.h-and-c.co.uk/channels/'+ customChannelID +'/write.php?message=' + message + '&username=' + username + '', {
      method: 'POST',
      headers: {
      }
    });
    response.json().then(data => {
      console.log(data);
    });
    }
    else {
      const response = await fetch('https://wechat-db.h-and-c.co.uk/write.php?message=' + message + '&username=' + username + '', {
        method: 'POST',
        headers: {
        }
      });
      response.json().then(data => {
        console.log(data);
      });
    }
  }
};

function logout() {
  logout2()
  localStorage.setItem('username', '')
  window.location.reload()
}

async function logout2() {
  var username = localStorage.getItem("username");
  const response = await fetch('https://wechat-db.h-and-c.co.uk/logout.php?username=' + username + '', {
    method: 'POST',
    headers: {
    }
  });
  response.json().then(data => {
    console.log(data);
  });
};

var username = localStorage.getItem("username");
var usernameElementInSideBar = document.getElementById("usernameElement");

window.onload = usernameElementInSideBar.innerHTML = "Username: " + username + "";
loadlog();
function joinVoice() {
  joinVoice2()
  window.location.replace('channels/voice/general/')
}
async function joinVoice2() {
  var username = localStorage.getItem("username");
  const response = await fetch('https://wechat-db.h-and-c.co.uk/sysWrite.php?username=' + username + '&message=has joined the General Voice Chat.', {
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
function useCustomChannel() {
  window.location.replace('./menus/useCustomChannel')
}
function createCustomChannel() {
  window.location.replace('./menus/createCustomChannel')
}
function reportUser() {
  window.location.replace('./menus/reportUser')
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}
/*navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(let registration of registrations) {
  registration.unregister();
}
if (localStorage.getItem('wechatDev') !== 'true') {
	//setInterval(maintenance, 1000)
}
*/