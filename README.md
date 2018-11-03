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
# 다음 라이브러리가 필요합니다.
$ npm install --save request
$ npm install --save request-promise

# hycon 코드설치
$ git clone https://github.com/pjt3591oo/hycon.git ./node_modules/hycon
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

* block 조회

```javascript
let Hycon = require('hycon')

let hycon = new Hycon('http://127.0.0.1:2442');

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
```

* result

```bash
[ { hash: '8FBHxpniTp28woezavuczqnFFauMAskRjWTjwyD2TuV7',
    difficulty: '2.9333277662724167e-4',
    height: 6506,
    size: 150,
    txs: [],
    timeStamp: 1541215492088,
    prevBlock: [ [Object] ],
    nonce: '000000000000002f',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'CGaVf4QUhcY4bFe87APJCfWE9BrF9V8icPnKjuyFGHo6',
    difficulty: '2.931621436424278e-4',
    height: 6507,
    size: 150,
    txs: [],
    timeStamp: 1541215545433,
    prevBlock: [ [Object] ],
    nonce: '000000000000002e',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: 'JmVWBPygBo1wi24q89ykeShCGNWYkBvWjKqTDnNDzri',
    difficulty: '2.9336661000999335e-4',
    height: 6508,
    size: 149,
    txs: [],
    timeStamp: 1541215568750,
    prevBlock: [ [Object] ],
    nonce: '0000000000000004',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'HQ2d9VWFSbMqSjUDob3RFBYvsh4kKmKhc5EMXkJu1R5n',
    difficulty: '2.9296101790570416e-4',
    height: 6509,
    size: 150,
    txs: [],
    timeStamp: 1541215616973,
    prevBlock: [ [Object] ],
    nonce: '0000000000000024',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'GTb3N78yKmC63LhEksUXSsmvJjXovsk3aDGjTvr5u8iJ',
    difficulty: '2.930614244464535e-4',
    height: 6510,
    size: 150,
    txs: [],
    timeStamp: 1541215623996,
    prevBlock: [ [Object] ],
    nonce: '000000000000002a',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: 'GJE56XtCiUBmJmitqFsV1pBx3YvWCq2GbG3kWYD2G94h',
    difficulty: '2.923247982367042e-4',
    height: 6511,
    size: 150,
    txs: [],
    timeStamp: 1541215631167,
    prevBlock: [ [Object] ],
    nonce: '000000000000003e',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: '2tXtiLrErGWUAejRZWYN7xa7fDS3ubd2wUqDcPnL7iVR',
    difficulty: '2.9159119083906504e-4',
    height: 6512,
    size: 150,
    txs: [],
    timeStamp: 1541215632939,
    prevBlock: [ [Object] ],
    nonce: '0000000000000047',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: '5TPshfXtZhiZS6MmKYyRX74iLVgjfB4PxK8PCLHyPbss',
    difficulty: '2.907479265762958e-4',
    height: 6513,
    size: 150,
    txs: [],
    timeStamp: 1541215644879,
    prevBlock: [ [Object] ],
    nonce: '0000000000000020',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: 'G2Z5wNpkrDGbWj6XhDTALoReuzJuvZ5dveCp1ueED9QC',
    difficulty: '2.901112821663977e-4',
    height: 6514,
    size: 150,
    txs: [],
    timeStamp: 1541215681791,
    prevBlock: [ [Object] ],
    nonce: '0000000000000047',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: '8uLdpyWgGEqhzquhReS6go9psgknNVxcuY8apqeMYaUk',
    difficulty: '2.899819910745346e-4',
    height: 6515,
    size: 150,
    txs: [],
    timeStamp: 1541215699747,
    prevBlock: [ [Object] ],
    nonce: '0000000000000049',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: '9DQDKXii3A3nDJajjmkG9j93ehgEgAuvNxoio4WDj9Xk',
    difficulty: '2.894676375418545e-4',
    height: 6516,
    size: 150,
    txs: [],
    timeStamp: 1541215713649,
    prevBlock: [ [Object] ],
    nonce: '0000000000000011',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: '7AvYc55w4pkuLCTpxC4ZZ7rMFM66M4J6fpjTQwMFoA6s',
    difficulty: '2.88870987214569e-4',
    height: 6517,
    size: 150,
    txs: [],
    timeStamp: 1541215764265,
    prevBlock: [ [Object] ],
    nonce: '0000000000000031',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'DL13pvwr4Tdh2oSafkJ2pLnSTCShtwdsqg3piMb1eybN',
    difficulty: '2.8902016131357575e-4',
    height: 6518,
    size: 150,
    txs: [],
    timeStamp: 1541215801652,
    prevBlock: [ [Object] ],
    nonce: '000000000000001f',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: '9snGxxwmvM8Af6jDKU4vE5kfvBuwL1JvA4CbNWHpQVfJ',
    difficulty: '2.8890061304763975e-4',
    height: 6519,
    size: 150,
    txs: [],
    timeStamp: 1541215804609,
    prevBlock: [ [Object] ],
    nonce: '0000000000000038',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: 'GBZqdTbyiCQUasNcPHUX81jxJMzAkmrTeu8nwfrPpjbv',
    difficulty: '2.880817786886637e-4',
    height: 6520,
    size: 150,
    txs: [],
    timeStamp: 1541215828145,
    prevBlock: [ [Object] ],
    nonce: '000000000000000e',
    miner: 'H4BD5cctief2kL69RssTAy2yCoXFL4LXe' },
  { hash: '6N9SMgM1WtFE6xs7p7eD8SoiBiWYhxNSBMwZbRaVdthV',
    difficulty: '2.8768101484646816e-4',
    height: 6521,
    size: 150,
    txs: [],
    timeStamp: 1541215870629,
    prevBlock: [ [Object] ],
    nonce: '0000000000000021',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'HcG4EBUDqYMSXPpSoNcXi9vmn8KYx7NT7PvP1gUswXwW',
    difficulty: '2.8766512152238167e-4',
    height: 6522,
    size: 150,
    txs: [],
    timeStamp: 1541215923702,
    prevBlock: [ [Object] ],
    nonce: '000000000000000d',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: '3uaTv5uGjTLYzGv7M7RMf2bf5rtvxKGjvyHXorcSGr4m',
    difficulty: '2.878642655882369e-4',
    height: 6523,
    size: 150,
    txs: [],
    timeStamp: 1541215960105,
    prevBlock: [ [Object] ],
    nonce: '0000000000000010',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: '2oTfHAWmExjgg3uEK5F5Lzqrt6DaKKjRBFfm5SLEbW1D',
    difficulty: '2.8772486742726006e-4',
    height: 6524,
    size: 150,
    txs: [],
    timeStamp: 1541215962614,
    prevBlock: [ [Object] ],
    nonce: '0000000000000026',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' },
  { hash: 'sYLxp9wKeFbbsu6gEPRs7bFDtkhXbKqqVg1gKRm99Af',
    difficulty: '2.86897259169373e-4',
    height: 6525,
    size: 150,
    txs: [],
    timeStamp: 1541216003655,
    prevBlock: [ [Object] ],
    nonce: '0000000000000036',
    miner: 'H2KNRyNqK6gVzEKWRPpBwvEX5NewUFSrP' } ]
{ hash: '32MobLhudWy73L5nCCwv7MZV9TajtTdWQG3TapRDKFHb',
  difficulty: '9.765625e-4',
  stateRoot: '7vrrxRAdiiyt1oa6Jo8vL6uTnSqFNTTZ3aaqJGXqydDL',
  merkleRoot: 'xyw95Bsby3s4mt6f4FmFDnFVpQBAeJxBFNGzu2cX4dM',
  txs: [],
  height: '1',
  timeStamp: 1540951303960 }
```