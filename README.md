## steps to set up vue3 + vite + tailwind + vuex + vue router
Create Vite App
npm init @vitejs/app project-name

## Install Tailwind + dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

## Install Vue Router
npm install vue-router@4

## Install Vuex
npm install vuex@next --save

## Install ESLint + Prettier
npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier


## eslint config
.eslintrc.js:
module.exports = {
extends: [
  'plugin:vue/vue3-essential',
  'prettier',
],
rules: {
  // override/add rules settings here, such as:
  'vue/no-unused-vars': 'error',
},
}


## prettier config
.prettierrc.js:
module.exports = {
    semi: false,
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    endOfLine: 'auto',
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
  }