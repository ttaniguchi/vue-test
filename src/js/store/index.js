import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import 'es6-promise/auto';

Vue.use(Vuex);

const state = {
  data: [],
};
const getters = {
  list: state => state.data,
};
const mutations = {
  getList: (state, payload) => {
    state.data = payload;
  },
};
const actions = {
  getList: ctx => {
    axios
      .get('https://qiita.com/api/v2/items?page=1&per_page=20')
      .then(response => ctx.commit('getList', response.data));
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
