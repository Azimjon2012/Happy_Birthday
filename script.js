// =====================================
// RISOLAT MAVLONOVA WEBSITE
// MAIN SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

initNavbar();
initActiveNavigation();
initRevealAnimations();
initHeroAnimation();
initLightbox();
initWishes();


});

// =====================================
// NAVBAR
// =====================================

function initNavbar() {


const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

window.addEventListener("scroll", () => {

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

}

// =====================================
// ACTIVE NAVIGATION
// =====================================

function initActiveNavigation() {


const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar nav a");

if(!sections.length) return;

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});

}
// =====================================
// REVEAL ANIMATIONS
// =====================================

function initRevealAnimations() {

const elements = document.querySelectorAll(
    ".section-title,.about-grid,.timeline-item,.gallery-item,.family-card,.wish-card,.thank-you-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold:0.15
    }

);

elements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


}

// =====================================
// HERO ANIMATION
// =====================================

function initHeroAnimation() {


const heroContent =
document.querySelector(".hero-content");

if(!heroContent) return;

heroContent.animate(

    [
        {
            opacity:0,
            transform:"translateY(40px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],

    {
        duration:1200,
        easing:"ease-out",
        fill:"forwards"
    }

);


}

// =====================================
// GALLERY LIGHTBOX
// =====================================

function initLightbox() {

const images =
document.querySelectorAll(
    ".gallery-item img"
);

const lightbox =
document.querySelector(
    ".lightbox"
);

const lightboxImage =
document.querySelector(
    ".lightbox-image"
);

const closeButton =
document.querySelector(
    ".lightbox-close"
);

if(
    !lightbox ||
    !lightboxImage ||
    !closeButton
) return;

images.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            lightbox.classList.add(
                "active"
            );

            lightboxImage.src =
            image.src;

        }
    );

});

closeButton.addEventListener(
    "click",
    closeLightbox
);

lightbox.addEventListener(
    "click",
    (e) => {

        if(
            e.target === lightbox
        ){

            closeLightbox();

        }

    }
);

document.addEventListener(
    "keydown",
    (e) => {

        if(
            e.key === "Escape" &&
            lightbox.classList.contains(
                "active"
            )
        ){

            closeLightbox();

        }

    }
);

function closeLightbox(){

    lightbox.classList.remove(
        "active"
    );

}

}
// =====================================
// 76 WISHES
// =====================================

function initWishes() {


const wishesGrid =
document.getElementById(
    "wishesGrid"
);

if(!wishesGrid) return;

const wishes = [
"Doimo sog'-salomat bo'ling",
"Umringiz uzoq bo'lsin",
"Baxt va quvonch sizni tark etmasin",
"Yuzingizdan tabassum arimasin",
"Farzandlar baxtini ko'ring",
"Nabiralar mehriga to'ying",
"Har kuni yangi quvonch olib kelsin",
"Qalbingiz xotirjam bo'lsin",
"Hayotingiz fayzga to'lsin",
"Duolaringiz ijobat bo'lsin",
"Har tongingiz nurli bo'lsin",
"Har kuningiz bayramdek o'tsin",
"Yaxshi insonlar qurshovida bo'ling",
"Mehringiz ziyoda bo'lsin",
"Ko'nglingiz doimo shod bo'lsin",
"Orzularingiz ushalib borsin",
"Yuragingiz quvonchlarga to'lsin",
"Hayotingiz mazmunli bo'lsin",
"Hurmat va e'zozda yashang",
"Baxtingiz yanada ko'paysin",
"Sog'ligingiz mustahkam bo'lsin",
"Har kuningiz fayzli o'tsin",
"Xonadoningizga baraka yog'ilsin",
"Ko'zlaringiz faqat quvonch ko'rsin",
"Do'stlar mehrini his qiling",
"Yaqinlaringiz doimo yoningizda bo'lsin",
"Hayotdan zavqlaning",
"Har kuni tabassum qiling",
"Qalbingiz yosh bo'lib qolsin",
"Doimo bardam bo'ling",
"Kuch-quvvat sizni tark etmasin",
"Har lahza qadrlansin",
"Baxtli xotiralar ko'paysin",
"Quvonchli yangiliklar eshiting",
"Har fasl sizga baxt olib kelsin",
"Xotiralaringiz yorqin bo'lsin",
"Hayotingiz nurga to'lsin",
"Har kuningiz mazmunli o'tsin",
"Mehr ulashishda davom eting",
"Atrofingiz sevgi bilan o'ralsin",
"Ko'nglingizdagi orzular ushalaversin",
"Yuragingiz xotirjam bo'lsin",
"Doimo kulib yuring",
"Farzandlaringiz faxringiz bo'lsin",
"Nabiralaringiz quvonchingiz bo'lsin",
"Har kuni baxt olib kelsin",
"Uyda fayz va baraka bo'lsin",
"Qadamingiz qutlug' bo'lsin",
"Yuragingiz mehrga to'lsin",
"Har tong yangi umid olib kelsin",
"Doimo ezgulik ko'ring",
"Atrofingiz yaxshi insonlarga to'lsin",
"Qalbingiz pok bo'lsin",
"Hayotingiz tinch bo'lsin",
"Har bir kuningiz qadrli bo'lsin",
"Umr yo'lingiz yorug' bo'lsin",
"Doimo baxtiyor bo'ling",
"Mehringiz bizni ilhomlantirsin",
"Qalbingizdagi nur so'nmasin",
"Har lahza zavqli o'tsin",
"Baxt sizni tark etmasin",
"Quvonchlaringiz ko'paysin",
"Har bir kuningiz omadli bo'lsin",
"Yaxshiliklar sizga qaytsin",
"Doimo duo qilib yuring",
"Hayotingiz shirin o'tsin",
"Yuragingiz doimo iliq bo'lsin",
"Har bir kuningiz muborak bo'lsin",
"Siz bizning faxrimiz bo'lib qoling",
"Bizni duolaringizdan ayamang",
"Baxtingiz ziyoda bo'lsin",
"Doimo hurmatda bo'ling",
"Xonadoningiz tinch bo'lsin",
"Qalbingiz quvonchlarga to'lsin",
"Yaqinlaringiz mehrini his qiling",
"76 yoshingiz muborak bo'lsin ❤️"
];

wishesGrid.innerHTML = "";

wishes.forEach((wish,index) => {

    const card =
    document.createElement("div");

    card.className =
    "wish-card";

    card.innerHTML = `
        <span>${index + 1}</span>
        <p>${wish}</p>
    `;

    wishesGrid.appendChild(card);

});

}
