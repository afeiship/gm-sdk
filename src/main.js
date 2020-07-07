import '@feizheng/next-js-core2';
import '@feizheng/next-gm-xhr';
import '@feizheng/next-gm-storage';

var http = nx.GmXhr.getInstance();
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
          gmsdk: nx.mix(
            {
              http,
              store: new nx.GmStorage('aric')
            },
            this.generate(),
          )
        }
      )
    },
    generate: function () {
      var results = {};
      apis.forEach(function (api) {
        results[api] = nx.GLOBAL[api];
      });
      return results;
    }
  }
});
