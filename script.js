// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle (persisted)
  const applyTheme = t => document.documentElement.setAttribute('data-theme', t);
  const preferred =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(preferred);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // Simple rotating words in hero
  const words = Array.from(document.querySelectorAll('.rotate b'));
  let i = 0;
  if (words.length) {
    setInterval(() => {
      words[i].classList.remove('active');
      i = (i + 1) % words.length;
      words[i].classList.add('active');
    }, 2200);
  }
});

  // Projects button simple alert
  document.querySelectorAll('a[href="#projects"]').forEach(el => {
    el.addEventListener('click', () => {
      alert('The website to be improved. Project links to be provided!');
    });
  });
  const projectsBtn = document.getElementById('projectsBtn');
  projectsBtn?.addEventListener('click', () => {
    alert('The website to be improved. Project links to be provided!');
  });
});
