const utils = require('blue-utils');

class BlueAlias {
  constructor() {
    this.alias = {};
  }

  setAlias(alias = {}) {
    utils.each(alias, (path, name) => {
      this.alias[name] = path;
    });
  }

  getAlias(name) {
    return this.alias[name];
  }

}

module.exports = BlueAlias;