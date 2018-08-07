# nuxt-with-gritty

> Nuxt.js project

## Modified Files
- gritty.patch    # to patch gritty frontend.js, make it can be required via webpack
- io/index.js     # socket.io with gritter server side configuration
  - Reference:
    - [gritty usage as middleware](https://www.npmjs.com/package/gritty#usage-as-middleware)
    - [nuxt.js with socket.io sample code](https://github.com/nuxt/nuxt.js/blob/master/examples/with-sockets/io/index.js)
- nuxt.config.js  # add io module and gritty vender
- package.json    # add postinstall command and gritty module
- pages/index.vue # main page (where gritty vender is included)
  - Reference:
    - [gritty client api](https://www.npmjs.com/package/gritty#client-api)

## Build Setup

``` bash
# install dependencies (will also apply gritty.patch)
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
