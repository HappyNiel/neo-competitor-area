import Vue from 'vue';
import Vuex from 'vuex';
import { userStore, UserStore } from './modules/user.vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        userStore
    }
});

export const globalStore = {
    user: UserStore.CreateProxy( store, UserStore ) as UserStore
};
