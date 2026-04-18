import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js';
import { cart } from '../../data/cart-class.js';
import {loadProductsFetch} from '../../data/products.js';

describe('test suite: renderOrderSummary', () => {

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    
    beforeAll((done) => {
        loadProductsFetch().then(() => {
            done();
        });
    });

    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
            <div class="js-return-to-home-link"></div>
            <div class="js-payment-summary"></div>
            <div class="js-checkout-header"></div>
        `;

        cart.cartItems = [
            {
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }
        ];

        renderOrderSummary();
    });

    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('displays the cart', () => {
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        expect(
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2');
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');
    });

    it('display name of product', () => {
        const productNameElement = document.querySelector(`.js-product-name-${productId1}`);
        expect(productNameElement).not.toEqual(null);
        expect(productNameElement.innerText).toContain('Black and Gray Athletic Cotton Socks');
    });

    it('display price of product', () => {
        const productPriceElement = document.querySelector(`.js-product-price-${productId1}`);
        expect(productPriceElement).not.toBeNull();
        expect(productPriceElement.innerText).toContain('$');
    });

    it('updates the delivery option', () => {
        document.querySelector(`.js-delivery-option-${productId1}-3`).click();
    
        expect(
            document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
        ).toEqual(true);
    
        expect(cart.cartItems.length).toEqual(2);
        expect(cart.cartItems[0].productId).toEqual(productId1);
        expect(cart.cartItems[0].deliveryOptionId).toEqual('3');

        expect(
            document.querySelector('.js-payment-summary-shipping').innerText
        ).toEqual('$14.98');
        expect(
            document.querySelector('.js-payment-summary-total').innerText
        ).toEqual('$63.50');
    });
});