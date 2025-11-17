const toggleBtn = document.querySelector('.toggle-icon');
const toggleBtnIcon = document.querySelector('.toggle-icon i');
const dropdownMenu = document.querySelector('.dropdown');

toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';
}  
