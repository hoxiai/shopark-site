import { defineComponent, computed, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import MarketplaceDetail from './MarketplaceDetail-CdYXa86M.mjs';
import { u as useMarketplaceCopy, a as useMarketplacePackageState, b as toMarketplaceThemeEntry } from './marketplace-CCs1Usom.mjs';
import { E as useRoute, y as useFetch, J as setResponseStatus, bf as useSeoMeta } from './server.mjs';
import './MarketplaceVisual-Cr5WaubP.mjs';
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
import 'process';
import 'buffer';
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
import './marketplace-CT8kYQb9.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { copy } = useMarketplaceCopy();
    const { packageState } = useMarketplacePackageState();
    const slug = computed(() => {
      const value = route.params.slug;
      return Array.isArray(value) ? String(value.at(-1) || "") : String(value || "");
    });
    const { data: item } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/themes/${slug.value}`,
      {
        key: `shoply-theme-${slug.value}`
      },
      "$as5x0pfKg-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const entry = computed(() => item.value ? toMarketplaceThemeEntry(item.value, copy.value, packageState) : null);
    const category = computed(() => entry.value ? copy.value.themeCategories[entry.value.category] || entry.value.category : "");
    if (!entry.value) setResponseStatus(404);
    useSeoMeta({
      title: () => entry.value ? entry.value.name : copy.value.common.notFound,
      description: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || "";
      },
      keywords: () => entry.value ? entry.value.name : "",
      ogTitle: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.name) || copy.value.common.notFound;
      },
      ogDescription: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || "";
      },
      ogImage: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.imageUrl) || void 0;
      },
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.name) || copy.value.common.notFound;
      },
      twitterDescription: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || "";
      },
      twitterImage: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.imageUrl) || void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MarketplaceDetail, mergeProps({
        kind: "theme",
        entry: entry.value,
        copy: unref(copy),
        category: category.value
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/themes/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-B8jJ32O8.mjs.map
