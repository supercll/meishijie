import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import {getClassify} from '@/service/api'

let store = new Vuex.Store({
  state:{
    classify: []
  },
  mutations: {
    changeClassify(state, data){
      state.classify = data;
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