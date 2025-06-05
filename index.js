const allBtn = document.querySelector('.Active');
const activeBtn = document.querySelectorAll('#bud')[0];
const inactiveBtn = document.querySelectorAll('#bud')[1];
const buttons = [allBtn, activeBtn, inactiveBtn];

const extensionCards = document.querySelectorAll('.para');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
}

// On load
if (localStorage.getItem('darkmode') === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

// Button click to toggle theme
themeSwitch.addEventListener("click", () => {
  const darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Filter functions
function filterExtensions(condition) {
  extensionCards.forEach(card => {
    const checkbox = card.querySelector('input[type="checkbox"]');
    card.style.display = condition(checkbox) ? 'block' : 'none';
  });
}

function setActiveButton(selectedButton) {
  buttons.forEach(btn => btn.classList.remove('selected'));
  selectedButton.classList.add('selected');
}

// Button event listeners
allBtn.addEventListener('click', () => {
  filterExtensions(() => true);
  setActiveButton(allBtn);
});

activeBtn.addEventListener('click', () => {
  filterExtensions(checkbox => checkbox.checked);
  setActiveButton(activeBtn);
});

inactiveBtn.addEventListener('click', () => {
  filterExtensions(checkbox => !checkbox.checked);
  setActiveButton(inactiveBtn);
});
setActiveButton(allBtn);
