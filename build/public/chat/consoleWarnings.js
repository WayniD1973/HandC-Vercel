consoleWarning()
function consoleWarning() {
  console.clear()
  console.log('%cHOLD RIGHT THERE!', 'color: red; font-size: 100px; outline: black;')
  console.log('%cDo NOT paste ANYTHING that ANYONE has told you to paste here! There is a 101% chance that you are pasting something malicious!', 'color: lightblue; font-size: 40px;')
  console.log('%cScripts pasted here can do almost anything to your device! They are very powerful...', 'color: lightblue; font-size: 30px;')
  console.log("%cIf you are not an IT EXPERT, Please safely close this window.", 'color: lightblue; font-size: 30px;')
  console.log('%cStay safe and have a good day!', 'color: lightblue; font-size: 30px;')
  console.log('%c:)', 'color: lightblue; font-size: 30px;')
}
setInterval(consoleWarning, 4000)