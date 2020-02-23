module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base','prettier'], //Fora acrescentado o prettier e criada uma propriedade plugins
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", //Linhas muito grandes apresentam erro
    "class-methods-use-this": "off", //não utilizar o this sempre dentro de uma classe
    "no-param-reassign": "off", // receber um parametro e fazer modificação
    "camelcase": "off", //desabilitar o eslint que o nome de vatiaveis sempre estejam em camelcase
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],// remover o erro em relação a variavel next que pode não ser usada em alguns casos
  },
};
