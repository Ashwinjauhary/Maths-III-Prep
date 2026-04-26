document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            // Change icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'ph ph-x';
            } else {
                icon.className = 'ph ph-list';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'ph ph-list';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'ph ph-list';
            });
        });
    }

    // Search Logic (Shared if search box exists)
    const mainSearch = document.getElementById('mainSearch');
    if (mainSearch) {
        mainSearch.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const term = e.target.value.toLowerCase();
                // Simple redirect to units with search term
                location.href = `units.html?search=${encodeURIComponent(term)}`;
            }
        };
    }

    // Add floating symbols to all pages
    const symbols = ['∫', '∇', 'Σ', 'π', 'dy/dx', '√', 'Δ', 'θ'];
    symbols.forEach((s, i) => {
        const div = document.createElement('div');
        div.className = 'floating-symbol';
        div.innerText = s;
        div.style.top = `${Math.random() * 80 + 10}%`;
        div.style.left = i % 2 === 0 ? `${Math.random() * 5 + 2}%` : `${Math.random() * 5 + 90}%`;
        div.style.fontSize = `${Math.random() * 2 + 3}rem`;
        div.style.opacity = '0.05';
        document.body.appendChild(div);
    });
});
