const greeting = new Notification('Wechat',{
  body: 'Test'
});
function pushN() {
	greeting.push()
}
setInterval(pushN, 8000)