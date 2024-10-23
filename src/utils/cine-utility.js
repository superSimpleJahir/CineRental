const getImageUrl = (imageName) => {
  return new URL(`../assets/movie-covers/${imageName}`, import.meta.url).href;
};

export { getImageUrl };
