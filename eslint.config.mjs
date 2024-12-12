import eslint from 'eslint';

const config = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      env: {
        browser: true,
        node: true,
        es2022: true,
      },
    },
    rules: {
      // Özel kurallar burada yer alır
    },
  },
];

export default config;
