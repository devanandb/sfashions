import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import fs from 'fs'

Vue.use(Vuex);

const state = {
    categories: []
}

const mutations = {
    SET_CATEGORIES (state, categories) {
        state.categories = categories
    }
}

const actions = {
    getCategories(context) {
        // let data = JSON.parse(fs.readFileSync('static/data.json', 'utf8'));
        let data = axios.get(process.env.baseURL + '/data.json')
          .then((res) => {
            // console.log(res)
                let categories = res.data.data.allCategories;
                context.commit('SET_CATEGORIES', categories);
          });
        
    }
}


const store = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions
    })
}

export default store