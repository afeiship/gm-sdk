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
npm i @feizheng/gm-sdk
```

## sdk
| api   | description   |
| ----- | ------------- |
| $     | jquery        |
| nx    | next-js-core2 |
| gmsdk | -             |

## gmsdk apis
| api           | description             |
| ------------- | ----------------------- |
| `http`        | gm-sdk                  |
| `store`       | gm-sdk                  |
| `NxGmApi.log` | From tampermonkey apis. |

## usage
```js
// @require  https://cdn.jsdelivr.net/npm/@feizheng/gm-sdk/dist/gm-sdk.js

// or lock the version
// @require  https://cdn.jsdelivr.net/npm/@feizheng/gm-sdk@1.0.10/dist/gm-sdk.js
```

## resources
- https://www.tampermonkey.net/documentation.php
- https://github.com/afeiship/next-gm-api

## license
Code released under [the MIT license](https://github.com/afeiship/gm-sdk/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/gm-sdk
[version-url]: https://npmjs.org/package/@feizheng/gm-sdk

[license-image]: https://img.shields.io/npm/l/@feizheng/gm-sdk
[license-url]: https://github.com/afeiship/next-guid/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/gm-sdk
[size-url]: https://github.com/afeiship/next-guid/blob/master/dist/next-guid.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/gm-sdk
[download-url]: https://www.npmjs.com/package/@feizheng/gm-sdk
