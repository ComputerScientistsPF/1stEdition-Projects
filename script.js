document.querySelectorAll('nav ul a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


document.getElementById('year').textContent = new Date().getFullYear();


const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙'; 
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️'; 
    }
});


const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'ar';

const setLanguage = (lang) => {
    if (lang === 'en') {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.setAttribute('lang', 'en');
        langToggle.textContent = 'AR'; 
        htmlElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    } else {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
        langToggle.textContent = 'EN'; 
        htmlElement.style.fontFamily = "'Tajawal', sans-serif";
    }
    
    ا
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });
};


setLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
});
