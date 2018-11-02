let rq = require('request-promise')

class Transaction {
    constructor(providerUrl) {
        this.providerUrl = providerUrl
    }

    async _getNonce(addressInfo) {
        
        let nonce ;

        if( addressInfo.pendings.length ){
            nonce = addressInfo.pendings[addressInfo.pendings.length - 1].nonce + 1
        } else {
           nonce = addressInfo.nonce + 1
        }

        return nonce

    }

    async signedtx({privateKey, from, to, amount, fee, addressInfo}) {

        let option = {
            uri: this.providerUrl + "/api/v1/signedtx",
            body: {
                privateKey: privateKey,
                from: from,
                to: to,
                amount: amount,
                fee: fee,
                nonce: await this._getNonce(addressInfo)
            },
            method: "POST",
            json: true // Automatically parses the JSON string in the response
        };

        let txHash = await rq(option)

        return txHash
    }

    async getTransaction({txHash}) {
        let option = {
            uri: `${this.providerUrl}/api/v1/tx/${txHash}`,
            method: "GET",
            json: true // Automatically parses the JSON string in the response
        };
        
        let tx = await rq(option)

        return tx
    }
}

module.exports = Transaction;