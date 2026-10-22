
(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // ==============================
  // PACKAGE DATA
  // ==============================
  const nnPackages = {
    "new-year": {
      title: "New Year Package",
      validity: "22 December 2026 – 03 January 2027",
      description:
        "Celebrate the New Year at Narayan Niwas Palace, Jaisalmer, with a memorable heritage stay, comfortable accommodation and festive dining experiences.",
      prices: [
        ["Classic Room", "₹21,333/-"],
        ["Heritage Room", "₹23,999/-"],
        ["Royal Room Courtyard Facing", "₹26,666/-"],
        ["Signature Suite", "₹31,999/-"],
        ["Narayan Niwas Suite", "₹79,999/-"]
      ],
      inclusions: [
        "Non-alcoholic welcome drink on arrival.",
        "Daily buffet breakfast (Chef's Choice Menu at the restaurant)."
      ],
      exclusions: [
        "Buffet dinner at the restaurant: ₹1,000 per person.",
        "Dinner at the rooftop restaurant: ₹1,500 per person.",
        "Optional New Year's Eve Gala Celebration on 31 December 2026, including DJ, buffet dinner, selected IMFL brands and fireworks.",
        "Gala charges: ₹4,000 plus GST per person and ₹2,000 plus GST for children above 8 years.",
        "Celebration venue: Desert Tulip Hotel & Resort."
      ]
    },

    winter: {
      title: "Winter Package",
      validity: "01 October 2026 – 31 March 2027",
      description:
        "Enjoy the winter charm of the Golden City with a relaxing stay at Narayan Niwas Palace, surrounded by Jaisalmer's heritage architecture and warm hospitality.",
      prices: [
        ["Classic Room", "₹17,333/-"],
        ["Heritage Room", "₹19,999/-"],
        ["Royal Room", "₹22,666/-"],
        ["Signature Suite", "₹26,666/-"],
        ["Narayan Niwas Suite", "₹79,999/-"]
      ],
      inclusions: [
        "Non-alcoholic welcome drink on arrival.",
        "Daily buffet breakfast (Chef's Choice Menu at the restaurant)."
      ],
      exclusions: [
        "Buffet dinner at the restaurant: ₹1,000 per person.",
        "Dinner at the rooftop restaurant: ₹1,500 per person."
      ]
    },

    diwali: {
      title: "Diwali Package",
      validity: "07 November 2026 – 15 November 2026",
      description:
        "Celebrate the festival of lights with a special heritage getaway at Narayan Niwas Palace, Jaisalmer, and experience the warmth and charm of Rajasthan.",
      prices: [
        ["Classic Room", "₹21,333/-"],
        ["Heritage Room", "₹23,999/-"],
        ["Royal Room Courtyard Facing", "₹26,666/-"],
        ["Signature Suite", "₹31,999/-"],
        ["Narayan Niwas Suite", "₹79,999/-"]
      ],
      inclusions: [
        "Non-alcoholic welcome drink on arrival.",
        "Daily buffet breakfast (Chef's Choice Menu at the restaurant)."
      ],
      exclusions: [
        "Buffet dinner at the restaurant: ₹1,000 per person.",
        "Dinner at the rooftop restaurant: ₹1,500 per person."
      ]
    }
  };

  const nnCommonTerms = [
    "All bookings are confirmed against 100% advance payment.",
    "Children below 8 years stay complimentary when sharing the parents' bed.",
    "Children above 8 years: ₹1,500 per person per night.",
    "Standard check-in time: 2:00 PM.",
    "Standard check-out time: 11:00 AM.",
    "Early check-in and late check-out are subject to availability.",
    "The hotel reserves the right to amend the package at any time."
  ];

  // ==============================
  // PACKAGE DETAILS POPUP
  // ==============================
  function openPackageDetails(packageId) {
    const pkg = nnPackages[packageId];
    if (!pkg) return;

    const modal = document.getElementById("nnPackageModal");
    const content = document.getElementById("nnModalContent");

    if (!modal || !content) {
      console.error(
        "Package modal not found. Add #nnPackageModal and #nnModalContent to your HTML."
      );
      return;
    }

    const escapeHTML = value =>
      String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]);

    content.innerHTML = `
      <span class="nn-package-label">Narayan Niwas Palace</span>

      <h2 id="nnModalTitle">${escapeHTML(pkg.title)}</h2>

      <div class="nn-package-valid">
        <strong>Package Valid:</strong>
        ${escapeHTML(pkg.validity)}
      </div>

      <p>${escapeHTML(pkg.description)}</p>

      <h3>Room Tariff</h3>

      <div class="nn-price-list">
        ${pkg.prices.map(([room, price]) => `
          <div>
            <span>${escapeHTML(room)}</span>
            <strong>${escapeHTML(price)}</strong>
          </div>
        `).join("")}
      </div>

      <p class="nn-price-note">
        Rates are per room for 2 nights and 3 days, as stated
        in the package. Please confirm the exact meal plan and
        applicable taxes with the hotel.
      </p>

      <div class="nn-detail-columns">
        <div>
          <h3>Inclusions</h3>
          <ul>
            ${pkg.inclusions.map(item =>
              `<li>${escapeHTML(item)}</li>`
            ).join("")}
          </ul>
        </div>

        <div>
          <h3>Exclusions</h3>
          <ul>
            ${pkg.exclusions.map(item =>
              `<li>${escapeHTML(item)}</li>`
            ).join("")}
          </ul>
        </div>
      </div>

      <div class="nn-terms">
        <h3>Terms &amp; Conditions</h3>
        <ul>
          ${nnCommonTerms.map(item =>
            `<li>${escapeHTML(item)}</li>`
          ).join("")}
        </ul>
      </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeButton = modal.querySelector(".nn-modal-close");
    if (closeButton) closeButton.focus();
  }

  function closePackageDetails() {
    const modal = document.getElementById("nnPackageModal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Make functions available to inline HTML onclick handlers.
  window.openPackageDetails = openPackageDetails;
  window.closePackageDetails = closePackageDetails;

  // ==============================
  // INITIALIZE WEBSITE
  // ==============================
  ready(function () {
    // Hero and main sliders
    if (window.jQuery && jQuery.fn && jQuery.fn.slick) {
      var hero = jQuery(".hero-hotel .slider");

      if (hero.length && !hero.hasClass("slick-initialized")) {
        hero.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: true,
          dots: true,
          fade: true,
          adaptiveHeight: false
        });
      }

      var main = jQuery(".main-slider");

      if (main.length && !main.hasClass("slick-initialized")) {
        main.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3500,
          arrows: true,
          dots: false,
          responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1 }
            }
          ]
        });
      }
    }

    // Mobile navigation
    var toggle = document.querySelector(".menu-btn");
    var menu = document.querySelector(".menu-items");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        menu.classList.toggle("nn-menu-open");
        toggle.classList.toggle("is-active");

        toggle.setAttribute(
          "aria-expanded",
          menu.classList.contains("nn-menu-open") ? "true" : "false"
        );
      });

      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          menu.classList.remove("nn-menu-open");
          toggle.classList.remove("is-active");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Close package popup with Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePackageDetails();
      }
    });
  });
})();
