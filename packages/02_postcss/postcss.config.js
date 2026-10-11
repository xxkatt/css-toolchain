import autoprefixer from 'autoprefixer';
import plugin from './src/postcss-plugin-swap-red.ts';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
    }),
    plugin({}),
  ],
  map: false,
};
