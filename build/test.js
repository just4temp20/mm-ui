// 样式
webpackConfig.module.rules = [
  {
    "test": /\.css$/,
    "use": [
      {
        "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
        "options": {
          "omit": 1,
          "remove": true,
          "publicPath": "../"
        }
      },
      {"loader": "vue-style-loader"},
      {"loader": "css-loader", "options": {"minimize": true, "sourceMap": false}},
      {"loader": "postcss-loader", "options": {"sourceMap": false}}
    ]
  },
  {
    "test": /\.postcss$/,
    "use": [
      {
        "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@  3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
        "options": {"omit": 1, "remove": true, "publicPath": "../"}
      },
      {"loader": "vue-style-loader"},
      {
        "loader": "css-loader",
        "options": {"minimize": true, "sourceMap": false}
      },
      {"loader": "postcss-loader", "options": {"sourceMap": false}}
    ]
  },
  {
    "test": /\.less$/,
    "use": [{
      "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
      "options": {"omit": 1, "remove": true, "publicPath": "../"}
    }
      , {"loader": "vue-style-loader"}, {
        "loader": "css-loader",
        "options": {"minimize": true, "sourceMap": false}
      }, {"loader": "postcss-loader", "options": {"sourceMap": false}}, {
        "loader": "less-loader",
        "options": {"sourceMap": false}
      }]
  },
  {
    "test": /\.sass/,
    "use": [{
      "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
      "options": {"omit": 1, "remove": true, "publicPath": "../"}
    }, {"loader": "vue-style-loader"}, {
      "loader": "css-loader",
      "options": {"minimize": true, "sourceMap": false}
    }, {"loader": "postcss-loader", "options": {"sourceMap": false}}, {
      "loader": "sass-loader",
      "options": {"indentedSyntax": true, "sourceMap": false}
    }]
  },
  {
    "test": /\.scss/,
    "use": [
      {
        "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
        "options": {"omit": 1, "remove": true, "publicPath": "../"}
      },
      {
        "loader": "vue-style-loader"
      },
      {"loader": "css-loader", "options": {"minimize": true, "sourceMap": false}},
      {
        "loader": "postcss-loader",
        "options": {"sourceMap": false}
      },
      {"loader": "sass-loader", "options": {"sourceMap": false}}
    ]
  },
  {
    "test": /\.stylus/,
    "use": [
      {
        "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
        "options": {"omit": 1, "remove": true, "publicPath": "../"}
      },
      {"loader": "vue-style-loader"},
      {
        "loader": "css-loader",
        "options": {"minimize": true, "sourceMap": false}
      },
      {"loader": "postcss-loader", "options": {"sourceMap": false}},
      {
        "loader": "stylus-loader",
        "options": {"resolve url": true, "sourceMap": false}
      }
    ]
  },
  {
    "test": /\.styl/,
    "use": [{
      "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
      "options": {"omit": 1, "remove": true, "publicPath": "../"}
    }, {"loader": "vue-style-loader"}, {
      "loader": "css-loader",
      "options": {"minimize": true, "sourceMap": false}
    }, {"loader": "postcss-loader", "options": {"sourceMap": false}}, {
      "loader": "stylus-loader",
      "options": {"resolveurl": true, "sourceMap": false}
    }]
  }
]

// vue
webpackConfig.module.rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        scss: [
          {
            "loader": "G:\\MyProject2\\00_UI框架\\mm-ui\\node_modules\\_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin\\dist\\loader.js",
            "options": {"omit": 1, "remove": true, "publicPath": "../"}
          },
          {
            "loader": "vue-style-loader"
          },
          {"loader": "css-loader", "options": {"minimize": true, "sourceMap": false}},
          {
            "loader": "postcss-loader",
            "options": {"sourceMap": false}
          },
          {"loader": "sass-loader", "options": {"sourceMap": false}}
        ]
      },
      transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
      }
    }
  }
]
