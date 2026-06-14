/* ============================================
   Main JavaScript - Portfolio Functionality
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // DOM References
  // ============================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section[id]');
  const fadeElements = document.querySelectorAll('.fade-in');

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ============================================
  // Navbar Background on Scroll
  // ============================================
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ============================================
  // Active Nav Link Highlighting
  // ============================================
  function updateActiveNavLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  window.addEventListener('load', updateActiveNavLink);

  // ============================================
  // Smooth Scroll Animations (Intersection Observer)
  // ============================================
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Delay init slightly to allow page render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }

  // ============================================
  // Keyboard Accessibility - Close menu on Escape
  // ============================================
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // See More / See Less toggle for project descriptions
  // ============================================
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('see-more-btn')) {
      const btn = e.target;
      const desc = btn.previousElementSibling;
      if (desc && desc.classList.contains('project-desc')) {
        desc.classList.toggle('expanded');
        btn.textContent = desc.classList.contains('expanded') ? 'See less' : 'See more';
      }
    }
  });

  // ============================================
  // Smooth Scroll for anchor links (fallback)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
