import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
    }),
  ],
  map: false,
};
