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
import '@jswork/next-domain';
import '@jswork/next-weeks';
import '@jswork/next-scroll-to';
import slog from 'shields-log';

const http = NxGmXhr.getInstance();
const apis = NxGmApi.generate(nx.GLOBAL);
const store = new NxGmStorage('aric');
const gmVersion = '__VERSION__';

nx.declare({
  statics: {
    init: function () {
      if (typeof gmsdk !== 'undefined' || typeof nx !== 'undefined') return;
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
