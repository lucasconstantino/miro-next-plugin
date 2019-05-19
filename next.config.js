const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack: config => {
    config.externals = {
      'miro-sdk': 'rtb'
    }

    return config
  }
})
