appendData(localStorage.getItem('accessedChannels'))
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("a");
    div.innerHTML = data[i].firstName;
    div.href = "../../?channel=custom&id=" + data[i].firstName;
    mainContainer.appendChild(div);
  }
}