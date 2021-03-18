const getters = {
  newArticles: state => state.articles,
  currentArticle: state => state.current,
  isLoading: state => state.loading,
};

export default getters;
