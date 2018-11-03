let Hycon = require('..')

 // hycon 노드연결 객체 생성
let hycon = new Hycon('http://52.231.153.50:2442');

(async () =>{
    try {
        
        let blockInfo0 = await hycon.getBlock({
            height: 1
        })

        let blockInfo1 = await hycon.getBlocks({
            pagination: 0
        })
        
        console.log(blockInfo1)
        console.log(blockInfo0)
    } catch (err) {
        console.log(err)
    }
})()
