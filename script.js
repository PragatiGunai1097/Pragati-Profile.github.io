

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) { e.preventDefault(); });
    });


  // ===============================
  // Initialize Lucide
  // ===============================
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ===============================
  // Mobile Menu (MATCHES YOUR CSS)
  // ===============================
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");

      const isOpen = mobileMenu.classList.contains("open");
      if (menuIcon) {
        menuIcon.setAttribute("data-lucide", isOpen ? "x" : "menu");
        lucide.createIcons();
      }
    });
  }

  // ===============================
  // Scroll Progress Bar
  // ===============================
  const scrollProgress = document.getElementById("scroll-progress");

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgress && docHeight > 0) {
      scrollProgress.style.width = (scrollTop / docHeight) * 100 + "%";
    }
  });

  // ===============================
  // Scroll To Top (MATCHES CSS)
  // ===============================
  const scrollBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", function () {
    if (!scrollBtn) return;

    if (window.scrollY > 500) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===============================
  // Reveal Animations
  // ===============================
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ===============================
  // Title Line Animation
  // ===============================
  const titleLines = document.querySelectorAll(".title-line");

  const lineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  titleLines.forEach(function (line) {
    lineObserver.observe(line);
  });

  // ===============================
  // Skill Bars
  // ===============================
  const skillsContainer = document.getElementById("skills-container");

  if (skillsContainer) {
    const skillObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".skill-bar-fill")
              .forEach(function (bar) {
                bar.classList.add("animated");
              });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    skillObserver.observe(skillsContainer);
  }

  // ===============================
  // Counter Animation
  // ===============================
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-target"));
          let current = 0;
          const increment = target / 40;

          const interval = setInterval(function () {
            current += increment;

            if (current >= target) {
              counter.textContent = target;
              clearInterval(interval);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 40);

          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });

  // ===============================
  // Typewriter
  // ===============================
  const typewriterEl = document.getElementById("typewriter");

  if (typewriterEl) {
    const words = [
      "Full Stack Developer",
      "UI/UX Developer",
      "Wordpress Developer",
      "Software Engineer",
      "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(typeWriter, isDeleting ? 60 : 100);
    }

    setTimeout(typeWriter, 1000);
  }


const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const subject = form.querySelector('select').value;
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert("Please fill all required fields.");
      return;
    }

    const mailtoLink =
      `mailto:pragatigunai97@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        message
      )}`;

    window.location.href = mailtoLink;
  });


});

window.UIUtils = { toggleElement: (selector) => { const el = document.querySelector(selector); if (el) el.style.display = el.style.display === 'none' ? '' : 'none'; } };


