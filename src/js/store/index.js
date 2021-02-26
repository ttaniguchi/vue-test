import Vue from 'vue';
import Vuex from 'vuex';
import axiosBase from 'axios';
import 'es6-promise/auto';

import dummyData from '@/dummy/article.json';

const axios = axiosBase.create({
  baseURL: 'https://qiita.com/api/v2/',
});

Vue.use(Vuex);

const LIMIT = 20;

const state = {
  articles: [],
  articlePage: 1,
};
const getters = {
  newArticles: state => state.articles,
};
const mutations = {
  setNewArticles: (state, payload) => {
    if (payload.response.data.length > 0) {
      state.articles = payload.response.data;
      state.articlePage = payload.page;
    }
  },
};
const actions = {
  fetchNewArticles: (ctx, page = 1) => {
    axios
      .get(`/items?page=${page}&per_page=${LIMIT}`)
      .then(response => ctx.commit('setNewArticles', { response, page }));
  },

  // dummy
  fetchDummyNewArticles: (ctx, page = 1) => {
    ctx.commit('setNewArticles', { response: { data: [dummyData] }, page });
    return;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
