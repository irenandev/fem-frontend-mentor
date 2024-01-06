const accordion = document.querySelectorAll('.card-accordion');

for(let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accordion[i].classList.toggle('active');

    let button = accordion[i].querySelector('.button');
    let expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
  });
}