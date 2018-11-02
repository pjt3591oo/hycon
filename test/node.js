let Hycon = require('..')

try {
    // hycon 노드연결 객체 생성
    let hycon = new Hycon('http://52.231.153.50:8148')
    // 연결정보 가져오기
    console.log(hycon.getProvider) 

    // hycon 노드변경
    hycon.setProvider = 'http://52.231.153.50:8149' 
    // 연결정보 가져오기
    console.log(hycon.getProvider)

} catch (err) {
    console.log(err)
}

