const mutations = {
  setNewArticles: (state, payload) => {
    payload.response.data.forEach(row => {
      // 重複した記事を弾く
      if (!state.articleKeys[row.id]) {
        state.articles.data.push(row);
        state.articleKeys[row.id] = true;
      }
    });
    if (payload.response.data.length === payload.limit) {
      state.articles.next += 1;
    } else {
      state.articles.next = 0;
    }
    state.loading = false;
  },
  setCurrentArticle: (state, payload) => {
    state.current = payload.data;
    state.loading = false;
  },
  setLoading: state => {
    state.loading = true;
  },
};

export default mutations;
