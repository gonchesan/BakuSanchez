export const getBanners = () => {
  return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
    response
      .json()
      .then((data) => data[1])
      .then((result) => result.banners)
  );
};

export const getCollectionPictures = () => {
  return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
    response
      .json()
      .then((data) => data[0])
      .then((result) => result.collectionPictures)
  );
};

export const getAboutUstInfo = () => {
  return fetch("https://baku-api.herokuapp.com/infoPage").then((response) =>
    response
      .json()
      .then((data) => data[2])
      .then((result) => result.aboutUs)
  );
};