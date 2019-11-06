import {setOrders } from './index';

describe ('Actions', () => {
  it ('should have a type of SET_ORDERS', () => {
    let setOrders = {

    }

    let expectedAction = {
      type: 'SET_ORDERS',
      orders: orders
    };

    expect(setOrders(order)).toEqual(expectedAction);
  });
})