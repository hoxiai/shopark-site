import __nuxt_component_0 from './MarketplaceList-2hE5kvoo.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useMarketplaceCopy, a as useMarketplacePackageState, b as toMarketplaceThemeEntry } from './marketplace-BOjUfnKo.mjs';
import { w as useFetch, bt as useCollectionPageJsonLd, bc as useSeoMeta } from './server.mjs';
import './MarketplaceHero-CYb0f7hI.mjs';
import './MarketplaceCard-BEsxtHLV.mjs';
import './MarketplaceVisual-AVDGulXA.mjs';
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
import 'ioredis';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
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
import './marketplace-6HVcFXY0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useMarketplaceCopy();
    const { packageState } = useMarketplacePackageState();
    const { data: response } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/themes",
      {
        key: "shoply-themes-list",
        query: { pageSize: 100 }
      },
      "$uAxzWcVBOM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const themes = computed(() => {
      var _a;
      return (((_a = response.value) == null ? void 0 : _a.data) || []).map((item) => toMarketplaceThemeEntry(item, copy.value, packageState));
    });
    useCollectionPageJsonLd("shoply-themes-list", {
      path: "/themes",
      name: () => copy.value.themes.title,
      description: () => copy.value.themes.description,
      items: themes
    });
    useSeoMeta({
      title: () => copy.value.themes.seoTitle,
      description: () => copy.value.themes.seoDescription,
      keywords: () => copy.value.themes.seoKeywords,
      ogTitle: () => copy.value.themes.seoTitle,
      ogDescription: () => copy.value.themes.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.themes.seoTitle,
      twitterDescription: () => copy.value.themes.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarketplaceList = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MarketplaceList, mergeProps({
        kind: "theme",
        entries: themes.value,
        copy: unref(copy),
        eyebrow: unref(copy).themes.eyebrow,
        title: unref(copy).themes.title,
        description: unref(copy).themes.description
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/themes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
