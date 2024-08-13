const base = require('./base/base')

class Custumer extends base {
  constructor({ id, name, age}) {
    super({ id, name })

    this.age = age
  }
}

module.exports = Custumer