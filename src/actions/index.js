export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addOrders = orders => ({
  type: 'ADD_ORDERS',
  orders
});
