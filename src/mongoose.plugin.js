const find = require('./find');
const { extend } = require('lodash');

/**
 * Mongoose plugin
 * @param {Object} schema mongoose schema.
 * @param {Object} options
 * @param {string} options.name name of the function.
 */

module.exports = function (schema, options) {

  /**
   * paginate function
   * @param {Object} param required parameter
   */

  const paginate = function(param) {
    if (!this.collection) {
      throw new Error('collection property not found');
    }

    return find( this, extend({}, param));
  };

  if (options && options.name) {
    schema.statics[options.name] = paginate;
  } else {
    schema.statics.paginate = paginate;
  }
};
