const lang = document.querySelector(".lang");
const en = document.querySelector(".en");
const ar = document.querySelector(".ar");

let fileName = window.location.pathname.split('/').pop();
let langParam = '';
if (fileName.indexOf('-') !== -1) {
    langParam = fileName.split('.')[0].split('-')[1];
    fileName = fileName.split('.')[0].split('-')[0];
}else {
    langParam = 'en';
    fileName = 'nofile';
}
if (langParam === 'en') {
    ar.classList.remove("active");
    en.classList.add("active");
}else {
    ar.classList.add("active");
    en.classList.remove("active");
}
lang.onclick = () => {
    ar.classList.toggle("active");
    en.classList.toggle("active");

    if (langParam === 'en') {
        langParam = 'ar';
    }else {
        langParam = 'en';
    }

    setTimeout(() => {
        window.location.href = `${fileName}-${langParam}.html`;
    }, 1000);
}
