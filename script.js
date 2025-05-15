
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});


document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

const backToTop = document.createElement('button');
backToTop.textContent = '↑ Topo';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '30px';
backToTop.style.right = '30px';
backToTop.style.padding = '10px 15px';
backToTop.style.fontSize = '16px';
backToTop.style.display = 'none';
backToTop.style.backgroundColor = '#0066cc';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Pegamos o elemento da seção destino
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Rola suavemente até a seção, ajustando para não cobrir o topo com o cabeçalho fixo
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Subtrai a altura do cabeçalho
            behavior: 'smooth'
        });
    });
});
