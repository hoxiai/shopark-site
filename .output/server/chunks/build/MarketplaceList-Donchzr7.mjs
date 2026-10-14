import { D as useLocaleRouter, V as useLocaleCurrency, _ as _sfc_main$S, N as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, ref, computed, watch, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import MarketplaceHero from './MarketplaceHero-hnb2iXb4.mjs';
import MarketplaceCard from './MarketplaceCard-DArSG9Np.mjs';
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
import './marketplace-DhnoYofH.mjs';
import './marketplace-CT8kYQb9.mjs';

const pageSize = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceList",
  __ssrInlineRender: true,
  props: {
    kind: {},
    entries: {},
    copy: {},
    eyebrow: {},
    title: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const { formatAmount } = useLocaleCurrency();
    const keyword = ref("");
    const selectedCategory = ref("all");
    const page = ref(1);
    const deviceView = ref("desktop");
    const previewEntry = ref(null);
    const modalViewport = ref("desktop");
    const openPreview = (entry) => {
      previewEntry.value = entry;
      modalViewport.value = "desktop";
    };
    const categoryLabel = (category) => {
      var _a;
      if (props.kind === "app") {
        const table2 = props.copy.appCategories;
        return ((_a = table2[category]) == null ? void 0 : _a[0]) || category;
      }
      const table = props.copy.themeCategories;
      return table[category] || category;
    };
    const categories = computed(() => [
      { value: "all", label: props.copy.common.all },
      ...Array.from(new Set(props.entries.map((entry) => entry.category))).map((category) => ({ value: category, label: categoryLabel(category) }))
    ]);
    const filteredEntries = computed(() => {
      const normalizedKeyword = keyword.value.trim().toLocaleLowerCase();
      return props.entries.filter((entry) => {
        if (selectedCategory.value !== "all" && entry.category !== selectedCategory.value) return false;
        if (!normalizedKeyword) return true;
        return `${entry.name} ${entry.summary} ${entry.category}`.toLocaleLowerCase().includes(normalizedKeyword);
      });
    });
    const pageCount = computed(() => Math.max(Math.ceil(filteredEntries.value.length / pageSize), 1));
    const pageEntries = computed(() => filteredEntries.value.slice((page.value - 1) * pageSize, page.value * pageSize));
    watch([keyword, selectedCategory], () => {
      page.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$S;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MarketplaceHero, {
        modelValue: keyword.value,
        "onUpdate:modelValue": ($event) => keyword.value = $event,
        searchable: "",
        compact: true,
        eyebrow: __props.eyebrow,
        title: __props.title,
        description: __props.description,
        "search-placeholder": __props.copy.common.search
      }, null, _parent));
      _push(`<section class="px-5 sm:px-8 lg:px-12 pt-6 pb-20 sm:pt-8 sm:pb-24"><div class="mx-auto max-w-[1440px]"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5"><div class="flex gap-2 overflow-x-auto pb-1 max-w-full"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedCategory.value === category.value ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600", "shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition-all active:scale-95 duration-200"])}">${ssrInterpolate(category.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (__props.kind === "theme") {
        _push(`<div class="flex items-center gap-3 shrink-0 self-end sm:self-center"><span class="hidden md:inline text-xs font-semibold text-slate-400">${ssrInterpolate(filteredEntries.value.length)} ${ssrInterpolate(__props.copy.common.themesCount)}</span><div class="flex items-center rounded-full bg-slate-100 p-1 border border-slate-200/80"><button type="button" class="${ssrRenderClass([deviceView.value === "desktop" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-900", "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-black transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:desktop-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(__props.copy.common.deviceDesktop)}</span></button><button type="button" class="${ssrRenderClass([deviceView.value === "mobile" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-900", "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-black transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:device-mobile-camera-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(__props.copy.common.deviceMobile)}</span></button></div></div>`);
      } else {
        _push(`<div class="flex items-center gap-2 shrink-0 self-end sm:self-center"><span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-extrabold text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:squares-four-bold",
          class: "h-3.5 w-3.5 text-blue-600"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(filteredEntries.value.length)} ${ssrInterpolate(__props.copy.common.appsCount)}</span></span></div>`);
      }
      _push(`</div>`);
      if (pageEntries.value.length) {
        _push(`<div class="${ssrRenderClass([__props.kind === "theme" ? deviceView.value === "mobile" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", "mt-8 grid gap-6"])}"><!--[-->`);
        ssrRenderList(pageEntries.value, (entry) => {
          _push(ssrRenderComponent(MarketplaceCard, {
            key: `${entry.kind}:${entry.slug}`,
            entry,
            "device-view": deviceView.value,
            to: unref(localePath)(`/${__props.kind === "app" ? "apps" : "themes"}/${entry.slug}`),
            category: categoryLabel(entry.category),
            price: entry.price ? unref(formatAmount)(entry.price) : __props.copy.common.free,
            "details-label": __props.copy.common.details,
            "downloads-label": __props.copy.common.downloads,
            onPreview: openPreview
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="mt-8 rounded-[2rem] border border-dashed border-slate-300 px-6 py-24 text-center text-slate-500">${ssrInterpolate(__props.copy.common.empty)}</div>`);
      }
      if (pageCount.value > 1) {
        _push(`<div class="mt-12 flex items-center justify-center gap-4"><button type="button" class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold disabled:opacity-40 transition-all hover:bg-slate-50"${ssrIncludeBooleanAttr(page.value === 1) ? " disabled" : ""}>${ssrInterpolate(__props.copy.common.previous)}</button><span class="text-sm font-black text-slate-600">${ssrInterpolate(page.value)} / ${ssrInterpolate(pageCount.value)}</span><button type="button" class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold disabled:opacity-40 transition-all hover:bg-slate-50"${ssrIncludeBooleanAttr(page.value === pageCount.value) ? " disabled" : ""}>${ssrInterpolate(__props.copy.common.next)}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      if (previewEntry.value) {
        _push(`<div class="fixed inset-0 z-50 flex flex-col bg-slate-950/85 backdrop-blur-md transition-all duration-300"><div class="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 text-white sm:px-6"><div class="flex items-center gap-3"><div class="flex items-center gap-1.5"><span class="h-3 w-3 rounded-full bg-rose-500"></span><span class="h-3 w-3 rounded-full bg-amber-500"></span><span class="h-3 w-3 rounded-full bg-emerald-500"></span></div><div><h3 class="text-sm font-black text-white sm:text-base">${ssrInterpolate(previewEntry.value.name)}</h3><p class="hidden sm:block text-[11px] font-mono text-slate-400">${ssrInterpolate(previewEntry.value.slug)}.shoply.page</p></div></div><div class="flex items-center rounded-xl bg-slate-800 p-1 border border-slate-700"><button type="button" class="${ssrRenderClass([modalViewport.value === "desktop" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white", "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:desktop-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span class="hidden sm:inline">${ssrInterpolate(__props.copy.common.viewportDesktop)}</span></button><button type="button" class="${ssrRenderClass([modalViewport.value === "tablet" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white", "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:device-tablet-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span class="hidden sm:inline">${ssrInterpolate(__props.copy.common.viewportTablet)}</span></button><button type="button" class="${ssrRenderClass([modalViewport.value === "mobile" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white", "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:device-mobile-camera-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span class="hidden sm:inline">${ssrInterpolate(__props.copy.common.viewportMobile)}</span></button></div><div class="flex items-center gap-3">`);
        if (previewEntry.value.demoUrl) {
          _push(`<a${ssrRenderAttr("href", previewEntry.value.demoUrl)} target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"><span>${ssrInterpolate(__props.copy.common.newWindow)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-up-right-bold",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/themes/${previewEntry.value.slug}`),
          class: "inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-xs font-black text-white shadow-lg transition-all hover:bg-blue-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.copy.common.useTheme)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.copy.common.useTheme), 1),
                createVNode(_component_UIcon, {
                  name: "ph:sparkle-bold",
                  class: "h-3.5 w-3.5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button></div></div><div class="relative flex-1 overflow-y-auto bg-slate-950 p-4 sm:p-6 flex items-start justify-center"><div class="${ssrRenderClass([{
          "w-full max-w-5xl rounded-2xl border border-slate-800 bg-white": modalViewport.value === "desktop",
          "w-[768px] max-w-full rounded-2xl border-4 border-slate-700 bg-white": modalViewport.value === "tablet",
          "w-[375px] max-w-full rounded-[2.5rem] border-8 border-slate-800 bg-white shadow-2xl": modalViewport.value === "mobile"
        }, "transition-all duration-300 overflow-hidden shadow-2xl"])}"><div class="max-h-[82vh] overflow-y-auto bg-white select-none">`);
        if (previewEntry.value.imageUrl) {
          _push(`<img${ssrRenderAttr("src", previewEntry.value.imageUrl)}${ssrRenderAttr("alt", previewEntry.value.name)} class="w-full object-cover">`);
        } else {
          _push(`<div class="flex flex-col items-center justify-center p-20 text-slate-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:browser-duotone",
            class: "h-16 w-16 text-blue-500"
          }, null, _parent));
          _push(`<p class="mt-4 text-base font-bold text-slate-700">${ssrInterpolate(previewEntry.value.name)}</p><p class="mt-2 text-xs text-slate-400">${ssrInterpolate(__props.copy.common.noPreview)}</p></div>`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketplaceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceList = Object.assign(_sfc_main, { __name: "MarketplaceList" });

export { MarketplaceList as default };
//# sourceMappingURL=MarketplaceList-Donchzr7.mjs.map
