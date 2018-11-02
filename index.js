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

    async _getAddressInfo(address) {
        return await this.address.getBalance({
            address: address
        })
    }

    async getBalance(address) {
        let balance = await this._getAddressInfo(address)
        return balance.balance
    }

    async sendTransaction({privateKey, from, to, amount, fee}) {
        return await this.transaction.signedtx({
            privateKey: privateKey, 
            from: from, 
            to: to, 
            amount: amount, 
            fee: fee,
            addressInfo: await this._getAddressInfo(from)
        })
    }

    async getTransaction({txHash}) {
        let tx = await this.transaction.getTransaction({txHash: txHash})

        if(tx.status && tx.status != 200) {
            throw Error(JSON.stringify(tx))
        }

        return tx
    }
}

module.exports = Hycon;