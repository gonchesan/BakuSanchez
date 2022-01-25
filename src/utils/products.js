export const getAllProducts = () => {
  return fetch("https://baku-api.herokuapp.com/products").then((response) =>
    response.json()
  );
};

export const getItem = (id) => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) => products.find((product) => product.id === id));
};
