const path = require('path')
const webpack = require('webpack')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack: (config, { isServer }) => {
    // Resolve Miro SDK library.
    if (isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /miro-sdk/,
          path.resolve(__dirname, './src/__mocks__/miro-sdk.js')
        )
      )
    } else {
      config.externals = {
        'miro-sdk': 'rtb'
      }
    }

    return config
  }
})
