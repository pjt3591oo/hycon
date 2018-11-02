let Hycon = require('..')

try {
    
    // hycon 노드연결 객체 생성
    let hycon = new Hycon('http://127.0.0.1:2442')
    // 연결정보 가져오기
    console.log(hycon.getProvider) 

    // hycon 노드변경
    hycon.setProvider = 'http://127.0.0.1:2443' 
    // 연결정보 가져오기
    console.log(hycon.getProvider)

} catch (err) {
    console.log(err)
}

