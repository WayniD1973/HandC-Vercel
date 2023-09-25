if (window.location.search !== '' && window.location.search !== null) {
	const cookieName = window.location.search.split('=')[1].split('&')[0]
	const cookieValue = window.location.search.split('=')[2]
	createCookie(cookieName, cookieValue, 31)
	// window.location.replace('/')
}