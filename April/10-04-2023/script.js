const form = document.querySelector('form');
const nameInput = document.getElementById('Name');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior

  const nameValue = nameInput.value;
  const passwordValue = passwordInput.value;

  console.log('Name:', nameValue);
  console.log('Password:', passwordValue);

  // You can perform other actions with these values here, such as sending them to a server via AJAX
});
