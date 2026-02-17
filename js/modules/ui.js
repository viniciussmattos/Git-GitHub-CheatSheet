export const initPreloader = () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    document.body.style.overflow = 'hidden';

    const hidePreloader = () => {
        if (!preloader.classList.contains('preloader-hidden')) {
            preloader.classList.add('preloader-hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                document.body.style.overflow = '';
            }, 1500);
        }
    };

    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 500);
    } else {
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 2000);
        });
    }

    setTimeout(hidePreloader, 5000);
};

export const initScrollAnimations = () => {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        animationObserver.observe(el);
    });
};

export const initSmoothScroll = () => {
    document.querySelectorAll('nav a, #hero a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

export const initParallax = () => {
    const grid = document.querySelector('.grid-bg');
    if (!grid) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        grid.style.transform = `translateY(${scrolled * 0.05}px)`;
    });
};
