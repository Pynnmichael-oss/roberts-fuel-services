/**
 * ============================================================
 *  G&D DYNAMIC SERVICES — SHARED UI BUILDER
 * ============================================================
 *  Reads SITE_CONFIG (defined in config.js) and injects:
 *    - Sticky navigation
 *    - 24/7 availability bar
 *    - Footer
 *  Call initSite() at the bottom of each page's <body>.
 *  Also exposes helpers: initMobileMenu(), setActiveNav()
 * ============================================================
 */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     INJECT: 24/7 Availability Bar
     ---------------------------------------------------------- */
  function buildAvailBar() {
    const cfg = window.SITE_CONFIG;
    const el = document.getElementById("avail-bar");
    if (!el) return;

    el.innerHTML = `
      <div class="avail-bar__inner">
        <span class="avail-bar__badge">24 / 7</span>
        <span class="avail-bar__text">Dispatch available day and night &mdash; call us anytime</span>
        <a href="tel:${cfg.phoneRaw}" class="avail-bar__phone">${cfg.phone}</a>
      </div>
    `;
  }

  /* ----------------------------------------------------------
     INJECT: Navigation
     ---------------------------------------------------------- */
  function buildNav() {
    const cfg = window.SITE_CONFIG;
    const el = document.getElementById("site-nav");
    if (!el) return;

    const pages = [
      { href: "index.html",    label: "Home" },
      { href: "services.html", label: "Services" },
      { href: "about.html",    label: "About" },
      { href: "contact.html",  label: "Contact" },
    ];

    const linkHTML = pages
      .map(
        (p) =>
          `<a href="${p.href}" class="nav-link" data-page="${p.href}">${p.label}</a>`
      )
      .join("");

    const mobileHTML = pages
      .map(
        (p) =>
          `<a href="${p.href}" class="nav-link" data-page="${p.href}">${p.label}</a>`
      )
      .join("");

    el.innerHTML = `
      <div class="nav__inner">
        <a href="index.html" class="nav__logo" aria-label="${cfg.businessName} home">
          <span class="nav__logo-name">${cfg.businessName}</span>
          <span class="nav__logo-sub">Fuel Delivery &amp; Transport</span>
        </a>

        <nav class="nav__links" aria-label="Main navigation">
          ${linkHTML}
        </nav>

        <a href="tel:${cfg.phoneRaw}" class="nav__cta">${cfg.phone}</a>

        <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger">
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav class="nav__mobile" id="mobile-menu" aria-label="Mobile navigation">
        ${mobileHTML}
        <a href="tel:${cfg.phoneRaw}" class="nav__mobile-phone">${cfg.phone}</a>
      </nav>
    `;

    setActiveNav();
    initMobileMenu();
  }

  /* ----------------------------------------------------------
     HELPER: Mark current page link as active
     ---------------------------------------------------------- */
  function setActiveNav() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(function (link) {
      if (link.dataset.page === current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ----------------------------------------------------------
     HELPER: Mobile hamburger toggle
     ---------------------------------------------------------- */
  function initMobileMenu() {
    const btn  = document.getElementById("hamburger");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----------------------------------------------------------
     INJECT: Footer
     ---------------------------------------------------------- */
  function buildFooter() {
    const cfg = window.SITE_CONFIG;
    const el  = document.getElementById("site-footer");
    if (!el) return;

    const year = new Date().getFullYear();

    el.innerHTML = `
      <div class="footer__grid">

        <!-- Brand column -->
        <div class="footer__brand">
          <div class="footer__brand-name">${cfg.businessName}</div>
          <div class="footer__brand-tag">24/7 Fuel Delivery &amp; Transport</div>
          <p class="footer__brand-desc" style="font-size:0.88rem; line-height:1.6;">
            Serving Oklahoma and surrounding states with reliable,
            around-the-clock fuel delivery you can count on.
          </p>
        </div>

        <!-- Navigation column -->
        <div>
          <div class="footer__col-title">Navigation</div>
          <ul class="footer__links">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <div class="footer__col-title">Contact</div>
          <div class="footer__contact-item footer__contact-item--phone">
            <a href="tel:${cfg.phoneRaw}">${cfg.phone}</a>
          </div>
          <div class="footer__contact-item">
            <a href="mailto:${cfg.email}">${cfg.email}</a>
          </div>
          <div class="footer__contact-item">
            ${cfg.address}
          </div>
          <div class="footer__contact-item">
            Oklahoma &amp; Surrounding States
          </div>
          <div class="footer__contact-item" style="margin-top:0.75rem; color: var(--orange); font-weight:600;">
            Available 24 / 7 &mdash; 365 days a year
          </div>
        </div>

      </div>

      <div class="footer__bottom">
        <span>&copy; ${year} ${cfg.businessName}. All rights reserved.</span>
        <span>Licensed &bull; Insured &bull; DOT Compliant</span>
      </div>
    `;
  }

  /* ----------------------------------------------------------
     PUBLIC: initSite()
     Call this once per page after DOM is ready.
     ---------------------------------------------------------- */
  function initSite() {
    buildAvailBar();
    buildNav();
    buildFooter();
  }

  window.initSite = initSite;

})();
