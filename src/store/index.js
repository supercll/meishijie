import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import {getClassify, userInfo} from '@/service/api'

let store = new Vuex.Store({
  state:{
    classify: [],
    userInfo: {},
    loginAfterInfo: {}, // 点击登录后，拿到一些信息，重要的是_id和token
    isLogin: false // 是否登录
  },
  mutations: {
    changeClassify(state, data){
      state.classify = data;
    },
    changeLogin(state, status){
      state.isLogin = status;
    },
    changeUserInfo(state, info){
      state.userInfo = info;
    },
    changeLoginAfterInfo(state, info){
      state.loginAfterInfo = info;
    }
  },
  actions: {
    async classifyAction({commit}){
      let data = (await getClassify()).data;
      commit('changeClassify', data);
    },
    async userInfoAction({commit, state}){
      let data = (await userInfo());
      if(data.code !== 0){
        localStorage.removeItem('token');
        commit('changeLogin', false);
        return false;
      }
      // 登录还在有效期
      commit('changeUserInfo', data.data);
      commit('changeLogin', true);
      return true;
    }
  }
})

export default store;