const navigation = [
  { name: "Strona Główna", href: "#strona-glowna" },
  { name: "Oferta Klubu", href: "#oferta-klubu" },
  { name: "Nasz Cennik", href: "#czlonkostwo" },
  { name: "O nas", href: "#o-nas" },
];

const features = [
  { src: "./assets/images/cardio.jpg", alt: "Ćwiczenia Kardio" },
  { src: "./assets/images/fitness-power.jpg", alt: "Fitness Power" },
  { src: "./assets/images/group-training.jpg", alt: "Ćwiczenia grupowe" },
  { src: "./assets/images/healthy-food.jpg", alt: "Gabinet prawidłowego odżywiania" },
];

const storySections = [
  {
    title: "Trening siłowy",
    headline: "Zbuduj swoją siłę i sylwetkę z naszym profesjonalnym treningiem siłowym!",
    features: [
      "Indywidualnie dostosowany program treningowy",
      "Sprzęt najwyższej jakości",
      "Szkolenie z doświadczonymi instruktorami",
    ],
    image: "./assets/images/power.jpg",
    alt: "Trening siłowy",
  },
  {
    title: "Trening personalny",
    headline: "Osiągnij swoje cele dzięki naszym profesjonalnym treningom personalnym!",
    features: ["Spersonalizowane podejście", "Motywacja i wsparcie", "Analiza postępu"],
    image: "./assets/images/instructor-2.jpeg",
    alt: "Trener personalny",
    reverse: true,
  },
  {
    title: "Wydarzenia tylko dla członków",
    headline: "Dołącz do naszej społeczności i ciesz się ekskluzywnymi wydarzeniami tylko dla członków!",
    features: ["Wydarzenia tematyczne", "Konkursy i turnieje", "Rabaty i promocje"],
    image: "./assets/images/group.jpeg",
    alt: "Zajęcia grupowe",
  },
];

const tiers = [
  {
    name: "Wejście Pojedyncze",
    price: "25 zł",
    features: ["Siłownia lub zajęcia grupowe"],
  },
  {
    name: "Karnet Open",
    price: "149 zł",
    features: ["Sala ćwiczeń", "Sala cardio", "Zajęcia grupowe"],
  },
  {
    name: "Karnet odnawialny",
    price: "119 zł",
    features: ["Sala ćwiczeń", "Sala cardio", "Zajęcia grupowe"],
  },
  {
    name: "Karnet 3 m-ce (130 zł/m-c)",
    price: "390 zł",
    features: ["Sala ćwiczeń", "Sala cardio", "Zajęcia grupowe"],
  },
  {
    name: "Karnet Roczny (99 zł/m-c)",
    price: "1180 zł",
    features: ["Sala ćwiczeń", "Sala cardio", "Zajęcia grupowe"],
  },
  {
    name: "Wejście Pojedyncze rolki lub vacu",
    price: "25 zł",
    features: ["Rolki albo vacu"],
  },
];

const cards = [
  { src: "./assets/cards/multisport.webp", alt: "Karta MultiSport" },
  { src: "./assets/cards/fitprofit.webp", alt: "Karta FitProfit" },
  { src: "./assets/cards/medicover.png", alt: "Karta Medicover Sport" },
  { src: "./assets/cards/pzu.png", alt: "Karta PZU Sport" },
];

const openingHours = [
  { days: "Pon - Pt", hours: "8:00 - 22:30" },
  { days: "Sobota", hours: "10:00 - 18:00" },
  { days: "Niedziela", hours: "10:00 - 16:00" },
];

const starIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2.4 2.95 5.99 6.62.96-4.79 4.67 1.13 6.59L12 17.5l-5.91 3.11 1.13-6.59L2.43 9.35l6.62-.96L12 2.4Z"></path>
  </svg>
`;

const checkIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.55 16.6 4.8 11.85l-1.4 1.4 6.15 6.15L20.6 8.35l-1.4-1.4Z"></path>
  </svg>
`;

function renderNavigation() {
  const markup = navigation
    .map((item) => `<li><a href="${item.href}">${item.name}</a></li>`)
    .join("");

  document.getElementById("desktop-nav-list").innerHTML = markup;
  document.getElementById("mobile-nav-list").innerHTML = markup;
  document.getElementById("footer-nav-list").innerHTML = markup;
}

function renderFeatures() {
  const markup = features
    .map(
      (feature) => `
        <article class="feature-card">
          <img src="${feature.src}" alt="${feature.alt}" loading="lazy" />
          <h3>${feature.alt}</h3>
        </article>
      `
    )
    .join("");

  document.getElementById("features-grid").innerHTML = markup;
}

function renderStorySections() {
  const markup = storySections
    .map(
      (section) => `
        <article class="story-card${section.reverse ? " story-card--reverse" : ""}">
          <div class="story-card__copy">
            <span class="eyebrow">${section.title}</span>
            <h3>${section.headline}</h3>
            <ul class="story-card__list">
              ${section.features
                .map(
                  (feature) => `
                    <li>
                      ${checkIcon}
                      <span>${feature}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
          <div class="story-card__media">
            <img src="${section.image}" alt="${section.alt}" loading="lazy" />
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("sections-list").innerHTML = markup;
}

function renderPricing() {
  const markup = tiers
    .map(
      (tier, index) => `
        <article class="pricing-card${index % 2 === 1 ? " pricing-card--featured" : ""}">
          <h3>${tier.name}</h3>
          <p class="pricing-card__price">${tier.price}</p>
          <ul>
            ${tier.features
              .map(
                (feature) => `
                  <li>
                    ${checkIcon}
                    <span>${feature}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");

  document.getElementById("pricing-grid").innerHTML = markup;
}

function renderCards() {
  const markup = cards
    .map(
      (card) => `
        <article>
          <img src="${card.src}" alt="${card.alt}" loading="lazy" />
        </article>
      `
    )
    .join("");

  document.getElementById("cards-grid").innerHTML = markup;
}

function renderOpeningHours() {
  const markup = openingHours
    .map(
      (item) => `
        <p>
          <strong>${item.days}</strong>
          <span>${item.hours}</span>
        </p>
      `
    )
    .join("");

  document.getElementById("opening-hours-list").innerHTML = markup;
}

function renderRatings() {
  const stars = Array.from({ length: 5 }, () => starIcon).join("");
  document.getElementById("hero-rating-stars").innerHTML = stars;
  document.getElementById("testimonial-rating-stars").innerHTML = stars;
}

function bindMobileMenu() {
  const body = document.body;
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const closeTargets = mobileNav.querySelectorAll("[data-close-menu]");
  const navLinks = mobileNav.querySelectorAll("a");

  function closeMenu() {
    mobileNav.hidden = true;
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    mobileNav.hidden = false;
    body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    if (mobileNav.hidden) {
      openMenu();
      return;
    }
    closeMenu();
  });

  closeTargets.forEach((element) => element.addEventListener("click", closeMenu));
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileNav.hidden) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960 && !mobileNav.hidden) {
      closeMenu();
    }
  });
}

function renderYear() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
}

renderNavigation();
renderFeatures();
renderStorySections();
renderPricing();
renderCards();
renderOpeningHours();
renderRatings();
renderYear();
bindMobileMenu();
