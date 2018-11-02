# Hycon Library

해당 라이브러리는 하이콘 연동을 위한 라이브러리 입니다.

## Table Of Contents

* [Installation](##Installation)
* [Node 연결](#node)
* [account](#account)
* [transaction](#transaction)
* [block](#block)

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
'0.0'
```

#### transaction

* transaction 발생

```javascript
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

        
        await sleep(20000) // 바로 txHash를 조회하면 조회안됨(pending 중인 트랜잭션 조회안됨)
        let tx = await hycon.getTransaction({txHash: txHash.txHash})

        console.log(tx)
    } catch (err) {
        console.log(err)
    }
})()
```

* result

```bash
{ hash: 'CfdSaZSwweeiXZyHRiKjinzZxnc1yXf5X1GqeHX7qVa8',
  amount: '10',
  fee: '1',
  from: 'HNw2nrmkXdpE8sCD26VyMvjLg5RsBRUY',
  to: 'H44r8nB1Lk7NGruSmdbWE6VSmMzXn8vT1',
  blockHash: 'DTinFGuYKjeXZ3Eb4TqzcUEE2FWVGqFfproG2oLEXvN2',
  nonce: 457,
  receiveTime: 1541127506880,
  estimated: '11',
  confirmation: 0 }
```

#### block

```javascript
let Hycon = require('hycon')
```

* result

```bash
```