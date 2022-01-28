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

export const getProductsByCategory = (category) => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.category === category)
    );
};

export const getBestSeller = () => {
  return fetch("https://baku-api.herokuapp.com/products")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.bestSeller === true)
    );
};
