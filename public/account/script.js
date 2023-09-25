const profilePictureElement = document.getElementById("profile-pic");
const fileUpload = document.getElementById("file-upload");
const usernameField = document.getElementById("username");
const displayNameField = document.getElementById("display-name");
const bioField = document.getElementById("bio");
var profileSaveChangesButton = document.getElementById('saveProfileChanges');
var username = ""
var bio = ""
var profilePicture = ""
var banned = ""
var suspended = ""
var id = ""
var banReason = ""
var suspensionEnd = ""
var currentDisplayNameValue = displayNameField.value;
console.log("Bearer " + accessCookie("connectionToken") + "");

// Grab username from URL
const urlPath = window.location.pathname;
window.onload = function () {
  profilePictureElement.src = profilePicture;
};

// Set username field value

// Grab display name from file
// Handle profile picture change
profilePictureElement.addEventListener("click", (event) => {
  fileUpload.click();
});

fileUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file.type.includes("image/")) {
    const url = URL.createObjectURL(file);
    profilePictureElement.src = url;
  } else {
    alert("Please select an image file.");
  }
});

// Handle display name change
displayNameField.addEventListener("blur", (event) => {
  const newName = displayNameField.value.trim();

  // Check if name is not empty or the same as current name
  if (newName !== "" && newName !== displayNameField.value) {
    displayNameField.value = newName;
    // Save display name to file
    // fetch("https://login.h-and-c.co.uk/assets/profile/@"+username+"/displayName.txt", {
    //   method: 'PUT',
    //   body: newName
    // })
    // .then(response => response.text())
    // .then(text => console.log(text))
    // .catch(error => console.log(error));
  }
});

// Handle scroll to top
const scrollTopLink = document.querySelector(".scroll-top");
scrollTopLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
var dropdownActive = false;
dropdown.addEventListener("click", () => {
  if (dropdownActive == true) {
    dropdownActive = false;
    dropdownContent.style.display = "none";
  } else if (dropdownActive == false) {
    dropdownActive = true;
    dropdownContent.style.display = "block";
  } else {
    dropdownActive = false;
    dropdownContent.style.display = "none";
  }
});
fetch("https://login-finished.wumpus-dev.repl.co/getUsername", {
  method: "GET",
  headers: {
    Accept: "application/json",
    authorization: "Bearer " + accessCookie("connectionToken") + "",
  },
})
  .then((response) => response.json())
  .then((response) => {
    username = response["username"].split('@')[1];
    usernameField.value = username;
		countCharacters('username', 'usernameCurrentAmountOfCharacters')
  });
setTimeout(function() {
  fetch("https://login-finished.wumpus-dev.repl.co/users/@" + username + "", {
    method: "GET",
    headers: {
      Accept: "application/json",
      authorization: "Bearer " + accessCookie("connectionToken") + "",
    },
  })
    .then((response) => response.json())
    .then((response) => {
			bio = response["bio"]
			profilePicture = response["pfp_url"]
			const isAdmin = response["admin"]
			banned = response["banned"]
			suspended = response["suspended"]
			id = response["id"]
			const isBot = response["bot"]
			banReason = response["ban_reason"]
			suspensionEnd = response["suspension_end"]
			bioField.value = bio;
    });
}, 2000);
var currentDisplayNameValue = displayNameField.value;
usernameField.addEventListener('keyup', () => {
	if (username == usernameField.value) {
		profileSaveChangesButton.disabled = true;
	}
	else {
		profileSaveChangesButton.disabled = false;
	}
	countCharacters('username', 'usernameCurrentAmountOfCharacters')
});
usernameField.addEventListener('change', () => {
	countCharacters('username', 'usernameCurrentAmountOfCharacters')
})
bioField.addEventListener('keyup', () => {
	if (bio == bioField.value) {
		profileSaveChangesButton.disabled = true;
	}
	else {
		profileSaveChangesButton.disabled = false;
	}
	countCharacters('bio', 'bioCurrentAmountOfCharacters')
});
bioField.addEventListener('change', () => {
	countCharacters('bio', 'bioCurrentAmountOfCharacters')
})
function countCharacters(element, counter) {
	console.log("Counter")
	let characters = document.getElementById(element).value.length
	document.getElementById(counter).innerText = characters
}
