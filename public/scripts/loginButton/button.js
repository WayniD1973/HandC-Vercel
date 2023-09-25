const buttons = document.querySelectorAll('button.loginButton');
buttons.forEach(addButtonEventListeners)
function addButtonEventListeners(item) {
  item.addEventListener('click', (e) => {
		let newWindow = open('https://h-and-c.co.uk/api/authorizeApplication/0?read=true&redirect=https://h-and-c.co.uk/', 'Authorize application?', 'width=600,height=700');
	})
}