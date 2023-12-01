function report() {
  var username = document.getElementById('input').value;
  var username2 = localStorage.getItem('username');
  var reason = document.getElementById('input2').value;
  var message = document.getElementById('input3').value;
  var channel = document.getElementById('input4').value;
  window.location.replace('https://wechat-db.h-and-c.co.uk/report.php?user=' + username + '&username=' + username2 + '&reason=' + reason + '&message=' + message + '&channel=' + channel + '')
}