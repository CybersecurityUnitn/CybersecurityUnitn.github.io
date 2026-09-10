(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const label = button?.querySelector('.theme-toggle-label');
  const icon = button?.querySelector('.theme-toggle-icon');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const currentTheme = () => root.dataset.theme || (prefersDark.matches ? 'dark' : 'light');
  const updateButton = () => {
    const isDark = currentTheme() === 'dark';
    button?.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
    button?.setAttribute('aria-pressed', String(isDark));
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (themeColor) themeColor.content = isDark ? '#161a18' : '#f8f8f5';
  };

  updateButton();
  button?.addEventListener('click', () => {
    const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    try { localStorage.setItem('theme', nextTheme); } catch (error) {}
    updateButton();
  });

  prefersDark.addEventListener('change', () => {
    if (!root.dataset.theme) updateButton();
  });
})();
