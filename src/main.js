import NxGmApi from '@feizheng/next-gm-api';
import NxGmStorage from '@feizheng/next-gm-storage';
import NxGmXhr from '@feizheng/next-gm-xhr';
import nx from '@feizheng/next-js-core2';

var http = NxGmXhr.getInstance();
var apis = NxGmApi.generate(nx.GLOBAL);
var store = new NxGmStorage('aric');
var gmVersion = '__VERSION__';

nx.declare({
  statics: {
    init: function () {
      nx.mix(unsafeWindow, {
        nx: unsafeWindow.nx || nx,
        $: nx.mix(unsafeWindow.$, {
          version: $.fn.jquery
        }),
        gmsdk: this.sdk()
      });
    },
    sdk: function () {
      return nx.mix(
        {
          version: gmVersion,
          http,
          store
        },
        apis
      );
    }
  }
});
