const rq = require('request-promise')

class Address{
    constructor(providerUrl) {
        this.providerUrl = providerUrl
        this.language = 'english'
    }

    async _getMnemonic() {
        let option = {
            uri: `${this.providerUrl}/api/v1/getMnemonic/${this.language}`,
            method: "GET",
            json: true // Automatically parses the JSON string in the response
        };
        
        let mnemonic = await rq(option)
        
        return mnemonic
    }
    
    async generateWallet({name, hint, password}) {
        let option = {
            uri: this.providerUrl + "/api/v1/wallet",
            method: "POST",
            body: {
                mnemonic: await this._getMnemonic(),
                name: name,
                hint: hint,
                password: password,
                language: this.language
            },
            json: true // Automatically parses the JSON string in the response
        };

        let gereratedWallet = await rq(option)

        return gereratedWallet
    }

    async getBalance({address}){
        let option = {
            uri: `${this.providerUrl}/api/v1/address/${address}`,
            method: "GET",
            json: true // Automatically parses the JSON string in the response
        };

        let balance = await rq(option)

        return balance
    }
}

module.exports = Address;