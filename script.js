// Dark Mode Toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const icon = document.querySelector('#darkModeBtn i');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('bi-moon-stars-fill');
                icon.classList.add('bi-sun-fill');
            } else {
                icon.classList.remove('bi-sun-fill');
                icon.classList.add('bi-moon-stars-fill');
            }
        }

        // Animated Progress Bars on Scroll
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.skill-bar');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    }
                });
            }, { threshold: 0.5 });

            progressBars.forEach(bar => observer.observe(bar));
        }

        // Smooth Scroll for Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Fade-in Animation on Scroll
        function fadeInOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }

        // Initialize on Page Load
        window.addEventListener('DOMContentLoaded', () => {
            animateProgressBars();
            fadeInOnScroll();
        });