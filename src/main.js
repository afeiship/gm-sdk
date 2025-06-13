import nx from '@jswork/next';
import NxGmApi from '@jswork/next-gm-api';
import NxGmStorage from '@jswork/next-gm-storage';
import httpSchema from '@jswork/http-schema';

import '@jswork/next-gm-xhr';
import '@jswork/next-range-date';
import '@jswork/next-sum';
import '@jswork/next-time-format';
import '@jswork/next-wait-to-display';
import '@jswork/next-map-map';
import '@jswork/next-date';
import '@jswork/next-domain';
import '@jswork/next-weeks';
import '@jswork/next-scroll-to';
import '@jswork/next-camelize';
import '@jswork/next-classify';
import '@jswork/next-kebab-case';
import '@jswork/next-underscored';
import '@jswork/next-hashlize';
import '@jswork/next-unique';
import '@jswork/next-gm-app';
import slog from 'shields-log';

const apis = NxGmApi.generate(nx.GLOBAL);
const store = new NxGmStorage('aric');
const gmVersion = '__VERSION__';
const httpSchemaWrap = function (inSchema, inOptions) {
  httpSchema(inSchema, {
    harmony: true,
    adapter: 'GmXhr',
    slim: true,
    interceptors: [],
    ...inOptions
  });
};

slog({ title: 'gmsdk version', content: gmVersion });
console.log('gmsdk preload', window.GM_setClipboard);

nx.declare({
  statics: {
    init: function () {
      if (typeof gmsdk !== 'undefined') return;
      this.nx();
      this.jquery();
      nx.set(nx, 'gmWindow', unsafeWindow);
      nx.mix(unsafeWindow, { gmsdk: this.sdk() });
    },
    jquery: function () {
      unsafeWindow.$ = unsafeWindow.$ || $;
      unsafeWindow.$.version = nx.get(unsafeWindow, '$.fn.jquery', '0.0.0');
    },
    nx: function () {
      unsafeWindow.nx = unsafeWindow.nx || nx;
    },
    sdk: function () {
      return nx.mix(
        {
          version: gmVersion,
          httpSchema: httpSchemaWrap,
          store,
          slog
        },
        apis
      );
    }
  }
});
