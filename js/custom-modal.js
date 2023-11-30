import CustomAccordion from './custom-accordion.js';

class CustomModal extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal">
                <div class="modal__wrapper">
                    <span class="modal__close-btn js_close_modal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                    </span>
                    <div class="modal__content"></div>
                </div>
            </div>
        `;

        const closeModalButton = this.querySelector('.js_close_modal');
        if (!closeModalButton) {
            console.error('Close modal button not found');
            return;
        }

        closeModalButton.addEventListener('click', () => this.close());

        const modal = this.querySelector('.modal');
        if (!modal) {
            console.error('Modal element not found');
            return;
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.close();
            }
        });
    }

    createAndAppendAccordion(title, contentHtml) {
        const accordion = new CustomAccordion();
        accordion.setTitle(title);
        accordion.setContent(contentHtml);
        this.querySelector('.modal__content').appendChild(accordion);
    }

    updateContent(productInfo, brandInfo) {
        this.querySelector('.modal__content').innerHTML = '';

        this.createAndAppendAccordion(
            'Product Info',
            `<div>${productInfo.name}</div><p>${productInfo.info}</p>`
        );

        this.createAndAppendAccordion(
            'Brand Info',
            `<div>${brandInfo.name}</div><p>${brandInfo.info}</p>`
        );
    }
    
    open() {
        this.querySelector('.modal').classList.add('open');
    }

    close() {
        this.querySelector('.modal').classList.remove('open');
    }
}

customElements.define('custom-modal', CustomModal);
