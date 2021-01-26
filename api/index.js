require('dotenv').load({ path: './.env' });
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const keystone = require('./config/keystone')
const graphQLApp = require('./config/graphql')

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User'
});

module.exports = {
  keystone,
  apps: [
    graphQLApp,
    new AdminUIApp({
      adminPath: '/admin',
      apiPath: '/api',
      graphiqlPath: '/admin/graphiql',
      authStrategy,
      isAccessAllowed: ({ authentication: { item: user} }) => !!user && !!user.isAdmin
    })
  ],
  configureExpress: app => {
    app.set('trust proxy', true);
    return app
  },
};
