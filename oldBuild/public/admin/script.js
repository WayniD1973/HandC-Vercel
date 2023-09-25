// Selecting the necessary elements
const userListSection = document.querySelector('#tbody');
const banUserSection = document.querySelector('.ban-user form');
const suspendUserSection = document.querySelector('.suspend-user form');

// Adding event listener to the ban user form submit button
banUserSection.addEventListener('submit', (event) => {
  event.preventDefault();  // To prevent the default form submission
  const userId = document.querySelector('#user-id').value;
  console.log(`User with ID ${userId} has been banned!`);
});

// Adding event listener to the suspend user form submit button
suspendUserSection.addEventListener('submit', (event) => {
  event.preventDefault();  // To prevent the default form submission
  const userId = document.querySelector('#user-id').value;
  console.log(`User with ID ${userId} has been suspended!`);
});

// Fetching user data from the server
fetch('https://login-finished.wumpus-dev.repl.co/users/@Wumpus')
  .then(response => response.json())
  .then(response => {
    // Creating the HTML for each user
    const usersHTML = `
      <tr>
        <td>` + response["id"] + `</td>
        <td>${response.username}</td>
        <td>${response.online}</td>
        <td>
          <button onclick="banUser(${response.id})">Ban</button>
          <button onclick="suspendUser(${response.id})">Suspend</button>
        </td>
      </tr>
    `
    
    // Displaying the user data in the user list section
    userListSection.innerHTML = usersHTML;
  })
  .catch(error => console.error(error));

// Function to ban a user
function banUser(userId) {
  console.log(`User with ID ${userId} has been banned!`);
}

// Function to suspend a user
function suspendUser(userId) {
  console.log(`User with ID ${userId} has been suspended!`);
}
