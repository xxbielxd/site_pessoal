const path = require('path');

module.exports = {
  entry: './js/src/index.js', // Arquivo JS de entrada
  output: {
    filename: 'bundle.js', // Nome do arquivo JS de saída
    path: path.resolve(__dirname, 'js/dist'), // Pasta de saída para o JS
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Regra para processar CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true, // Habilita o modo watch
  mode: 'development', // Ambiente de desenvolvimento
};