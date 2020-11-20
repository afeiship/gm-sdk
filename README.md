<p align="center">
  <a href="https://github.com/afeiship/gm-sdk">
    <img width="350" src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ggisduaj9ij30om08caaf.jpg" alt="gm-sdk logo">
  </a>
</p>

<h3 align="center">gm-sdk</h3>

<p align="center">
  Sdk for tampermonkey based on jQuery/nx.
</p>

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/gm-sdk
```

## sdk
| api   | description                            |
| ----- | -------------------------------------- |
| $     | jquery(You need requre it by yourself) |
| nx    | next-js-core2                          |
| gmsdk | -                                      |

## gmsdk apis
| api           | description             |
| ------------- | ----------------------- |
| `http`        | gm-sdk                  |
| `store`       | gm-sdk                  |
| `NxGmApi.log` | From tampermonkey apis. |

## usage
```js
// @require  https://cdn.jsdelivr.net/npm/@jswork/gm-sdk

// or lock the version
// @require  https://cdn.jsdelivr.net/npm/@jswork/gm-sdk@1.0.0
```

## resources
- https://www.tampermonkey.net/documentation.php
- https://github.com/afeiship/next-gm-api

## license
Code released under [the MIT license](https://github.com/afeiship/gm-sdk/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/gm-sdk
[version-url]: https://npmjs.org/package/@jswork/gm-sdk

[license-image]: https://img.shields.io/npm/l/@jswork/gm-sdk
[license-url]: https://github.com/afeiship/next-guid/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/gm-sdk
[size-url]: https://github.com/afeiship/next-guid/blob/master/dist/next-guid.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/gm-sdk
[download-url]: https://www.npmjs.com/package/@jswork/gm-sdk
