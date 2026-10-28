import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useI18n } from './server.mjs';
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
  __name: "PageCta",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    primaryLabel: {},
    secondaryLabel: {},
    primaryUrl: {},
    secondaryUrl: {},
    secondaryClick: { type: Function }
  },
  setup(__props) {
    const { locale } = useI18n();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "ShopArk";
      if (locale.value.startsWith("zh")) return "ShopArk";
      return "ShopArk";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-5 py-20 text-white sm:px-8 sm:py-24" }, _attrs))}><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shopark-glow absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"></div><div class="animate-shopark-glow absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl"></div></div><div class="mx-auto max-w-4xl text-center"><p class="text-sm font-black tracking-[0.18em] text-cyan-300 uppercase">${ssrInterpolate(brandName.value)}</p><h2 class="mt-5 text-3xl font-black tracking-[-0.035em] sm:text-5xl">${ssrInterpolate(__props.title)}</h2><p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100/70">${ssrInterpolate(__props.description)}</p><div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a${ssrRenderAttr("href", __props.primaryUrl)} class="rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-blue-700 shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95">${ssrInterpolate(__props.primaryLabel)}</a><a${ssrRenderAttr("href", __props.secondaryUrl)} class="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(__props.secondaryLabel)}</a></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/PageCta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "PageCta" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=PageCta-DnrHivVs.mjs.map
