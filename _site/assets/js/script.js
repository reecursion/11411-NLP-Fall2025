/**
 * Main JavaScript file for NLP Course Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Highlight current date in schedule
    const today = new Date();
    const scheduleDates = document.querySelectorAll('.schedule-date');
    
    scheduleDates.forEach(date => {
      const dateText = date.textContent.trim();
      const dateObj = new Date(dateText);
      
      if (dateObj.toDateString() === today.toDateString()) {
        date.closest('.schedule-item').classList.add('current-date');
      }
    });
    
    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach(block => {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      
      const pre = block.parentNode;
      pre.style.position = 'relative';
      pre.insertBefore(button, pre.firstChild);
      
      button.addEventListener('click', () => {
        const code = block.textContent;
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        });
      });
    });
  });