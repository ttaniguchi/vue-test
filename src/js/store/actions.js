import axiosBase from 'axios';

const LIMIT = 100;

const headers = {
  'Content-Type': 'application/json',
};

// webpackからにQIITA_ACCESS_TOKENを埋め込む
if (QIITA_ACCESS_TOKEN) {
  headers.Authorization = `Bearer ${QIITA_ACCESS_TOKEN}`;
}

const axios = axiosBase.create({
  baseURL: 'https://qiita.com/api/v2/',
  headers,
});

const actions = {
  fetchNewArticles: (ctx, { page, query }) => {
    ctx.commit('setLoading');

    axios
      .get('/items', {
        params: {
          page,
          per_page: LIMIT,
          query: query || undefined,
        },
      })
      .then(response =>
        ctx.commit('setNewArticles', {
          data: response.data,
          page,
          limit: LIMIT,
          query,
        }),
      );
  },

  fetchCurrentArticle: (ctx, { articleId }) => {
    ctx.commit('setLoading');

    axios
      .get(`/items/${articleId}`)
      .then(response =>
        ctx.commit('setCurrentArticle', { data: response.data }),
      );
  },
};

export default actions;
