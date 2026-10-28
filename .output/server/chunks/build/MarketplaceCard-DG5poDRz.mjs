import { _ as _sfc_main$W, O as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useMarketplaceCopy } from './marketplace-C1VszG7U.mjs';
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
import './marketplace-Cari-Pt8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceCard",
  __ssrInlineRender: true,
  props: {
    entry: {},
    to: {},
    category: {},
    price: {},
    detailsLabel: {},
    downloadsLabel: {},
    deviceView: { default: "desktop" }
  },
  emits: ["preview"],
  setup(__props, { emit: __emit }) {
    const { copy } = useMarketplaceCopy();
    ref(null);
    ref(null);
    const imageFailed = ref(false);
    ref(false);
    const scrollStyle = ref({
      transform: "translateY(0px)",
      transition: "transform 1s cubic-bezier(0.25, 1, 0.5, 1)"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      if (__props.entry.kind === "theme") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/15" }, _attrs))}><div class="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-2.5 text-xs text-slate-400"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span></div><span class="font-mono text-[11px] text-slate-400 select-none truncate max-w-[150px]">${ssrInterpolate(__props.entry.slug)}.myshopark.com</span><div class="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:device-mobile-camera-bold",
          class: "h-3 w-3"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(copy).common.responsiveTag)}</span></div></div><div class="${ssrRenderClass([__props.deviceView === "mobile" ? "aspect-[9/16]" : "aspect-[10/13]", "relative w-full overflow-hidden bg-slate-100 cursor-pointer"])}">`);
        if (__props.entry.imageUrl && !imageFailed.value) {
          _push(`<img${ssrRenderAttr("src", __props.entry.imageUrl)}${ssrRenderAttr("alt", __props.entry.name)} loading="lazy" class="absolute top-0 left-0 w-full object-cover will-change-transform pointer-events-none" style="${ssrRenderStyle(scrollStyle.value)}">`);
        } else {
          _push(`<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white font-black text-4xl">${ssrInterpolate(__props.entry.mark)}</div>`);
        }
        _push(`<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-slate-950/45 p-6 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"><div class="flex flex-col gap-2.5 w-full max-w-[170px] transform translate-y-3 transition-transform duration-300 group-hover:translate-y-0"><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-black text-white shadow-xl shadow-blue-900/30 transition-all hover:bg-blue-500 hover:scale-105 active:scale-95">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:eye-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(copy).common.previewDemo)}</span></button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-slate-900 shadow-xl transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "h-4 w-4 text-blue-600"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.detailsLabel)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:sparkle-bold",
                  class: "h-4 w-4 text-blue-600"
                }),
                createVNode("span", null, toDisplayString(__props.detailsLabel), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none"><span class="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrows-down-up-bold",
          class: "h-3 w-3 text-cyan-400 animate-bounce"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(copy).common.hoverScrollHint)}</span></span></div></div></div><div class="flex flex-1 flex-col p-5"><div class="flex items-center justify-between gap-3"><span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">${ssrInterpolate(__props.category)}</span><span class="text-sm font-black text-slate-900">${ssrInterpolate(__props.price)}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: __props.to }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="mt-3 text-lg font-black text-slate-950 transition-colors group-hover:text-blue-600 hover:underline"${_scopeId}>${ssrInterpolate(__props.entry.name)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "mt-3 text-lg font-black text-slate-950 transition-colors group-hover:text-blue-600 hover:underline" }, toDisplayString(__props.entry.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">${ssrInterpolate(__props.entry.summary)}</p><div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-slate-400"><div class="flex items-center gap-2"><span class="inline-flex items-center gap-1 text-[11px] text-slate-500 font-semibold">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:seal-percent-fill",
          class: "h-3.5 w-3.5 text-emerald-500"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(copy).common.noFeeTag)}</span><span class="inline-flex items-center gap-1 text-[11px] text-slate-500 font-semibold">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lightning-fill",
          class: "h-3.5 w-3.5 text-amber-500"
        }, null, _parent));
        _push(` 18ms </span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-extrabold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.detailsLabel)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-3 w-3 transition-transform group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.detailsLabel), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3 w-3 transition-transform group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/15" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "relative block aspect-[16/10] w-full overflow-hidden bg-slate-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.entry.imageUrl && !imageFailed.value) {
                _push2(`<img${ssrRenderAttr("src", __props.entry.imageUrl)}${ssrRenderAttr("alt", __props.entry.name)} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"${_scopeId}>`);
              } else {
                _push2(`<div class="relative flex h-full w-full items-center justify-center text-white" style="${ssrRenderStyle({ background: `linear-gradient(135deg, ${__props.entry.accent || "#2563eb"}, #071e49)` })}"${_scopeId}><div class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-110"${_scopeId}></div><div class="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-black/20 blur-xl transition-transform duration-500 group-hover:scale-110"${_scopeId}></div><span class="relative font-black text-4xl tracking-tight transition-transform duration-500 group-hover:scale-110"${_scopeId}>${ssrInterpolate(__props.entry.mark)}</span></div>`);
              }
              _push2(`<div class="absolute inset-x-3.5 top-3.5 flex items-center justify-between pointer-events-none"${_scopeId}><span class="inline-flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md ring-1 ring-white/15 shadow-sm"${_scopeId}>${ssrInterpolate(__props.category)}</span>`);
              if (__props.entry.version) {
                _push2(`<span class="inline-flex items-center rounded-full bg-white/95 px-2 py-0.5 font-mono text-[10px] font-black text-slate-800 shadow-sm backdrop-blur-md"${_scopeId}> v${ssrInterpolate(__props.entry.version)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"${_scopeId}><span class="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-xl shadow-blue-900/40 transition-transform duration-200 hover:scale-105 hover:bg-blue-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.detailsLabel)}</span></span></div>`);
            } else {
              return [
                __props.entry.imageUrl && !imageFailed.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: __props.entry.imageUrl,
                  alt: __props.entry.name,
                  loading: "lazy",
                  onError: ($event) => imageFailed.value = true,
                  class: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                }, null, 40, ["src", "alt", "onError"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative flex h-full w-full items-center justify-center text-white",
                  style: { background: `linear-gradient(135deg, ${__props.entry.accent || "#2563eb"}, #071e49)` }
                }, [
                  createVNode("div", { class: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-110" }),
                  createVNode("div", { class: "absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-black/20 blur-xl transition-transform duration-500 group-hover:scale-110" }),
                  createVNode("span", { class: "relative font-black text-4xl tracking-tight transition-transform duration-500 group-hover:scale-110" }, toDisplayString(__props.entry.mark), 1)
                ], 4)),
                createVNode("div", { class: "absolute inset-x-3.5 top-3.5 flex items-center justify-between pointer-events-none" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md ring-1 ring-white/15 shadow-sm" }, toDisplayString(__props.category), 1),
                  __props.entry.version ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "inline-flex items-center rounded-full bg-white/95 px-2 py-0.5 font-mono text-[10px] font-black text-slate-800 shadow-sm backdrop-blur-md"
                  }, " v" + toDisplayString(__props.entry.version), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white shadow-xl shadow-blue-900/40 transition-transform duration-200 hover:scale-105 hover:bg-blue-500" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:sparkle-bold",
                      class: "h-3.5 w-3.5"
                    }),
                    createVNode("span", null, toDisplayString(__props.detailsLabel), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-1 flex-col p-5"><div class="flex items-start justify-between gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "min-w-0 flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-base sm:text-lg font-black text-slate-950 transition-colors group-hover:text-blue-600 truncate hover:underline"${_scopeId}>${ssrInterpolate(__props.entry.name)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-base sm:text-lg font-black text-slate-950 transition-colors group-hover:text-blue-600 truncate hover:underline" }, toDisplayString(__props.entry.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-black text-emerald-700 ring-1 ring-emerald-600/20">${ssrInterpolate(__props.price)}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "mt-2 block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="line-clamp-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600"${_scopeId}>${ssrInterpolate(__props.entry.summary)}</p>`);
            } else {
              return [
                createVNode("p", { class: "line-clamp-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600" }, toDisplayString(__props.entry.summary), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-3 flex flex-wrap items-center gap-1.5"><span class="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:seal-check-fill",
          class: "h-3 w-3 text-blue-600"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(copy).common.officialTag)}</span>`);
        if (__props.entry.packageStatus === "ready") {
          _push(`<span class="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${ssrInterpolate(unref(copy).common.readyTag)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:seal-percent-fill",
          class: "h-3 w-3 text-slate-500"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(copy).common.noFeeTag)}</span></div><div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-slate-400"><span class="inline-flex items-center gap-1 text-[11px] text-slate-500 font-semibold">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:download-simple-bold",
          class: "h-3.5 w-3.5 text-blue-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(__props.entry.downloads || 0)} ${ssrInterpolate(__props.downloadsLabel)}</span></span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.to,
          class: "inline-flex items-center gap-1 text-blue-600 font-extrabold hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.detailsLabel)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-3 w-3 transition-transform group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.detailsLabel), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3 w-3 transition-transform group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/MarketplaceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceCard = Object.assign(_sfc_main, { __name: "MarketplaceCard" });

export { MarketplaceCard as default };
//# sourceMappingURL=MarketplaceCard-DG5poDRz.mjs.map
