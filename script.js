// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. MENU MOBILE (HAMBÚRGUER)
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('toggle-active');
        });
    }

    // ==========================================
    // 2. ROLAGEM SUAVE (SMOOTH SCROLL)
    // ==========================================
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Fecha o menu mobile se estiver aberto
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('toggle-active');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // 3. SIMULADOR DE IMPACTO SUSTENTÁVEL
    // ==========================================
    const calcButton = document.getElementById('btn-calcular');
    const resultadoSimulacao = document.getElementById('resultado-simulacao');

    if (calcButton && resultadoSimulacao) {
        calcButton.addEventListener('click', () => {
            const hectares = parseFloat(document.getElementById('input
