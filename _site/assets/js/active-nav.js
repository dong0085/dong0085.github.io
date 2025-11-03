document.addEventListener('DOMContentLoaded', function() {
  const currentPath = normalizePath(window.location.pathname);

  // Get all navigation links (primary masthead and Greedy Navigation fallback)
  const navLinks = document.querySelectorAll('.masthead__menu-item a, .greedy-nav a');

  navLinks.forEach(link => {
    if (link.classList.contains('site-title')) return;

    const href = link.getAttribute('href');
    if (!href) return;

    const targetPath = normalizePath(resolvePath(href));
    if (!targetPath) return;

    let isActive = currentPath === targetPath || currentPath.startsWith(targetPath + '/');

    // Special case: activate Blog for dated post URLs like /2025/11/02/hello-world.html
    if (targetPath === '/blog' && /^\/\d{4}\/\d{2}\/\d{2}\//.test(window.location.pathname)) {
      isActive = true;
    }

    if (isActive) {
      link.classList.add('active');
    }
  });
});

function resolvePath(href) {
  try {
    return new URL(href, window.location.origin).pathname;
  } catch (_e) {
    return null;
  }
}

function normalizePath(path) {
  if (!path) return null;

  let normalized = path.split('#')[0].split('?')[0];
  if (!normalized.startsWith('/')) normalized = '/' + normalized;
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}
