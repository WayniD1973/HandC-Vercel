// select the target node
var target = document.getElementsByTagName('body')[0];
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    recordMutation(mutation)
  });    
});

fetch("https://ipinfo.io", {
	headers: {
		Accept: "application/json"
	}
}).then(function(response) {
	const ip = response.ip;
})

function recordMutation(mutation) {
	var time = Date()
	// fetch('https://h-and-c.co.uk/', {
	// 	method: "POST",
	// 	headers: {
	// 		authorization: accessCookie('connectionToken'),
	// 		"Content-Type": "application/json"
	// 	},
	// 	body: {
	// 		mutation: mutation,
	// 		document: document,
	// 		time: time
	// 	}
	// });
}

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true, subtree: true, };
 
// pass in the target node, as well as the observer options
observer.observe(target, config)