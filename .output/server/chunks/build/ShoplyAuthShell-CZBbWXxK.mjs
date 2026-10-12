import { _ as _sfc_main$Q } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-Jz-jwtEc.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyAuthShell",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    const { copy } = useShoplyConsoleCopy();
    const headline = computed(() => copy.value.auth.registerTitle);
    const highlights = computed(() => [
      copy.value.stores.emptyDescription,
      copy.value.subscription.subtitle,
      copy.value.orders.subtitle
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Q;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 px-4 py-10 sm:px-8 sm:py-16" }, _attrs))}><div class="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1fr_1.1fr]"><div class="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white lg:flex lg:flex-col lg:justify-between"><div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/40 blur-3xl"></div><div class="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div><div class="relative"><p class="text-sm font-black tracking-[0.18em] text-blue-200 uppercase">${ssrInterpolate(unref(copy).brand)}</p><h2 class="mt-5 text-3xl font-black leading-tight tracking-tight">${ssrInterpolate(headline.value)}</h2></div><ul class="relative space-y-4 text-sm text-blue-100/85"><!--[-->`);
      ssrRenderList(highlights.value, (item) => {
        _push(`<li class="flex gap-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "mt-0.5 h-5 w-5 shrink-0 text-cyan-300"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="p-6 sm:p-10"><h1 class="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">${ssrInterpolate(__props.title)}</h1><p class="mt-2 text-sm leading-6 text-slate-500">${ssrInterpolate(__props.subtitle)}</p><div class="mt-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyAuthShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ShoplyAuthShell" });

export { __nuxt_component_0 as default };
