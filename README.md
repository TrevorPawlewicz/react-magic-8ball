### Using:
- __React.js v16__
- __live-server__: https://www.npmjs.com/package/live-server
- __Babel__: https://babeljs.io/
    - yarn add live-server babel-cli@6.24.1
- __Webpack__: https://webpack.js.org/
- __Validator__: https://www.npmjs.com/package/validator
- __React__: https://reactjs.org/
- __React-DOM__: https://reactjs.org/docs/react-dom.html  
- __React-modal__: https://github.com/reactjs/react-modal
 ---
 
 ### project specific:
 1) yarn init
 2) yarn add babel-preset-react@6.24.1
 3) yarn add babel-preset-env@1.5.2
 4) yarn add webpack@3.1.0
 5) yarn add validator@8.0.0
 6) yarn add react@16.0.0 react-dom@16.0.0
 7) yarn add babel-core@6.25.0 babel-loader@7.1.1
 8) yarn add webpack-dev-server@2.5.1
 9) yarn add babel-plugin-transform-class-properties@6.24.1
 10) yarn add react-modal@2.2.2
 11) yarn add style-loader@0.18.2 css-loader@0.28.4
 12) yarn add sass-loader@6.0.6 node-sass@4.5.3
 13) yarn add normalize.css@7.0.0
 
 ##### by using _local modules_, we can use package.json `scripts` to run live-server and babel in CLI tabs:
 - `yarn run serve`
 - `yarn run build`
 
 ```JSON
 "scripts": {
     "serve": "live-server public/",
     "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
 }
 ```
 
 #### `public` folder is for production code deployment -> transpile into this folder
 
 #### `src` folder is for development -> work in this folder
 
 ---
 
 
 #### _Ignored by JSX:_ they do not render to the page
 `undefined`
 `null`
 `true`
 `false`  
 
 ---
 
 ### Webpack
 
- `webpack.config.js` __NEEDS__ to live in the root project folder
- `webpack.config.js` is a Node script.

for webpack output paths, checkout:  
https://nodejs.org/api/path.html#path_path_join_paths

##### run webpack with the followinf script command we set up:
- `yarn run dev-server`

```JSON
"scripts": {
    "dev-server": "webpack-dev-server"
}
```


---

### babel

`@babel/plugin-proposal-class-properties`

https://babeljs.io/docs/en/babel-plugin-proposal-class-properties