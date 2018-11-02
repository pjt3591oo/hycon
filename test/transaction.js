let Hycon = require('..')

 // hycon 노드연결 객체 생성
let hycon = new Hycon('http://127.0.0.1:2442');

function sleep(ms){
    ts1 = new Date().getTime() + ms;
    do ts2 = new Date().getTime(); while (ts2<ts1);
  }
  
(async () => {
  
    try {

        let wallet = await hycon.newAccount({
            name: "tttttt",
            hint: "test",
            password: "tttttt"
        }) // 지갑생성

        let txHash = await hycon.sendTransaction({
            privateKey: "e80d70c64c6917f5d2dd083ebabf307647c749c7685e6f1f2dd82eb0c1573490",
            from: "HNw2nrmkXdpE8sCD26VyMvjLg5RsBRUY",
            to: wallet.address,
            amount:10,
            fee: 1
        }) // 생성된 지갑으로 트랜잭션 발생트랜잭션 발생

        // 바로 txHash를 조회하면 조회안됨(pending 중인 트랜잭션 조회안됨)
        await sleep(30000)
        let tx = await hycon.getTransaction({txHash: txHash.txHash})

        console.log(tx)
    } catch (err) {
        console.log(err)
    }

})()