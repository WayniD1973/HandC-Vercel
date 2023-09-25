//yes i did have to make a whole new file for themes lol
//Elements
var iframe = document.getElementById('logiframe')
var input = document.getElementById('chatinput')
var sidebar = document.getElementById('sidebar')
var logo = document.getElementById('logo')
var username = document.getElementById('usernameElement')
var main = document.getElementById('main')
//Monokai Styles

var monokaiIframeStyle = `
  position: absolute;
  width: 78%;
  left: 16.1%;
  top: 0%;
  height: 90%;
  outline: none;
  border-bottom: none;
  border-top: none;
  border-right: none;
  border-left: none;
`
var monokaiInputStyle = `
  border-radius: 60px;
  position: absolute;
  bottom: 3%;
  left: 18%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #282828;
  color: #ffffff;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`
var monokaiSidebarStyle = `
  background-color: #303030;
  height: 100%;
  width: 16%;
  left: 0%;
  top: 0%;
  display: block;
  position: absolute;
  border-right: 2px solid 2#b3a36;
`
var monokaiLogoStyle = `
  border-bottom: 1px solid #2b3a36;
  font-family: arial;
  font-size: 40px;
  text-align: center;
  color: #ffffff;
`
var monokaiUsernameStyle = `
  font-family: arial;
  font-size: 20px;
  padding-top: 10px;
  border-bottom: 1px solid #2b3a36;
  padding-bottom: 10px;
  text-align: center;
  color: #ffffff;
`
var monokaiHTMLStyle = `
  background-color: #282828
`

//regular styles

var regularIframeStyle = `
  position: absolute;
  width: 78%;
  left: 16.1%;
  top: 0%;
  height: 90%;
  outline: none;
  border-bottom: none;
  border-top: none;
  border-right: none;
  border-left: none;
`
var regularInputStyle = `
  border-radius: 60px;
  position: absolute;
  bottom: 3%;
  left: 18%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #ffffff;
  color: #0000000;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
`
var regularSidebarStyle = `
  background-color: #ffffff;
  height: 100%;
  width: 16%;
  left: 0%;
  top: 0%;
  display: block;
  position: absolute;
  border-right: 2px solid #000000;
`
var regularLogoStyle = `
  border-bottom: 1px solid #000000;
  font-family: arial;
  font-size: 40px;
  text-align: center;
  color: #000000;
`
var regularUsernameStyle = `
  font-family: arial;
  font-size: 20px;
  padding-top: 10px;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
  text-align: center;
  color: #000000;
`
var regularHTMLStyle = `
  background-color: #ffffff
`

//Ruby styles

var rubyIframeStyle = `
  position: absolute;
  width: 78%;
  left: 16.1%;
  top: 0%;
  height: 90%;
  outline: none;
  border-bottom: none;
  border-top: none;
  border-right: none;
  border-left: none;
`
var rubyInputStyle = `
  border-radius: 60px;
  position: absolute;
  bottom: 3%;
  left: 18%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #000000;
  color: #ba1212;
  border-top: 1px solid darkred;
  border-bottom: 1px solid darkred;
  border-left: 1px solid darkred;
  border-right: 1px solid darkred;
`
var rubySidebarStyle = `
  background-color: #000000;
  height: 100%;
  width: 16%;
  left: 0%;
  top: 0%;
  display: block;
  position: absolute;
  border-right: 2px solid darkred;
`
var rubyLogoStyle = `
  border-bottom: 1px solid darkred;
  font-family: arial;
  font-size: 40px;
  text-align: center;
  color: #ba1212;
`
var rubyUsernameStyle = `
  font-family: arial;
  font-size: 20px;
  padding-top: 10px;
  border-bottom: 1px solid darkred;
  padding-bottom: 10px;
  text-align: center;
  color: #ba1212;
`
var rubyHTMLStyle = `
  background-color: #000000
`

//Matrix styles

var matrixIframeStyle = `
  position: absolute;
  width: 78%;
  left: 16.1%;
  top: 0%;
  height: 90%;
  outline: none;
  border-bottom: none;
  border-top: none;
  border-right: none;
  border-left: none;
`
var matrixInputStyle = `
  border-radius: 60px;
  position: absolute;
  bottom: 3%;
  left: 18%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #000000;
  color: green;
  border-top: 1px solid darkgreen;
  border-bottom: 1px solid darkgreen;
  border-left: 1px solid darkgreen;
  border-right: 1px solid darkgreen;
`
var matrixSidebarStyle = `
  background-color: #000000;
  height: 100%;
  width: 16%;
  left: 0%;
  top: 0%;
  display: block;
  position: absolute;
  border-right: 2px solid darkgreen;
`
var matrixLogoStyle = `
  border-bottom: 1px solid darkgreen;
  font-family: arial;
  font-size: 40px;
  text-align: center;
  color: lime;
`
var matrixUsernameStyle = `
  font-family: arial;
  font-size: 20px;
  padding-top: 10px;
  border-bottom: 1px solid darkgreen;
  padding-bottom: 10px;
  text-align: center;
  color: lime;
`
var matrixHTMLStyle = `
  background-color: #000000
`

window.onload = loadtheme()
function loadtheme () {
  var theme = localStorage.getItem('Wechat_Theme')
  if (theme === 'monokai') {
    reloadlog()
    iframe.style = monokaiIframeStyle;
    input.style = monokaiInputStyle;
    sidebar.style = monokaiSidebarStyle;
    logo.style = monokaiLogoStyle;
    username.style = monokaiUsernameStyle;
    main.style = monokaiHTMLStyle;
  }
  else if (theme === 'regular') {
    reloadlog()
    iframe.style = regularIframeStyle;
    input.style = regularInputStyle;
    sidebar.style = regularSidebarStyle;
    logo.style = regularLogoStyle;
    username.style = regularUsernameStyle;
    main.style = regularHTMLStyle;
  }
  else if (theme === 'matrix') {
    reloadlog()
    iframe.style = matrixIframeStyle;
    input.style = matrixInputStyle;
    sidebar.style = matrixSidebarStyle;
    logo.style = matrixLogoStyle;
    username.style = matrixUsernameStyle;
    main.style = matrixHTMLStyle;
  }
  else if (theme === 'ruby') {
    reloadlog()
    iframe.style = rubyIframeStyle;
    input.style = rubyInputStyle;
    sidebar.style = rubySidebarStyle;
    logo.style = rubyLogoStyle;
    username.style = rubyUsernameStyle;
    main.style = rubyHTMLStyle;
  }
}
function monokaiTheme() {
  localStorage.setItem('Wechat_Theme', 'monokai')
  loadtheme()
}
function regularTheme() {
  localStorage.setItem('Wechat_Theme', 'regular')
  loadtheme()
}
function matrixTheme() {
  localStorage.setItem('Wechat_Theme', 'matrix')
  loadtheme()
}
function rubyTheme() {
  localStorage.setItem('Wechat_Theme', 'ruby')
  loadtheme()
}