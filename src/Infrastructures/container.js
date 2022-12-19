/* istanbul ignore file */

const { Lifetime } = require('awilix');
const awilix = require('awilix');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

container.loadModules([
  [
    './database/postgres/pool.js', '../Interfaces/http/api/routes/*.js',
    {
      formatName: 'camelCase',
      register: awilix.asFunction,
      lifetime: Lifetime.SINGLETON,
    },
  ],
  '../Applications/**/*.js', '../Domains/**/*.js',
  '../Domains/**/**/*.js', '../Interfaces/http/api/handlers/*.js',
], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: awilix.asClass,
  },
});

module.exports = container;
