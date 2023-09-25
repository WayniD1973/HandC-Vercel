var soundbutton = document.getElementById('sound-button')
var sound = localStorage.getItem('wechatCallSoundEffectsEnabled')
function sound() {
  if (localStorage.getItem('wechatCallSoundEffectsEnabled') === null || localStorage.getItem('wechatCallSoundEffectsEnabled') === undefined || localStorage.getItem('wechatCallSoundEffectsEnabled') === '') {
    localStorage.setItem('wechatCallSoundEffectsEnabled', 'true')
    soundbutton.innerHTML = 'Disable Sound Effects'
  }
  else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'true') {
    localStorage.setItem('wechatCallSoundEffectsEnabled', 'false')
    soundbutton.innerHTML = 'Enable Sound Effects'
  }
  else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'false') {
    localStorage.setItem('wechatCallSoundEffectsEnabled', 'true')
    soundbutton.innerHTML = 'Disable Sound Effects'
  }
  else {
    localStoarge.setItem('wechatCallSoundEffectsEnabled', 'true')
    soundbutton.innerHTML = 'Disable Sound Effects'
  }
}