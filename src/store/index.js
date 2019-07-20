import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import {getClassify} from '@/service/api'

let store = new Vuex.Store({
  state:{
    classify: [],
    isLogin: !!localStorage.getItem('token') // 是否登录
  },
  mutations: {
    changeClassify(state, data){
      state.classify = data;
    },
    changeLogin(state, status){
      state.isLogin = status;
    }
  },
  actions: {
    async classifyAction({commit}){
      let data = (await getClassify()).data;
      commit('changeClassify', data);
    }
  }
})

export default store;