export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
};

export const postOrders = async (order) => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...order})
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Something went wrong.  Unable to create a new order.');
  }
  const newOrderId = await response.json();
  return newOrderId;
};