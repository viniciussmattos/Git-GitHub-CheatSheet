import { topicData } from './data.js';

const modal = document.getElementById('category-modal');
const modalContent = document.getElementById('modal-inner-content');

export const openTopicDetails = (topicId) => {
    const data = topicData[topicId];
    if (!data || !modal || !modalContent) return;

    modalContent.innerHTML = `
        <div class="space-y-8 animate-fade-in" role="dialog" aria-labelledby="modal-title">
            <div>
                <h2 id="modal-title" class="text-3xl text-white font-semibold mb-4 tracking-tight">${data.title}</h2>
                <div class="h-1 w-12 bg-[#F97316] mb-6" aria-hidden="true"></div>
                <p class="text-neutral-400 leading-relaxed">${data.concept}</p>
            </div>

            <div class="bg-white/5 border border-white/10 p-6 rounded-lg">
                <h4 class="text-[10px] font-bold text-[#F97316] uppercase tracking-widest mb-3">Real World Scenario</h4>
                <p class="text-sm text-neutral-300 italic">"${data.useCase}"</p>
            </div>

            <div class="space-y-4">
                <h4 class="text-xs font-bold text-white uppercase tracking-widest">Mastery Steps:</h4>
                <ul class="space-y-3">
                    ${data.steps.map((step, idx) => `
                        <li class="flex gap-4 text-sm text-neutral-400">
                            <span class="text-[#F97316] font-mono" aria-hidden="true">0${idx + 1}</span>
                            <span>${step}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('button');
    if (closeBtn) closeBtn.focus();
};

export const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
};

export const initModal = () => {
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    window.openTopicDetails = openTopicDetails;
    window.closeModal = closeModal;
};
