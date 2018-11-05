let Hycon = require('..')

 // hycon 노드연결 객체 생성
let hycon = new Hycon('http://127.0.0.1:2442');

(async () =>{
    try {
        let wallet = await hycon.newAccount({
            name: "tttttt",
            hint: "test",
            password: "tttttt"
        })
        console.log(wallet)
        
        let balance = await hycon.getBalance("HNw2nrmkXdpE8sCD26VyMvjLg5RsBRUY")
        console.log(balance)

        let txs1 = await hycon.getTxsOfAddress({
            address: "HNw2nrmkXdpE8sCD26VyMvjLg5RsBRUY",
            pagination: 1
        })
        console.log(txs1)

    } catch (err) {
        console.log(err)
    }
})()
