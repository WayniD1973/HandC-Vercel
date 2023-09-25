function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
function defaultName() {
  window.location.replace('https://wechat-db.h-and-c.co.uk/createChannel.php?id=' + uuidv4())
}
function customName() {
  window.location.replace('https://wechat-db.h-and-c.co.uk/createChannelNumber.php')
}