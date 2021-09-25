// Variables for various DOM elements
const harmbar = document.getElementById("harmburger");
const menuItems = document.getElementById("menuitems")
const toggleSearch = document.getElementById('toggle-search')
const searchInput = document.getElementById('search-input')
const header = document.getElementById('header')

// Toggle and manage mobile menu with harmbugger SVG
harmbar.addEventListener("click", () => {
    if (menuItems.style.display === "" || menuItems.style.display === "none") {
        menuItems.style.display = "block"
    } else {
        menuItems.style.display = "none"
    }

})
// Toggle search input item
toggleSearch.addEventListener("click", () => {
    searchInput.classList.toggle('fade');
    // if (searchInput.style.display === "" || searchInput.style.display === null || searchInput.style.display === "none") {
    //     searchInput.classList.toggle('fade');
    // } else {
    //     searchInput.classList.toggle('fade');
    // }
})

// Manage slideshow on header div
if (slideShowOn) {
    var ii = 1;
    setInterval(() => {
        header.style.backgroundImage = "url(" + headerBG[ii]  + ")"
        ii++
        if (ii>2) ii = 0
    }, slideDuration);
} else {
    header.style.backgroundImage = "url(" + headerBGDef  + ")"
}
