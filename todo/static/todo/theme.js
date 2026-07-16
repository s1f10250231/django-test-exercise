(function () {
  const storageKey = 'todo-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);

    document.querySelectorAll('.theme-toggle').forEach((button) => {
      const icon = button.querySelector('.theme-toggle-icon');
      const label = button.querySelector('.theme-toggle-label');
      if (icon) {
        icon.textContent = theme === 'light' ? '☀️' : '🌙';
      }
      if (label) {
        label.textContent = theme === 'light' ? 'ダークモードに切り替える' : 'ライトモードに切り替える';
      }
      button.setAttribute('aria-pressed', String(theme === 'light'));
    });
  }

  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());

    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
      });
    });
  });
})();
