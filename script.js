window.addEventListener('load', function() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/' || path === '') {
        alert('Добро пожаловать на наш сайт, где вы найдете все необходимое для создания своей первой IT-компании — от полезных ресурсов до поддержки сообщества!');
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение!');
        contactForm.reset();
    });
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
