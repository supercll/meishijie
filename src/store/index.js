import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import {getClassify, userInfo} from '@/service/api'

let store = new Vuex.Store({
  state:{
    classify: [],
    userInfo: {},
    loginAfterInfo: {}, // 点击登录后，拿到一些信息，重要的是_id和token
    isLogin: !!localStorage.getItem('token') // 是否登录
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
      console.log({userId: state.loginAfterInfo._id})
      let data = (await userInfo({userId: state.loginAfterInfo._id})).data;
      commit('changeUserInfo', data);
    }
  }
})

store.watch((state) => {
  return state.isLogin
}, (newValue, oldValue) => {
  if(newValue){
    if(!store.state.userInfo.name){
      // 发送请求，那数据
      store.dispatch('userInfoAction')
    }
  }else {
    store.commit('changeUserInfo', {});
  }
})

export default store;