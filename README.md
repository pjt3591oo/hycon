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

```javascript
let Hycon = require('hycon')

try {
    let hycon = new Hycon('http://52.231.153.50:8148')
} catch (err) {
    console.log(err)
}
```