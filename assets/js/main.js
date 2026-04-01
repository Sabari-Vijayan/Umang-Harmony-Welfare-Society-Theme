/**
 * main.js — Umang Harmony Theme
 * =============================
 * Handles mobile menu toggle, sticky header, and stats count-up animation.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.classList.toggle('is-active', isOpen);
    });
  }

  // --- Sticky Header Shadow on Scroll ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    });
  }

  // --- Stats Count-Up Animation ---
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
          const targetStr = stat.getAttribute('data-target') || "0";
          // Separate the number (e.g., "1000") and the suffix (e.g., "+")
          const numPart = targetStr.match(/[\d.]+/);
          const suffixPart = targetStr.replace(/[\d.]+/g, '');
          
          if (numPart) {
            const targetNum = parseFloat(numPart[0]);
            const suffix = suffixPart || "";
            const duration = 4000; // Increased to 4 seconds for a slower, smoother count
            const startTime = performance.now();
            const isInt = !numPart[0].includes('.');

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Ease-In-Out (Sine) - Starts slow, speeds up in the middle, and slows down at the end
              const easeInOut = -(Math.cos(Math.PI * progress) - 1) / 2;
              const currentNum = easeInOut * targetNum;
              
              stat.innerText = (isInt ? Math.floor(currentNum) : currentNum.toFixed(1)) + suffix;

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
        // Stop observing once animated
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    statsObserver.observe(statsBar);
  }

});
