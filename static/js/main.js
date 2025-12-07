const toggleButtons = document.querySelectorAll('.icon-button');


toggleButtons.forEach(button => {
  button.addEventListener('click', () => {

    const section = button.closest('.expandable-section');


    section.classList.toggle('open');


    const iconClose = button.querySelector('.icon-close');
    const iconAdd = button.querySelector('.icon-add');

    if (section.classList.contains('open')) {

      iconClose.style.display = 'block';
      iconAdd.style.display = 'none';
    } else {

      iconClose.style.display = 'none';
      iconAdd.style.display = 'block';
    }
  });
});





const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');


menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

