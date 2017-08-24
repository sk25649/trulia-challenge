# Trulia Front End Engineer Challenge

This project uses following tech stacks:
* [React](https://github.com/facebook/react)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Babel 6](http://babeljs.io)
* [Webpack](http://webpack.github.io) for bundling
* [style-loader](https://github.com/webpack-contrib/style-loader)
* [Sass-loader](https://github.com/webpack-contrib/sass-loader)
* [Json-loader](https://webpack.js.org/loaders/json-loader/) for mimicing API response
* [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
* [React Transform](https://github.com/gaearon/react-transform-hmr) for hot reloading React components in real time.

### Usage

```
npm install
npm start
Open http://localhost:3000
```
### Screenshots

### Decisions Made
- Data was given in two different json files so instead of creating an API end point to fetch those files, I simply used json-loader to mimic API payloads.
- Sample img didn't specify if sorting direction is required, so I implemented ascending and descending. Different sorting can be achieved by clicking on sort button again.
- Img is fixed to 150x150, but listing is flex.
- If image link isn't avilable, grey default image will be displayed.
- If square footage and built year are missing those will not be displayed but listing will still display.
- Address and Price are must have.

### Thoughts
- I was given batmanReality.json and supermanReality.json, but they were in two different format. Normally, you wouldn't use two APIs in different format for same type of data. This would be poor API design and poor contract between client and server.
