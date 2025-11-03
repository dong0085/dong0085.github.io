document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.masthead__menu-item a, .greedy-nav a');
  
  navLinks.forEach(link => {
    // Skip the site title link
    if (link.classList.contains('site-title')) return;
    
    const href = link.getAttribute('href');
    
    // Check if the link matches the current page
    if (currentPath === href || currentPath.startsWith(href + '/')) {
      link.classList.add('active');
    }
  });
});