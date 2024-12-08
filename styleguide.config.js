const webpack = require('webpack');
const {version, name} = require('./package');
const path = require('path');

module.exports = {
  title: name,
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content:
            'react-custom-search-list : A customizable React search input component with dynamic popup suggestions, allowing developers to create unique search experiences.',
        },
      ],
    },
  },
  getComponentPathLine(componentPath) {
    return ``;
  },
  components: 'example/stories/**/*.{jsx,js,tsx}',
  moduleAliases: {
    'react-custom-search-list': path.resolve(__dirname, './'),
  },
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/dev-javascript/react-custom-search-list',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub',
  },
  styleguideDir: 'demo',
  require: [
    path.join(__dirname, './example/stories/styles.css'),
    path.join(__dirname, './example/stories/font-awesome-4.7.0/css/font-awesome.min.css'),
  ],
  // assetsDir: "example/stories/assets",
  sections: [
    {
      name: 'Constant Suggestions List',
      content: 'example/stories/constant-suggestions-list/README.md',
      sectionDepth: 1,
    },
    {
      name: 'Dynamic Suggestions List',
      content: 'example/stories/dynamic-suggestions-list/README.md',
    },
    {
      name: 'Panel Theme',
      content: 'example/stories/panel-theme/README.md',
    },
    {
      name: 'Underline Theme',
      content: 'example/stories/underline-theme/README.md',
    },
  ],
  styleguideComponents: {},
  pagePerSection: true,
  defaultExample: true,
  usageMode: 'expand',
  version,
  webpackConfig: {
    plugins: [
      new webpack.DefinePlugin({
        process: {
          env: JSON.stringify({
            ...process.env,
          }),
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
      noParse: /\.(scss)/,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.json'],
    },
  },
};
