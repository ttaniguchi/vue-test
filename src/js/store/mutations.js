const mutations = {
  setNewArticles: (state, { data, page, limit }) => {
    if (page > 1) {
      data.forEach(row => {
        // 重複した記事を弾く
        if (!state.articleKeys[row.id]) {
          state.articles.data.push(row);
          state.articleKeys[row.id] = true;
        }
      });
    } else {
      state.articles.data = data;
      state.articleKeys = {};
    }
    if (data.length === limit) {
      state.articles.next = page + 1;
    } else {
      state.articles.next = 0;
    }
    state.loading = false;
  },
  setCurrentArticle: (state, { data }) => {
    state.current = data;
    state.loading = false;
  },
  setLoading: state => {
    state.loading = true;
  },
};

export default mutations;
