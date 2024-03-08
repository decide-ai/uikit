const path = require('path');

module.exports = {
  entry: './components/index.ts', // Adjust this path to your actual entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // Changed from '[name].js' to 'index.js'
    library: {
      name: 'uikit-component',
      type: 'umd',
    },
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader',   // Translates CSS into CommonJS
          'less-loader'   // Compiles Less to CSS
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Add other loaders here (e.g., for CSS, images)
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  }
};