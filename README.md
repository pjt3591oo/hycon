# Hycon Library

해당 라이브러리는 하이콘 연동을 위한 라이브러리 입니다.

## Table Of Contents

* [Installation](##Installation)
* [Node 연결](####node)
* [account](####account)
* [transaction](####transaction)
* [block](####block)

## Installation

```bash
$ npm install --save hycon/library

# 다음 라이브러리가 필요합니다.
$ npm install --save request
$ npm install --save request-promise
```

## Guide

#### node

```javascript
let Hycon = require('hycon')

try {
    // hycon 노드연결 객체 생성
    let hycon = new Hycon('http://127.0.0.1:2442')
    // 연결정보 가져오기
    console.log(hycon.getProvider) 

    // hycon 노드변경
    hycon.setProvider = 'http://127.0.0.1:2442' 
    // 연결정보 가져오기
    console.log(hycon.getProvider)
} catch (err) {
    console.log(err)
}
```

#### account

* 생성

```javascript
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
    } catch (err) {
        console.log(err)
    }

})()
```

* 결과

```bash
{ mnemonic: 'wedding scissors symptom shield tumble math receive size cheap account cash embody',
  privateKey: '6241d2f480bb0f0f188e303ffa5768d3311d1d1d855ba74ace914bee49eb33bc',
  address: 'HTCMhEGub1xpFxdR4YSEXmThqAJmE4me' }
```

* 잔액조회

```javascript
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
        
        let balance = await hycon.getBalance(wallet.address)
        console.log(balance)
    } catch (err) {
        console.log(err)
    }
})()

```

* 결과

```bash
{ hash: 'H2sCxN2PJQrPKqJ9tZhPupk7DXEmpDx3R',
  balance: '0.0',
  nonce: 0,
  txs: [],
  pendings: [],
  minedBlocks: [],
  pendingAmount: '0' }
```

#### transaction

```javascript
let Hycon = require('hycon')
```

* result

```bash
```

#### block

```javascript
let Hycon = require('hycon')
```

* result

```bash
```