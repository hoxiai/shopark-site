import { D as useLocaleRouter, N as __nuxt_component_3$4, _ as _sfc_main$V } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-DO9VxN9A.mjs';
import { u as useShoplyLogo } from './useShoplyLogo-Ck6X-KKS.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyAuthShell",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    heroTitle: { default: "" },
    heroSubtitle: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { inverseLogoUrl, logoWidth, logoAlt } = useShoplyLogo();
    const computedTitle = computed(() => props.heroTitle || copy.value.auth.heroTitle);
    const computedSubtitle = computed(() => props.heroSubtitle || copy.value.auth.heroSubtitle);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$V;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 flex items-center justify-center" }, _attrs))}><div class="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div><div class="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div><div class="relative z-10 w-full max-w-4xl"><div class="grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/5 lg:grid-cols-[1fr_1.15fr]"><div class="relative hidden overflow-hidden bg-gradient-to-br from-[#07132b] via-[#0c1f44] to-[#122b5e] p-10 text-white lg:flex lg:flex-col lg:justify-between"><div class="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div><div class="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"></div><div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "inline-flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(inverseLogoUrl))}${ssrRenderAttr("alt", unref(logoAlt))}${ssrRenderAttr("width", unref(logoWidth))} height="166" class="h-9 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(inverseLogoUrl),
                alt: unref(logoAlt),
                width: unref(logoWidth),
                height: "166",
                class: "h-9 w-auto"
              }, null, 8, ["src", "alt", "width"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative my-auto py-10 space-y-4"><h2 class="text-3xl font-black leading-tight tracking-tight text-white">${ssrInterpolate(computedTitle.value)}</h2><p class="text-sm leading-relaxed text-blue-100/75 max-w-xs">${ssrInterpolate(computedSubtitle.value)}</p><div class="pt-2"><div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-blue-100/80 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span><span>store.shoply.site</span></div></div></div><div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "inline-flex items-center gap-1.5 text-xs font-medium text-blue-200/60 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left-bold",
              class: "h-3 w-3"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(copy).auth.backToHome)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "h-3 w-3"
              }),
              createVNode("span", null, toDisplayString(unref(copy).auth.backToHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-8 sm:p-12 flex flex-col justify-center"><div class="mb-6"><h1 class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">${ssrInterpolate(__props.title)}</h1><p class="mt-2 text-sm leading-relaxed text-slate-500">${ssrInterpolate(__props.subtitle)}</p></div>`);
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
//# sourceMappingURL=ShoplyAuthShell-CQlgzQUj.mjs.map
