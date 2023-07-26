import { createStore } from "vuex";
import axios from "axios";
import { FIREBASE_API_KEY } from "@/config/firebase";

const store = createStore({
  state: {
    userId: null,
    token: null,
  },

  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
  },

  actions: {
    signup(context, payload) {
      const signupDO = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      return axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
          signupDO
        )
        .then((response) => {
          console.log(response.status);
          context.commit("setUser", {
            userId: response.data.localId,
            token: response.data.idToken,
          });
        })
        .catch((error) => {
          const errorMessage = new Error(
            error.response.data.error.message || "UNKNOWN_ERROR"
          );
          throw errorMessage;
        });
    },
  },
  getters: {},
});

export default store;
