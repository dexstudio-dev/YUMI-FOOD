// Copy Voucher

function copyVoucher(){

    const kode = document.getElementById("kodeVoucher").innerText;

    navigator.clipboard.writeText(kode);

    alert("Kode berhasil disalin : " + kode);

}

// Menu Mobile

const toggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

toggle.addEventListener("click",()=>{

    menu.classList.toggle("show");

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* =========================
        DARK MODE
========================= */

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});