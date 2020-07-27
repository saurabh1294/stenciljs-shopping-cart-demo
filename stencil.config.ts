import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'shopping-cart',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  },
  bundles: [
    { components: ['stencil-shopping-cart-view'] }
  ],
  buildEs5: true,
  minifyJs: true,
  minifyCss: true
};
