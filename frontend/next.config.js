require('dotenv').config({ path: '.env' })
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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/admin/:path*',
  //       destination: `http://${process.env.API_URL}/admin/:path*`
  //     },
  //     {
  //       source: '/api/:path*',
  //       destination: `http://${process.env.API_URL}/api/:path*`
  //     }
  //   ];
  // },
  env: {
    'HOST_URL': process.env.HOST_URL,
    'API_URL': process.env.API_URL,
  }
})
