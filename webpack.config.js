const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Inyecta CSS al DOM con la etiqueta <style>
            loader: 'style-loader'
          },
          {
            // Interpreta @import y url() como import/require()
            loader: 'css-loader'
          },
          {
            // Loader de Webpack para procesar CSS con PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Carga un archivo Sass/Scss y lo compila a CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};