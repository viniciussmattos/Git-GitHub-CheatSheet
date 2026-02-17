import { initPreloader, initScrollAnimations, initSmoothScroll, initParallax } from './modules/ui.js';
import { initModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initScrollAnimations();
    initSmoothScroll();
    initParallax();

    initModal();

    console.log('🚀 Git Premium Experience Initialized');
});
