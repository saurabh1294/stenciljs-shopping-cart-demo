import { Component } from '@stencil/core';

// import { Component, h, State, Listen, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'stencil-shopping-cart',
    styleUrl: 'stencil-shopping-cart.scss'
  })

export class ShoppingCartComponent {
  title = 'ShoppingCartApp';
  // NOTE:- instead of hardcoding. can be fetched from a service.
  product1Qty: number = 4;
  product2Qty: number = 1;
  priceperItem: number = 26;
  subTotal1: number;
  subTotal2: number;


  changeQty(event, fieldNum) {
    // check which product quantity is changed product 1 or product 2
    // calculate subtotal based on product qty changed
    if (fieldNum === 1) {
      this.product1Qty = event.target.value;
      this.subTotal1 = this.product1Qty * this.priceperItem;
    } else {
      this.product2Qty = event.target.value;
      this.subTotal2 = this.product2Qty * this.priceperItem;
    }
  }

  removeItem(event) {
    console.log('removed', event.target.value);
  }

  addItem(event) {
    console.log('added item', event);
  }

  componentWillLoad() {
    // initialize subTotal1 and subTotal2 for the products
    this.subTotal1 = this.priceperItem * this.product1Qty;
    this.subTotal2 = this.priceperItem * this.product2Qty;
  }
}