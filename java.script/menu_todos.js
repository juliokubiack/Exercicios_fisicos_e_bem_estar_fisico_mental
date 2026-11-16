var header = document.getElementById(`header`);
var navegation_header = document.getElementById(`navegation_header`);
var content = document.getElementById(`content`);
var menuButton = header.querySelector(`.menu-btn`);
var closeButton = document.getElementById(`fecharMenu`);
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    navegation_header.classList.toggle(`aberto`, showSidebar);
    content.style.filter = showSidebar ? `blur(2px)` : ``;
    menuButton.setAttribute(`aria-expanded`, showSidebar);
    document.body.classList.toggle(`no-scroll`, showSidebar);
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

menuButton.addEventListener(`click`, toggleSidebar);
closeButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    closeSidebar();
});

document.addEventListener(`click`, function (event) {
    if (
        showSidebar &&
        !navegation_header.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        closeSidebar();
    }
});

window.addEventListener(`resize`, function () {
    if (window.innerWidth > 788 && showSidebar) {
        toggleSidebar();
    }
});
