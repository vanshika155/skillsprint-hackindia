const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

const signupForm = document.querySelector('#signup-form');
const formMessage = document.querySelector('#form-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!signupForm.reportValidity()) return;

  const name = new FormData(signupForm).get('name').trim();
  formMessage.textContent = `Thanks, ${name}! Your demo sign-up is complete.`;
  signupForm.reset();
});
