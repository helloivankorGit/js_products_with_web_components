import items from './data.js';

function createReadMoreButton(itemData, modalId) {
    const button = document.createElement('button');
    button.className = 'read-more-button';
    button.textContent = 'Read More';
    button.addEventListener("click", function () {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.updateContent(itemData.brand, itemData.item);
            modal.open();
        }
    });
    return button;
}

function createShoppingItem(itemData, modalId) {
    const item = document.createElement('div');
    item.className = 'product-item';

    item.innerHTML = `
        <img src="${itemData.item.img}" alt="${itemData.item.name}">
        <div class="product-item__details">
            <div class="product-item__brand">${itemData.brand.name}</div>
            <div class="product-item__title">${itemData.item.name}</div>
        </div>
    `

    const readMoreBtn = createReadMoreButton(itemData, modalId);
    item.querySelector('.product-item__details').appendChild(readMoreBtn);
    return item;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    if (!grid) {
        console.error('Grid element not found');
        return;
    }
    items.forEach(itemData => {
        grid.appendChild(createShoppingItem(itemData, 'infoModal'));
    });
});