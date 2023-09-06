const searchContainer = document.querySelector('.container');
const magnifier = document.querySelector('.mag');
const microphone = document.querySelector('.mic');

magnifier.addEventListener('click', () => {
  searchContainer.classList.toggle('active')
  microphone.classList.toggle('hidden')
});