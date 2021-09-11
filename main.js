const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav');

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-nav');
});
