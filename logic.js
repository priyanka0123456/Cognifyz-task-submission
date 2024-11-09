const blockContent = document.querySelector(".sm-block");
const hamburger = document.querySelector("#dash");

function toggleMenu() {
    const isMenuVisible = blockContent.style.display === 'block';
    const isSmallScreen = window.innerWidth <= 600;

    if (isSmallScreen) {
        blockContent.style.display = isMenuVisible ? '' : 'block';
        hamburger.classList.toggle("fa-bars", isMenuVisible);
        hamburger.classList.toggle("fa-close", !isMenuVisible);
    }
}

hamburger.addEventListener('click', toggleMenu);
