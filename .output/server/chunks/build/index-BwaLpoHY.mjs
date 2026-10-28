import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import MarketplaceList from './MarketplaceList-1mbDVElG.mjs';
import { u as useMarketplaceCopy, a as useMarketplacePackageState, t as toMarketplaceAppEntry } from './marketplace-C1VszG7U.mjs';
import { y as useFetch, by as useCollectionPageJsonLd, bg as useSeoMeta } from './server.mjs';
import './MarketplaceHero-BRZ-crkT.mjs';
import './MarketplaceCard-DG5poDRz.mjs';
import './marketplace-Cari-Pt8.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useMarketplaceCopy();
    const { packageState } = useMarketplacePackageState();
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/apps",
      {
        key: "shopark-apps-list",
        query: { pageSize: 100 }
      },
      "$p_C9JMjtPM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const apps = computed(() => {
      var _a;
      return (((_a = response.value) == null ? void 0 : _a.data) || []).map((item) => toMarketplaceAppEntry(item, copy.value, packageState));
    });
    useCollectionPageJsonLd("shopark-apps-list", {
      path: "/apps",
      name: () => copy.value.apps.title,
      description: () => copy.value.apps.description,
      items: apps
    });
    useSeoMeta({
      title: () => copy.value.apps.seoTitle,
      description: () => copy.value.apps.seoDescription,
      keywords: () => copy.value.apps.seoKeywords,
      ogTitle: () => copy.value.apps.seoTitle,
      ogDescription: () => copy.value.apps.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.apps.seoTitle,
      twitterDescription: () => copy.value.apps.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MarketplaceList, mergeProps({
        kind: "app",
        entries: apps.value,
        copy: unref(copy),
        eyebrow: unref(copy).apps.eyebrow,
        title: unref(copy).apps.title,
        description: unref(copy).apps.description
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/apps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BwaLpoHY.mjs.map
