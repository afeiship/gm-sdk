import nx from '@feizheng/next-js-core2';
import NxGmXhr from '@feizheng/next-gm-xhr';
import NxGmStorage from '@feizheng/next-gm-storage';
import NxGmApi from '@feizheng/next-gm-api';
import $ from 'jquery';

var http = NxGmXhr.getInstance();
var apis = NxGmApi.generate(nx.GLOBAL);
var store = new NxGmStorage('aric');

nx.declare({
  statics: {
    init: function () {
      nx.mix(
        unsafeWindow,
        {
          nx: unsafeWindow.nx || nx,
          $: unsafeWindow.$ || $,
          gmsdk: this.sdk()
        }
      )
    },
    sdk: function () {
      return nx.mix({
        version: '__VERSION__',
        http,
        store,
      }, apis);
    }
  }
});
