import axiosBase from 'axios';
import dummyData from '@/dummy/article.json';

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
  fetchNewArticles: ctx => {
    ctx.commit('setLoading');

    const page = ctx.state.articles.next;
    axios
      .get(`/items?page=${page}&per_page=${LIMIT}`)
      .then(response =>
        ctx.commit('setNewArticles', { response, page, limit: LIMIT }),
      );
  },

  // dummy
  fetchDummyNewArticles: ctx => {
    ctx.commit('setLoading');

    ctx.commit('setNewArticles', { response: { data: [dummyData] }, page });
    return;
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
