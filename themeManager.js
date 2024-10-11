export class ThemeManager {
  constructor() {
    this.theme = null;
    this.mainElement = document.querySelector('main');
  }

  toggleTheme() {
    this.mainElement.classList.toggle('dark-mode');

    const theme = this.mainElement.classList.contains('dark-mode')
      ? 'dark'
      : 'light';
    localStorage.setItem('theme', theme);
    this.theme = theme;
  }

  loadTheme() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
      this.mainElement.classList.add(
        this.theme === 'dark'
          ? 'dark-mode'
          : this.theme === 'light' && 'light-mode'
      );
    }
  }

  getTheme() {
    return this.theme;
  }
}
