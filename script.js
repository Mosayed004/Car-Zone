
// script.js content should be in a separate file, but included here for clarity
// Example: highlight active nav link
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--international-orange-engineering)';
  }
});
