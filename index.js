let Address = require('./lib/address')
let Transaction = require('./lib/transaction')
let Block = require('./lib/block')

class Hycon {
    constructor(providerUrl) {
        if (!providerUrl) {
            throw Error("providerUrl empty")
        }

        this.providerUrl = providerUrl
        this.address = new Address(this.providerUrl)
        this.transaction = new Transaction(this.providerUrl)
        this.block = new Block(this.providerUrl)
    }

    set setProvider(providerUrl) {
        if (!providerUrl) {
            throw Error("providerUrl empty")
        }

        this.providerUrl = providerUrl
        this.address = new Address(this.providerUrl)
        this.transaction = new Transaction(this.providerUrl)
        this.block = new Block(this.providerUrl)
    }

    get getProvider() {
        return this.providerUrl
    }

    async newAccount({name, hint, password}) {
        if (!name || !hint || !password) {
            throw Error("params insufficiency")
        }

        return await this.address.generateWallet({
            name: name,
            hint: hint,
            password: password
        })
    }

    async getBalance(address) {
        return await this.address.getBalance({address: address})
    }

}

module.exports = Hycon;