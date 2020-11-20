import nx from '@jswork/next';
import NxGmApi from '@jswork/next-gm-api';
import NxGmStorage from '@jswork/next-gm-storage';
import NxGmXhr from '@jswork/next-gm-xhr';

import '@jswork/next-range-date';
import '@jswork/next-sum';
import '@jswork/next-time-format';
import '@jswork/next-wait-to-display';
import '@jswork/next-map-map';
import '@jswork/next-date';
import slog from 'shields-log';

var http = NxGmXhr.getInstance();
var apis = NxGmApi.generate(nx.GLOBAL);
var store = new NxGmStorage('aric');
var gmVersion = '__VERSION__';

nx.declare({
  statics: {
    init: function () {
      this.nx();
      nx.mix(unsafeWindow, {
        $: nx.mix(unsafeWindow.$, {
          version: $.fn.jquery
        }),
        gmsdk: this.sdk()
      });
    },
    nx: function () {
      !unsafeWindow.nx && (unsafeWindow.nx = nx);
    },
    sdk: function () {
      return nx.mix(
        {
          version: gmVersion,
          http,
          store,
          slog
        },
        apis
      );
    }
  }
});
