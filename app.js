import { ThemeManager } from './themeManager.js';

const changeThemeButton = document.getElementById('btn-toogle-theme');

const themeManager = new ThemeManager();

changeThemeButton.addEventListener('click', () => {
  themeManager.toggleTheme();
});

themeManager.loadTheme();
