// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Form submission
function handleSubmit(btn) {
  btn.textContent = "✓ Enquiry Sent! We'll respond within 24 hours.";
  btn.style.background = '#2E1F10';
  btn.style.pointerEvents = 'none';
}

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 30px rgba(26,15,5,0.12)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


document.addEventListener("DOMContentLoaded", function () {

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (nav) {
      if (window.scrollY > 60) {
        nav.style.boxShadow = '0 4px 30px rgba(26,15,5,0.12)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }
  });

});