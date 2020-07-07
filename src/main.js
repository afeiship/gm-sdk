import '@feizheng/next-js-core2';
import '@feizheng/next-gm-xhr';
import '@feizheng/next-gm-storage';

var http = nx.GmXhr.getInstance();

nx.declare({
  statics: {
    init: function () {
      nx.mix(
        unsafeWindow,
        {
          nx: unsafeWindow.nx || nx,
          gmsdk: {
            http,
            store: new nx.GmStorage('aric')
          }
        }
      )
    }
  }
});
