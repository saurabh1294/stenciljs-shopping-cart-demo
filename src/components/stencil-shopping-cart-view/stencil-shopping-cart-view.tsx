import { Component, h } from '@stencil/core';

// import { Component, h, Event, EventEmitter, Listen, State } from '@stencil/core';

@Component({
    tag: 'stencil-shopping-cart-view',
    styleUrl: 'stencil-shoping-cart-view.scss'
})

export class ShoppingCartView {
    render() {
        return (
            <main class="container">
                <div class="desktop-wrapper">
                    <div class = "basket">
                        <div class="basket-labels">
                            <ul>
                                <li class="item item-heading">Item</li>
                                <li class="price">Price</li>
                                <li class="quantity">Quantity</li>
                                <li class="subtotal">Subtotal</li>
                            </ul>
                        </div>
                        <div class = "basket-product">
                            <div class="item">
                                <div class="product-image">
                                    <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
                                </div>
                                <div class="product-details">
                                    <h5><strong><span class="item-quantity">456</span> x Product 1</strong> XYZ Dress</h5>
                                    <p><strong>Size 20</strong></p>
                                    <p>Product Code - 6723456</p>
                                </div>
                            </div>
                            <div class="price">26.00</div>
                            <div class="quantity">
                                <input type="number" value="1" min="1" class="quantity-field" />
                            </div>
                            <div class="subtotal">26</div>
                            <div class="remove align-add">
                                <button >Add</button>
                            </div>
                            <div class="remove">
                                <button >Remove</button>
                            </div>
                        </div>
                        <div class = "basket-product">
                            <div class="item">
                                <div class="product-image">
                                    <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
                                </div>
                                <div class="product-details">
                                    <h5><strong><span class="item-quantity">378</span> x Product 1</strong> XYZ Dress</h5>
                                    <p><strong>Size 25</strong></p>
                                    <p>Product Code - 8923456</p>
                                </div>
                            </div>
                            <div class="price">34.00</div>
                            <div class="quantity">
                                <input type="number" value="1" min="1" class="quantity-field" />
                            </div>
                            <div class="subtotal">34</div>
                            <div class="remove align-add">
                                <button >Add</button>
                            </div>
                            <div class="remove">
                                <button >Remove</button>
                            </div>
                        </div>
                    </div>
                    <aside>
                        <div class="col-lg-12 summary">
                            <div class="summary-total-items"><span class="total-items"></span> Items in your Cart</div>
                            <div class="summary-subtotal">
                                <div class="subtotal-title">Subtotal</div>
                                <div class="subtotal-value final-value" id="basket-subtotal">60</div>
                            </div>
                            <div class="summary-delivery">
                                <table>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <tr>
                                        <td><strong>1 x Product 1 XYZ dress, Size 20</strong></td>
                                        <td class="qty"><strong>1</strong></td>
                                        <td class="price"><strong>26</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>1 x Product 2 ABC dress, Size 25</strong></td>
                                        <td class="qty"><strong>1</strong></td>
                                        <td class="price"><strong>34</strong></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="summary-total">
                                <div class="total-title">Total</div>
                                <div class="total-value final-value" id="basket-total">60</div>
                            </div>
                            <div class="summary-checkout">
                                <button class="checkout-cta">Go to Secure Checkout</button>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="mobile-wrapper">
                    <aside>
                        <div class="col-lg-3 summary">
                            <div class="summary-total-items"><span class="total-items"></span> Items in your Cart</div>
                            <div class="summary-subtotal">
                                <div class="subtotal-title">Subtotal</div>
                                <div class="subtotal-value final-value" id="basket-subtotal">60</div>
                            </div>
                            <div class="summary-delivery">
                                <table>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <tr>
                                        <td><strong>1 x Product 1 XYZ dress, Size 20</strong></td>
                                        <td class="qty"><strong>1</strong></td>
                                        <td class="price"><strong>1</strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>1 x Product 2 ABC dress, Size 15</strong></td>
                                        <td class="qty"><strong>1</strong></td>
                                        <td class="price"><strong>1</strong></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="summary-total">
                                <div class="total-title">Total</div>
                                <div class="total-value final-value" id="basket-total">60</div>
                            </div>
                            <div class="summary-checkout">
                                <button class="checkout-cta">Go to Secure Checkout</button>
                            </div>
                        </div>
                    </aside>
                    <div class="basket">
                        <div class="basket-labels">
                            <ul>
                                <li class="item item-heading">Item</li>
                                <li class="price">Price</li>
                                <li class="quantity">Quantity</li>
                                <li class="subtotal">Subtotal</li>
                            </ul>
                        </div>
                        <div class="basket-product">
                            <div class="item">
                                <div class="product-image">
                                    <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
                                </div>
                                <div class="product-details">
                                    <h1><strong><span class="item-quantity">1</span> x Product 1</strong> XYZ dress</h1>
                                    <p><strong>Size 20</strong></p>
                                    <p>Product Code - 6723456</p>
                                </div>
                            </div>
                            <div class="price">26.00</div>
                            <div class="quantity">
                                <input type="number" value="1" min="1" class="quantity-field"/>
                            </div>
                            <div class="subtotal">26</div>
                            <div class="remove align-add">
                                <button>Add</button>
                            </div>
                            <div class="remove">
                                <button>Remove</button>
                            </div>
                        </div>
                        <div class="basket-product">
                            <div class="item">
                                <div class="product-image">
                                    <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
                                </div>
                                <div class="product-details">
                                    <h1><strong><span class="item-quantity">1</span> x Product 2</strong> ABC Dress</h1>
                                    <p><strong>Size 15</strong></p>
                                    <p>Product Code - 4523478</p>
                                </div>
                            </div>
                            <div class="price">26.00</div>
                            <div class="quantity">
                                <input type="number" value="1" min="1" class="quantity-field"/>
                            </div>
                            <div class="subtotal">34</div>
                            <div class="remove align-add">
                                <button>Add</button>
                            </div>
                            <div class="remove">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}