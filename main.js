const btn = document.querySelector('.btn-dark');
const theme = document.querySelector('#theme-link');

btn.addEventListener('click', function() {
    if (theme.getAttribute('href') == 'style.css') {
        theme.href = 'dark-theme.css';
    } else {
        theme.href = 'style.css'
    }
});