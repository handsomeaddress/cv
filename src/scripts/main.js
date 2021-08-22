const currentDate = () => {
  const date = new Date();
  return date.getFullYear();
};

document.addEventListener('DOMContentLoaded', () => {
  const currentDateSpan = document.querySelector('#current-date');
  currentDateSpan.innerHTML = currentDate();
});