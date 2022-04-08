module.exports = {
  '*.{js,jsx,ts,tsx}': ['', ''],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': [''],
};
