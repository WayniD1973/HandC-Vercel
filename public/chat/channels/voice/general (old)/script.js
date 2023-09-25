try {
  var APP_ID = "b06802b73d3c479586deb42cb474016d"
  var TOKEN = "006b06802b73d3c479586deb42cb474016dIACKfqMGcHtVYjHdr4JOet06Hk0dmAhI2GxZQlISc4JX09YPlAEAAAAAIgB4cwEw2RHYYwQAAQBYinGfAgBYinGfAwBYinGfBABYinGf"
  var CHANNEL = "General"

  var joinaudio = new Audio("https://cdn.harleydyson.repl.co/assets/audio/mp3/wechat/call/Someone Joins.mp3")
  var tleaveaudio = new Audio("https://cdn.harleydyson.repl.co/assets/audio/mp3/wechat/call/They Leave.mp3")
  var yleaveaudio = new Audio("https://cdn.harleydyson.repl.co/assets/audio/mp3/wechat/call/You Leave.mp3")

  var client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
  camerabutton = document.getElementById('camera-btn')

  var localTracks = []
  var remoteUsers = {}


  let joinAndDisplayLocalStream = async () => {

    client.on('user-published', handleUserJoined)

    client.on('user-left', handleUserLeft)

    let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                        <div class="video-player" id="user-${UID}"></div>
                  </div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    document.getElementById('stream-wrapper').style.display = "block";

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
  }

  async function joinstream() {
    await joinAndDisplayLocalStream()
    document.getElementById('join-btn').style.display = 'none'
    document.getElementById('stream-controls').style.display = 'flex'
    if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'true') {
      joinaudio.play()
    }
    else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'false') {
      console.log('[INFO] Attempted to play "joinaudio" but sound effects are disabled! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
    else {
      console.log('[INFO] Attempted to play "joinaudio" but the sound effects setting is not recognized! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
  }

  let handleUserJoined = async (user, mediaType) => {
    remoteUsers[user.uid] = user
    await client.subscribe(user, mediaType)

    if (mediaType === 'video') {
      let player = document.getElementById(`user-container-${user.uid}`)
      if (player != null) {
        player.remove()
      }

      player = `<div class="video-container" id="user-container-${user.uid}">
                        <div class="video-player" id="user-${user.uid}"></div> 
                 </div>`
      document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

      user.videoTrack.play(`user-${user.uid}`)
    }

    if (mediaType === 'audio') {
      user.audioTrack.play()
    }
    if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'true') {
      joinaudio.play()
    }
    else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'false') {
      console.log('[INFO] Attempted to play "joinaudio" but sound effects are disabled! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
    else {
      console.log('[INFO] Attempted to play "joinaudio" but the sound effects setting is not recognized! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
  }

  let handleUserLeft = async (user) => {
    delete remoteUsers[user.uid]
    document.getElementById(`user-container-${user.uid}`).remove()
    if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'true') {
      tleaveaudio.play()
    }
    else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'false') {
      console.log('[INFO] Attempted to play "tleaveaudio" but sound effects are disabled! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
    else {
      console.log('[INFO] Attempted to play "tleaveaudio" but the sound effects setting is not recognized! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
  }

  let leaveAndRemoveLocalStream = async () => {
    for (let i = 0; localTracks.length > i; i++) {
      localTracks[i].stop()
      localTracks[i].close()
    }

    await client.leave()
    document.getElementById('join-btn').style.display = 'block'
    document.getElementById('stream-controls').style.display = 'none'
    document.getElementById('video-streams').innerHTML = ''
    if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'true') {
      yleaveaudio.play()
    }
    else if (localStorage.getItem('wechatCallSoundEffectsEnabled') === 'false') {
      console.log('[INFO] Attempted to play "yleaveaudio" but sound effects are disabled! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
    else {
      console.log('[INFO] Attempted to play "yleaveaudio" but the sound effects setting is not recognized! See https://handc.harleydyson.repl.co/wechat/channels/voice/general/settings to change this setting.')
    }
    window.location.replace('../../../')
  }

  async function leaveVoice2() {
    const response = await fetch('https://wechat-db.harleydyson.repl.co/sysWrite.php?username=' + username + '&message=has left the General Voice Chat.', {
      method: 'POST',
      headers: {
      }
    });
    response.json().then(data => {
      console.log(data);
    });
  }


  function leaveVoice() {
    leaveVoice2()
    leaveAndRemoveLocalStream()
  }

  let toggleMic = async (e) => {
    if (localTracks[0].muted) {
      await localTracks[0].setMuted(false)
      e.target.innerText = 'Mic on'
      e.target.style.backgroundColor = 'green'
    } else {
      await localTracks[0].setMuted(true)
      e.target.innerText = 'Mic off'
      e.target.style.backgroundColor = '#EE4B2B'
    }
  }

  let toggleCamera = async (e) => {
    if (localTracks[1].muted) {
      await localTracks[1].setMuted(false)
      e.target.innerText = 'Camera on'
      e.target.style.backgroundColor = 'green'
    } else {
      await localTracks[1].setMuted(true)
      e.target.innerText = 'Camera off'
      e.target.style.backgroundColor = '#EE4B2B'
    }
  }
  joinstream()
  if (localStorage.getItem('cameraEnabledInVoice') === 'True') {
    console.log('Camera is enabled')
  }
  else if (localStorage.getItem('cameraEnabledInVoice') === 'False') {
    console.log('Camera is disabled')
    toggleCamera(camerabutton)
  }
  else {
    window.location.replace('../../../menus/selectVideoOnOrOff/')
  }
  function popout() {
    let newWindow = open('../../../popout/', 'Popout', 'width=600,height=700')
    localStorage.setItem('wechatPopoutWindowOpen', true)
    console.log('[INFO] Wechat Popout Window Opened')
    newWindow.focus();
  }
  function settings() {
    let newWindow = open('./settings/', 'Settings', 'width=600,height=700')
    localStorage.setItem('wechatPopoutWindowOpen', true)
    newWindow.focus();
  }
  document.getElementById('mic-btn').addEventListener('click', toggleMic)
  document.getElementById('camera-btn').addEventListener('click', toggleCamera)
  document.getElementById('popout-btn').addEventListener('click', popout)
}
catch (err) {
  console.clear()
  console.log(err)
  askonerror()
}
function askonerror() {
  document.getElementById('call').innerHTML = "";
  document.getElementById('error').style.display = "block";
  document.getElementById('error').style.color = "white";
}