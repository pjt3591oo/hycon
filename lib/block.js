const rq = require('request-promise')

class Block{

    constructor(providerUrl) {
        this.providerUrl = providerUrl
    }

    async getBlock({height}) {
        let option  = {
            uri: `${this.providerUrl}/api/v1/block/height/${height}`,
            method: "GET",
            json: true // Automatically parses the JSON string in the response
        };

        let d = await rq(option)

        return d
    }

    async getBlocks({pagination}) {
        let option = {
            uri: `${this.providerUrl}/api/v1/blockList/${pagination}`,
            method: "GET",
            json: true // Automatically parses the JSON string in the response
        };

        let d = await rq(option)

        return d
    }

}

module.exports = Block;