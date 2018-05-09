import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function store () {
    return new Vuex.Store({
        state: {
            categories: []
        },
        actions: {
            getCategories({commit}) {
                let data = {
    "data": {
        "allCategories": [{
                "name": "Earrings",
                "description": "Checkout the latest style in earrings and get the trendiest designs",
                "products": [],
                "popular": true,
                "slug": "earrings",
                "id": "cjgwwh946y2yh016365im05lk"
            },
            {
                "name": "Fashion Jewellery",
                "description": "Find trendy fashion jewellery including must-have choker necklaces, earrings, bracelets, and rings.",
                "products": [],
                "popular": false,
                "slug": "fashion-jewellery",
                "id": "cjgwwmhqlxxu40152rq6g834a"
            },
            {
                "name": "Gold Plated",
                "description": "A truly classic hue, gold is the epitome of extravagance. Gold symbolizes prosperity and prestige, sophistication and elegance. With both timeless and contemporary styles, this collection emanates richness and warmth.",
                "products": [{
                    "name": "Gold Plated Bangles - Set of 8",
                    "description": "<p>Gold Plated Bangles - Set of 8</p>",
                    "slug": "gold-plated-bangles-set-of-8",
                    "code": "SFB001",
                    "id": "cjgxbj6yn0x180175ev0fmtla",
                    "cost": 200,
                    "category": {
                        "name": "Gold Plated",
                        "slug": "gold-plated"
                    },
                    "material": [
                        "Non_Precious_Metal"
                    ],
                    "sizes": {
                        "value": [
                            2.4,
                            2.6,
                            2.8
                        ]
                    },
                    "images": [{
                        "url": "sfb001.jpg",
                        "title": "SFB001"
                    }],
                    "occasion": [
                        "Ethnic"
                    ]
                }],
                "popular": false,
                "slug": "gold-plated",
                "id": "cjgwwp1s0yqe70184gxqbg66t"
            },
            {
                "name": "Hairbands",
                "description": "Complete your hairstyle and accessorize your look with headbands, hair clips, hair ties and more from top hair brands.",
                "products": [],
                "popular": true,
                "slug": "hairbands",
                "id": "cjgwwrozaxz750152pqel145e"
            },
            {
                "name": "Oxidized Jewellery",
                "description": "Trendy Oxidized Jewelry. Oxidized jewelry is created by oxidizing metals to create a distinctive antique look for silver, though gold, copper and other alloys are also be used. The burnished metal effect adds a unique earthy charm to any outfit.",
                "products": [],
                "popular": false,
                "slug": "oxidized-jewellery",
                "id": "cjgwwtogfyuhz015067ocuqki"
            }
        ]
    }
};
                // return { authors: data };
                console.log(data);
                let categories = data.data.allCategories;
                return categories;
            }
        },
        mutations: {
            SET_CATEGORIES (state, categories) {
                state.categories = categories
            }
        }
    })
}