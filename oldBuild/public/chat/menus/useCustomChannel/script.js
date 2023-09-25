if (localStorage.getItem('hammychatCustomChannelUse') != null || localStorage.getItem('hammychatCustomChannelUse') != undefined) {
  var id = localStorage.getItem('hammychatCustomChannelUse')
  localStorage.removeItem('hammychatCustomChannelUse')
  window.location.replace('../../?channel=custom&id=' + id)
}
function submit() {
  localStorage.setItem('hammychatCustomChannelUse', document.getElementById('channelID').value)
  window.location.reload()
}