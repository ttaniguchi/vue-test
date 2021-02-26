import Vue from 'vue';
import Vuex from 'vuex';
import axiosBase from 'axios';
import 'es6-promise/auto';

import dummyData from '@/dummy/article.json';

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

Vue.use(Vuex);

const LIMIT = 100;

const state = {
  articles: {
    data: [],
    next: 1,
  },
  articleKeys: {},
  articlePage: 1,
  current: {},
  loading: false,
};
const getters = {
  newArticles: state => state.articles,
  currentArticle: state => state.current,
  isLoading: state => state.loading,
};
const mutations = {
  setNewArticles: (state, payload) => {
    payload.response.data.forEach(row => {
      // 重複した記事を弾く
      if (!state.articleKeys[row.id]) {
        state.articles.data.push(row);
        state.articleKeys[row.id] = true;
      }
    });
    if (payload.response.data.length === LIMIT) {
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
const actions = {
  fetchNewArticles: ctx => {
    ctx.commit('setLoading');

    const page = ctx.state.articles.next;
    axios
      .get(`/items?page=${page}&per_page=${LIMIT}`)
      .then(response => ctx.commit('setNewArticles', { response, page }));
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

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
