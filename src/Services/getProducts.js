export const getProducts = () => {
  return fetch("https://baku-api.herokuapp.com/products").then((response) =>
    response.json()
  );
};
