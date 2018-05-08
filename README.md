# sfashions

> eCommerce site for corporate products and jewelry.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

## Graphql query

{
  allCategories {
    id
    name
    description
    slug
    popular
    products {
      id
      name
      slug
      code
      cost
      description
      material
      occasion
      category {
        name
        slug
      }
      images {
        url
        title
      }
      sizes {
        value
      }
    }
  }
}

