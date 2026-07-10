// =========================================
// YUMI FOOD - script.js
// =========================================


// ==========================
// COPY VOUCHER
// ==========================

function copyVoucher() {
    const kode = document.getElementById("kodeVoucher");

    if (kode) {
        navigator.clipboard.writeText(kode.innerText);
        alert("Kode berhasil disalin: " + kode.innerText);
    }
}


// ==========================
// MENU MOBILE
// ==========================

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {

    toggle.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}


// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}


// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 300);

    }

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================
// ACTIVE MENU
// ==========================

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


// ==========================
// NAVBAR SHADOW
// ==========================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.classList.add("shadow");

        } else {

            header.classList.remove("shadow");

        }

    });

}