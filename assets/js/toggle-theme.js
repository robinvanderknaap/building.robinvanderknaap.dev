(function() {
  const setTheme = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Define windows media event listener separately, so we can remove it when the toggle is being used
  const windowsMediaEventListener = (event) => {
    setTheme(event.matches);
  }

  // Check if the theme is already set
  if(localStorage.getItem('theme')) {
    setTheme(localStorage.getItem('theme') === 'dark');
  } else {
    // When theme is not already set, check the user's preference
    // Check if the browser supports matchMedia first
    if (window.matchMedia) {
      // Set the theme based on the user's preference
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
      // Add event listener to the windows media, when OS theme changes, the website theme will change
      // We will remove this event listener when the theme is changed using the toggle
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', windowsMediaEventListener);
    }
  }

  const themeToggle = document.querySelector('[data-theme-toggle]');

  themeToggle.addEventListener('click', function() {
    if(document.documentElement.classList.contains('dark')) {
      setTheme(false);
      localStorage.theme = 'light';
    } else {
      setTheme(true);
      localStorage.theme = 'dark';
    }
    // Remove the event listener when the theme is changed using the toggle
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', windowsMediaEventListener);
  });
})();
