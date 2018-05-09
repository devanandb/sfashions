import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function atore () {
    return new Vuex.Store({
        state: {
            categories: []
        },
        actions: {
            getCategories({commit}) {
                let data = JSON.parse(fs.readFileSync('static/data.json', 'utf8'));
                // return { authors: data };
                return categories = data.data.allCategories;
            }
        },
        mutations: {
            SET_CATEGORIES (state, categories) {
                state.categories = categories
            }
        }
    })
}