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

const LIMIT = 20;

const state = {
  articles: {
    data: [],
    next: 1,
  },
  articlePage: 1,
  current: {},
};
const getters = {
  newArticles: state => state.articles,
  currentArticle: state => state.current,
};
const mutations = {
  setNewArticles: (state, payload) => {
    state.articles.data = [...state.articles.data, ...payload.response.data];
    if (payload.response.data.length === LIMIT) {
      state.articles.next += 1;
    } else {
      state.articles.next = 0;
    }
  },
  setCurrentArticle: (state, payload) => {
    state.current = payload.data;
  },
};
const actions = {
  fetchNewArticles: ctx => {
    const page = ctx.state.articles.next;
    axios
      .get(`/items?page=${page}&per_page=${LIMIT}`)
      .then(response => ctx.commit('setNewArticles', { response, page }));
  },

  // dummy
  fetchDummyNewArticles: ctx => {
    ctx.commit('setNewArticles', { response: { data: [dummyData] }, page });
    return;
  },

  fetchCurrentArticle: (ctx, { articleId }) => {
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
