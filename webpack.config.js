const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "production",

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      filename: "manifest.json",
      fingerprints: false,
      inject: false,
      name: "Budget Tracker",
      short_name: "BudgetTracker",
      description: "An application to track your apps",
      background_color: "#c0392b",
      theme_color: "#34495e",
      start_url: "/",
      display: "standalone",
      icons: [{
        src: path.resolve("public/icons/icon-192x192.png"),
        sizes: [192, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;