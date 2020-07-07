import '@feizheng/next-js-core2';
import NxGmXhr from '@feizheng/next-gm-xhr';
import NxGmStorage from '@feizheng/next-gm-storage';

var http = NxGmXhr.getInstance();
var apis = [
  "GM_addStyle",
  "GM_deleteValue",
  "GM_listValues",
  "GM_addValueChangeListener",
  "GM_removeValueChangeListener",
  "GM_setValue",
  "GM_getValue",
  "GM_log",
  "GM_getResourceText",
  "GM_getResourceURL",
  "GM_registerMenuCommand",
  "GM_unregisterMenuCommand",
  "GM_openInTab",
  "GM_xmlhttpRequest",
  "GM_download",
  "GM_getTab",
  "GM_saveTab",
  "GM_getTabs",
  "GM_notification",
  "GM_setClipboard",
  "GM_info"
];

nx.declare({
  statics: {
    init: function () {
      nx.mix(
        unsafeWindow,
        {
          nx: unsafeWindow.nx || nx,
          $: nx.GLOBAL.$,
          version: '__VERSION__',
          gmsdk: nx.mix(
            {
              http,
              store: new NxGmStorage('aric')
            },
            this.generate(),
          )
        }
      )
    },
    generate: function () {
      var results = {};
      apis.forEach(function (api) {
        var shortName = api.split('_')[1];
        results[shortName] = nx.GLOBAL[api];
      });
      return results;
    }
  }
});
