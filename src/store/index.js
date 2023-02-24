import { createStore } from 'vuex';
import axios from 'axios';
const apiLink = "https://api-with-hashing-and-jwt.onrender.com";

export default createStore({
  state: {
    users: null,
    user:null,
    product:null,
    products:null,
    showSpinner:true,
    message:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,values){
      state.users = values
    },
    setUser(state,value){
      state.user = value
    },
    setProducts(state,values){
      state.products = values
    },
    setProduct(state, value){
      state.product = value
    },
    setSpinner(state,value){
      state.showSpinner = value
    },
    setMessage(state,value){
      state.message = value
    }

  },
  actions: {
    async login(context,payload){
      const res = await axios.post(`${apiLink}/login`, payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('setUser', result);
      } else {
        context.commit('setMessage', err);
      }
    },

    async register(context,payload){
      const res = await axios.post(`${apiLink}/register`, payload);
      const {msg, err} = await res.data;
      if(msg){
        context.commit('setUsers', msg)
      } else {
        context.commit('setMessage', err);
      }
    },

    async fetchUsers(context){
      const res = await axios.get(`${apiLink}/users`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results)
        console.log(results)
      } else {
        context.commit('setMessage', err)
        // console.log(err)
      }
    }

  },
  modules: {
  }
})
