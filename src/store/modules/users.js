import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'user-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    //To access to the root state you need the third param
    foo(state, getters, rootState) {
      return `users-getter/${state.foo}`;
    }
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      console.log('Hello from user')
    }
  },
};