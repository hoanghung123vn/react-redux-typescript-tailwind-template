import {i18n} from './i18next.js';

export const parameters = {
  i18n,
  locale: 'vi',
  locales: {
    vi: 'Vietnam',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}