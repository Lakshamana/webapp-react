# @fh-webapp
 FanHero's browser-based brand-app client.

## Access the project on: 
- [marvel - develoment] https://marvel-dev.fanhero.tv
- [valetudo - develoment] https://valetudo.fanhero.tv
- [heroflix - develoment] https://heroflix-dev.fanhero.tv
- [herotube - develoment] https://herotube-dev.fanhero.tv
- [spacex - staging] https://spacex-stg.fanhero.tv
- [storybook - components library] https://storybook.fanhero.net/?path=/story/introduction--page

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
- [node](https://nodejs.org) `nvm install --lts`
- [yarn](https://www.npmjs.com/package/yarn?activeTab=versions) `npm i -g yarn`

### [Important] Add the necessary env vars
- Env vars for development/staging/production are on .env.example


## Available Scripts

```
yarn setup
```

Install project dependencies.


```
yarn dev
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```
yarn storybook
```

Runs the app storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
