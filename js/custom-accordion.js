export default class CustomAccordion extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="accordion" data-element="accordion">
                <div class="accordion__title">
                    <div class="accordion__trigger" data-element="trigger"></div>
                    <svg class="svg-icon" width="23" height="13" viewBox="0 0 23 13" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.540039 1.6527L1.24714 0.9456L11.5001 11.1986L21.7532 0.945599L22.4603 1.6527L11.5001 12.6128L0.540039 1.6527Z"/></svg>
                </div>
                <div class="accordion__content">
                    <div class="inner" data-element="content"></div>
                </div>
            </div>
        `;

        const trigger = this.querySelector('[data-element="trigger"]');
        if (!trigger) {
            console.error('Accordion trigger element not found');
            return;
        }

        trigger.addEventListener('click', () => {
            const accordion = this.querySelector('[data-element="accordion"]');
            if (!accordion) {
                console.error('Accordion element not found');
                return;
            }
            accordion.classList.toggle('is-open');
        });
    }

    setTitle(title) {
        this.querySelector('[data-element="trigger"]').textContent = title;
    }

    setContent(content) {
        this.querySelector('[data-element="content"]').innerHTML = content;
    }
}

customElements.define('custom-accordion', CustomAccordion);
