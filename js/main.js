const $navLabel = document.querySelector('.js-nav-label');
const $headerNav = document.querySelector('.js-header-nav');

$navLabel.addEventListener('click', () => {
    $headerNav.classList.toggle('header__nav--expanded');
});