document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <span class="icon sun active"><i class="fas fa-sun"></i></span>
        <span class="icon moon"><i class="fas fa-moon"></i></span>
    `;
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'light') {
        themeToggle.querySelector('.sun').classList.add('active');
        themeToggle.querySelector('.moon').classList.remove('active');
    } else {
        themeToggle.querySelector('.moon').classList.add('active');
        themeToggle.querySelector('.sun').classList.remove('active');
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Toggle active class
        themeToggle.querySelector('.sun').classList.toggle('active');
        themeToggle.querySelector('.moon').classList.toggle('active');
    });

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger to X
        mobileMenuBtn.classList.toggle('active');
    });
}); 