import Vue from 'vue';
import Vuex from 'vuex';
import { UserStore } from './modules/user.vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        ...extractVuexModule(UserStore)
    }
});

export const globalStore = {
    user: createProxy(store, UserStore)
};
