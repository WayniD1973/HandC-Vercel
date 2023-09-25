const adminSocket = io('/test/admin');

// Emit and listen for admin-specific events

adminSocket.on('adminResponse', (response) => {
  // Handle admin response
});
adminSocket.on('reload', () => {
	window.location.reload()
})
function reload() {
	adminSocket.emit('broadcastReload')
}