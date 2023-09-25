//yes i did have to make a whole new file for themes lol
//Elements
var iframe = document.getElementById('logiframe')
var input = document.getElementById('chatinput')
var main = document.getElementById('main')
//Monokai Styles

var monokaiIframeStyle = `
  position: absolute;
  width: 97%;
  left: 0%;
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
  left: 0%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #282828;
  color: #ffffff;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  margin-left: 1%;
`
var monokaiHTMLStyle = `
  background-color: #282828
`

//regular styles

var regularIframeStyle = `
  position: absolute;
  width: 97%;
  left: 0%;
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
  left: 0%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #ffffff;
  color: #0000000;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  margin-left: 1%;
`
var regularHTMLStyle = `
  background-color: #ffffff
`

//Ruby styles

var rubyIframeStyle = `
  position: absolute;
  width: 97%;
  left: 0%;
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
  left: 0%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #000000;
  color: #ba1212;
  border-top: 1px solid darkred;
  border-bottom: 1px solid darkred;
  border-left: 1px solid darkred;
  border-right: 1px solid darkred;
  margin-left: 1%;
`
var rubyHTMLStyle = `
  background-color: #000000
`

//Matrix styles

var matrixIframeStyle = `
  position: absolute;
  width: 97%;
  left: 0%;
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
  left: 0%;
  right: 24%;
  width: 70%;
  height: 4%;
  background-color: #000000;
  color: green;
  border-top: 1px solid darkgreen;
  border-bottom: 1px solid darkgreen;
  border-left: 1px solid darkgreen;
  border-right: 1px solid darkgreen;
  margin-left: 1%;
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
    main.style = monokaiHTMLStyle;
  }
  else if (theme === 'regular') {
    reloadlog()
    iframe.style = regularIframeStyle;
    input.style = regularInputStyle;
    main.style = regularHTMLStyle;
  }
  else if (theme === 'matrix') {
    reloadlog()
    iframe.style = matrixIframeStyle;
    input.style = matrixInputStyle;
    main.style = matrixHTMLStyle;
  }
  else if (theme === 'ruby') {
    reloadlog()
    iframe.style = rubyIframeStyle;
    input.style = rubyInputStyle;
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