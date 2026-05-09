// تحديث السنة التلقائي في الفوتر
document.getElementById('year').textContent = new Date().getFullYear();

// التمرير السلس (Smooth Scrolling) عند الضغط على الروابط في الهيدر
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // تعويض ارتفاع الهيدر
            behavior: 'smooth'
        });
    });
});