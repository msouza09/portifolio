const toggleThemeBtn = document.getElementById('toggle-theme-btn');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = toggleThemeBtn.querySelector('i');
    if (document.body.classList.contains('dark-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
})