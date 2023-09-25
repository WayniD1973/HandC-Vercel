const fetch = require("@replit/node-fetch");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("[H&C Server #1] [Request] Request At ", Date.now());
  next();
});

var options = {};
router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  fetch("https://login-finished.wumpus-dev.repl.co/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) =>
      res.status(200).send(response)
    );
});

router.post("/signup", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  fetch("https://login-finished.wumpus-dev.repl.co/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  setTimeout(function () {
    fetch("https://login-finished.wumpus-dev.repl.co/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((response) =>
        res.status(200).send(response)
      );
  }, 1000);
});

router.post('/changeDisplayName', (req, res) => {
	fetch("https://login-finished.wumpus-dev.repl.co/changeDisplayName", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: req.header('authorization'),
		},
		body: JSON.stringify({
			display_name: req.body.display_name
		})
	})
})

router.get("/buildScripts/sadvcjsvfdjaigf9skjfsavnfahv", (req, res) => {
	const child = spawn('bash', ['build.sh'], { shell: true });
	child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
	});
 
	child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
	});
 
	child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
	});
	res.send('Success')
})

module.exports = router;
