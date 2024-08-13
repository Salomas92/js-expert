const base = require('./base/base')

class CarCustumer extends base {
  constructor({ id, name, carIds, price }) {
    super({ id, name })

    this.carIs = carIds
    this.price = price
  }
}

module.exports = CarCustumer