// next.config.js
// either from default
// const NextFederationPlugin = require('@module-federation/nextjs-mf').default;
// or named export
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next2',
        remotes: {
          next1: `next1@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nav': './components/Nav.js',
          // './add': './utils/Add.js',
          './ListingPage': './pages/ListingPage.js',
          './ListingCard': './components/ListingCard.js',
          './TextFilter': './components/TextFilter.js'
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
