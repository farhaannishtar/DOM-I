const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

const headerNav = document.querySelectorAll("a");
headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
headerNav[5].textContent = siteContent["nav"]["nav-item-6"];

const ctaH1 = document.querySelector(".cta h1");
const ctaButton = document.querySelector(".cta button");
ctaH1.textContent = "DOM Is Awesome";
ctaButton.textContent = "Get Started"

const mainContentHeaders = document.querySelectorAll(".main-content h4");
mainContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentparagraphs = document.querySelectorAll(".main-content p");
mainContentparagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainContentparagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainContentparagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainContentparagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainContentparagraphs[4].textContent = siteContent["main-content"]["vision-content"];

const contactHeader = document.querySelector("section.contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll("section.contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

const copyrightInfo = document.querySelector("footer a");
copyrightInfo.textContent = siteContent["footer"]["copyright"];

const headerLogo = document.querySelector(".container header img");
headerLogo.src = siteContent["images"]["logo-img"];

const ctaImg = document.querySelector("section.cta img");
ctaImg.src = siteContent["images"]["cta-img"];

const middleImg = document.querySelector("section.main-content img");
middleImg.src = siteContent["images"]["accent-img"];

headerNav[0].classList.add("italic");
headerNav[1].classList.add("italic");
headerNav[2].classList.add("italic");
headerNav[3].classList.add("italic");
headerNav[4].classList.add("italic");
headerNav[5].classList.add("italic");

const footerLink = document.querySelector("footer a");
footerLink.classList.add("bold");