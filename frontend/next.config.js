require('dotenv').config({ path: './.env' })
const withImages = require('next-images')
const _ = require('lodash')

module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) {
      // config.module.rules.push({
      //   test: /\.(j|t)sx?$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // })
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'http://localhost:3030/admin/:path*'
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:3030/api/:path*'
      }
    ];
  },
  env: {
    // 'MAILER_PASSWORD': process.env.MAILER_PASSWORD
  }
})