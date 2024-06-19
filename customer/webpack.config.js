const path = require('path');

module.exports = {
  entry: './src/index.js', // Ensure this path is correct
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Include .jsx if you use JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve both .js and .jsx files
  },
  devtool: 'source-map', // Optional: useful for debugging
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000 // Adjust the port as necessary
  }
};
