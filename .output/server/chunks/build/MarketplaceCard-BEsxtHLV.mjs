import { J as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_1$1 from './MarketplaceVisual-AVDGulXA.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "MarketplaceCard",
  __ssrInlineRender: true,
  props: {
    entry: {},
    to: {},
    category: {},
    price: {},
    detailsLabel: {},
    downloadsLabel: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_MarketplaceVisual = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 active:scale-[0.99]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MarketplaceVisual, {
              name: __props.entry.name,
              mark: __props.entry.mark,
              accent: __props.entry.accent,
              "image-url": __props.entry.imageUrl
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-1 flex-col px-2 pb-2 pt-5"${_scopeId}><div class="flex items-start justify-between gap-4"${_scopeId}><div${_scopeId}><p class="text-xs font-black uppercase tracking-[0.16em] text-blue-600"${_scopeId}>${ssrInterpolate(__props.category)}</p><h2 class="mt-2 text-xl font-black text-slate-950 group-hover:text-blue-600"${_scopeId}>${ssrInterpolate(__props.entry.name)}</h2></div><span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700"${_scopeId}>${ssrInterpolate(__props.price)}</span></div><p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(__props.entry.summary)}</p><div class="mt-auto flex items-center justify-between pt-5 text-xs font-bold text-slate-400"${_scopeId}>`);
            if (__props.entry.kind === "app") {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.entry.downloads || 0)} ${ssrInterpolate(__props.downloadsLabel)}</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.detailsLabel)}</span>`);
            }
            _push2(`<span class="text-blue-600 transition-transform group-hover:translate-x-1"${_scopeId}>\u2192</span></div></div>`);
          } else {
            return [
              createVNode(_component_MarketplaceVisual, {
                name: __props.entry.name,
                mark: __props.entry.mark,
                accent: __props.entry.accent,
                "image-url": __props.entry.imageUrl
              }, null, 8, ["name", "mark", "accent", "image-url"]),
              createVNode("div", { class: "flex flex-1 flex-col px-2 pb-2 pt-5" }, [
                createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-xs font-black uppercase tracking-[0.16em] text-blue-600" }, toDisplayString(__props.category), 1),
                    createVNode("h2", { class: "mt-2 text-xl font-black text-slate-950 group-hover:text-blue-600" }, toDisplayString(__props.entry.name), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700" }, toDisplayString(__props.price), 1)
                ]),
                createVNode("p", { class: "mt-3 line-clamp-3 text-sm leading-6 text-slate-600" }, toDisplayString(__props.entry.summary), 1),
                createVNode("div", { class: "mt-auto flex items-center justify-between pt-5 text-xs font-bold text-slate-400" }, [
                  __props.entry.kind === "app" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.entry.downloads || 0) + " " + toDisplayString(__props.downloadsLabel), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(__props.detailsLabel), 1)),
                  createVNode("span", { class: "text-blue-600 transition-transform group-hover:translate-x-1" }, "\u2192")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketplaceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "MarketplaceCard" });

export { __nuxt_component_1 as default };
