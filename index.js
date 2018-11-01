let address = require('./lib/address')
let transaction = require('./lib/transaction')
let block = require('./lib/block')

class Hycon {
    constructor(providerUrl) {
        this.providerUrl = providerUrl
    }
}

module.exports = Hycon;