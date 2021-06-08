window.onload = () => {
  document.getElementById("input_search").focus();

  document.getElementById("clock").innerHTML = getTime();
  document.getElementById("message").innerText = defineMessage();

  // Set clock interval to tick clock
  setInterval(() => {
    document.getElementById("clock").innerHTML = getTime();
  }, 30000);

  getService();
  getTheme();
};

function getService() {
  console.log('hi')
  let search_saved = localStorage.getItem('search-service');
  document.getElementById('search_select').value = search_saved;

  console.log(search_saved)
}

function getTheme() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
}
