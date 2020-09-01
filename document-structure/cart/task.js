'use strict';
const decs = document.getElementsByClassName('product__quantity-control_dec');
const incs = document.getElementsByClassName('product__quantity-control_inc');
const adds = document.getElementsByClassName('product__add');

for (let dec of decs) {
	dec.addEventListener('click', (event) => {
		const quantityControl = dec.closest('.product__quantity-controls');
		const quantity = quantityControl.querySelector('.product__quantity-value');
		if (Number(quantity.textContent) > 1) {
			quantity.innerText = Number(quantity.textContent) - 1;
		}
	});
}

for (let inc of incs) {
	inc.addEventListener('click', (event) => {
		const quantityControl = inc.closest('.product__quantity-controls');
		const quantity = quantityControl.querySelector('.product__quantity-value');
		quantity.innerText = Number(quantity.textContent) + 1;
	});
}

for (let add of adds) {
	add.addEventListener('click', (event) => {
		const cart = document.querySelector('.cart__products');
		const added = add.closest('.product');

		let cartProduct = Array.from(cart.querySelectorAll('.cart__product')).find(i => i.dataset.id === added.dataset.id);

		if (cartProduct) {
			cartProduct.querySelector('.cart__product-count').textContent = Number(added.querySelector('.product__quantity-value').textContent) + Number(cartProduct.querySelector('.cart__product-count').textContent);
		} else {
			cartProduct = document.createElement('div');
			cartProduct.className = 'cart__product';
			cartProduct.dataset.id = add.closest('.product').dataset.id;
			cart.insertAdjacentElement('beforeEnd', cartProduct);

			const img = added.querySelector('img').cloneNode();
			cartProduct.insertAdjacentElement('beforeEnd', img);
			img.className = 'cart__product-image';

			const count = document.createElement('div');
			count.className = 'cart__product-count';
			count.textContent = added.querySelector('.product__quantity-value').textContent;
			cartProduct.insertAdjacentElement('beforeEnd', count);
		}
	});
}