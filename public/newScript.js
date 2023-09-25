var sidebarHidden = true;
var clickEvent = new Event('click');
function showSearch() {
	document.querySelector('.navItems-left').style.display = "none";
	document.querySelector('.navItems-right').style.display = "none";
	document.querySelector('.searchBox').style.display = "flex";
}
function hideSearch() {
	document.querySelector('.navItems-left').style.display = "flex";
	document.querySelector('.navItems-right').style.display = "flex";
	document.querySelector('.searchBox').style.display = "none";
}
document.querySelector('.searchBoxInput').addEventListener('keyup', () => {
	if (
		document.querySelector('.searchBoxInput').value == ""
	) {
		document.querySelector('.searchBoxButton').innerText = "Cancel"
	}
	else {
		document.querySelector('.searchBoxButton').innerText = "Search"
	}
})
document.querySelector('.navItem-search').addEventListener('click', () => {
	showSearch();
})
document.querySelector('.searchBoxButton').addEventListener('click', () => {
	hideSearch();
})
function showSidebar() {
	document.querySelector('.sidebar').classList.add('openSidebar');
	sidebarHidden = false;
}
function hideSidebar() {
	document.querySelector('.sidebar').classList.remove('openSidebar');
	sidebarHidden = true;
}
document.querySelector('.navbarTwo hc-menuButton svg').addEventListener('click', () => {
	if (sidebarHidden == true) {
		showSidebar();
	}
	else {
		hideSidebar();
	}
});
var documentHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

document.getElementById('sidebar').style.minHeight = documentHeight-54 + 'px';
document.getElementById('sidebar').style.maxHeight = documentHeight-54 + 'px';

document.querySelector('body').onclick = function(e) {
    if(e.target != document.querySelector('hc-sidebar')) {
        if (sidebarHidden == true) {
				}
				else {
					document.querySelector('.navbarTwo hc-menuButton svg').dispatchEvent(clickEvent)
				}
		}
}