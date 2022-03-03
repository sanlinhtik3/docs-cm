const sidebarControl = document.querySelector(".sidebar-control");
const sidebar = document.querySelector(".sidebar");
const sBackdrop = document.querySelector(".s-backdrop");
const sidebarClose = document.querySelector(".sidebar-close");

sidebarControl.addEventListener('click', _ => {
    sidebar.classList.toggle('show');
    sBackdrop.classList.toggle('show');
    sBackdrop.classList.add('offcanvas-backdrop');
});

sBackdrop.addEventListener('click', _ => {
    sidebar.classList.remove('show');
    sBackdrop.classList.remove('show');
});

sidebarClose.addEventListener('click', _ => {
    sidebar.classList.remove('show');
    sBackdrop.classList.remove('show');
});