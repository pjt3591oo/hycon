# Hycon Library

해당 라이브러리는 하이콘 연동을 위한 라이브러리 입니다.

## Table Of Contents

* [Installation](#Installation)
* [Start](#Start)

## Installation

```bash
$ npm install --save hycon/library

# 다음 라이브러리가 필요합니다.
$ npm install --save request-promise
```

## Start

#### hycon 노드연결

```javascript
let Hycon = require('hycon')

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
```