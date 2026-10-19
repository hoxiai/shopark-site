import { u as useI18n, _ as _sfc_main$V } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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

const DEFAULT_LOCALES = [
  {
    code: "zh",
    name: "\u4E2D\u6587",
    fullName: "\u7B80\u4F53\u4E2D\u6587",
    englishName: "Simplified Chinese",
    flag: "\u{1F1E8}\u{1F1F3}",
    tag: "ZH"
  },
  {
    code: "zh-HK",
    name: "\u7E41\u4E2D",
    fullName: "\u9999\u6E2F\u7E41\u9AD4",
    englishName: "Traditional Chinese",
    flag: "\u{1F1ED}\u{1F1F0}",
    tag: "HK"
  },
  {
    code: "en",
    name: "EN",
    fullName: "English",
    englishName: "English (US)",
    flag: "\u{1F1FA}\u{1F1F8}",
    tag: "EN"
  },
  {
    code: "ru",
    name: "RU",
    fullName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    englishName: "Russian",
    flag: "\u{1F1F7}\u{1F1FA}",
    tag: "RU"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyLanguageSwitcher",
  __ssrInlineRender: true,
  props: {
    currentLocale: { default: "" },
    locales: { default: () => DEFAULT_LOCALES },
    inverse: { type: Boolean, default: false }
  },
  emits: ["switch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { locale } = useI18n();
    const localeOptions = computed(() => props.locales || DEFAULT_LOCALES);
    const activeLocale = computed(() => props.currentLocale || locale.value || "zh");
    const currentItem = computed(() => localeOptions.value.find((item) => item.code === activeLocale.value) || localeOptions.value[0]);
    const headerTitles = {
      zh: "\u9009\u62E9\u8BED\u8A00",
      "zh-HK": "\u9078\u64C7\u8A9E\u8A00",
      en: "Select Language",
      ru: "\u0412\u044B\u0431\u043E\u0440 \u044F\u0437\u044B\u043A\u0430"
    };
    const headerLabel = computed(() => headerTitles[activeLocale.value] || headerTitles.en);
    const isOpen = ref(false);
    const rootRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UIcon = _sfc_main$V;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "rootRef",
        ref: rootRef,
        class: "relative"
      }, _attrs))}><button type="button" class="${ssrRenderClass([[
        props.inverse ? "border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20 hover:text-white focus-visible:ring-white/40" : "border border-slate-200/90 bg-slate-50/90 text-slate-700 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 focus-visible:ring-blue-500/30",
        isOpen.value ? props.inverse ? "!border-white/50 !bg-white/25 !text-white shadow-sm shadow-black/10" : "!border-blue-400/80 !bg-blue-50/80 !text-blue-600 shadow-sm shadow-blue-500/10" : ""
      ], "group relative inline-flex h-10 items-center gap-2 rounded-full py-0 pl-3 pr-2.5 text-xs font-bold shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 active:scale-95"])}"${ssrRenderAttr("aria-expanded", isOpen.value)} aria-haspopup="true"${ssrRenderAttr("aria-label", _ctx.$t("shoply.nav.language"))}><span class="${ssrRenderClass([[
        props.inverse ? "bg-white/20 text-white group-hover:bg-white/30" : "bg-slate-200/70 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600",
        isOpen.value ? props.inverse ? "!bg-white/35 !text-white" : "!bg-blue-100 !text-blue-600" : ""
      ], "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:translate-bold",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</span><span class="text-sm leading-none select-none">${ssrInterpolate(((_a = currentItem.value) == null ? void 0 : _a.flag) || "\u{1F310}")}</span><span class="font-bold tracking-tight">${ssrInterpolate(((_b = currentItem.value) == null ? void 0 : _b.name) || activeLocale.value)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: ["h-3 w-3 transition-transform duration-200", [
          props.inverse ? "text-white/70 group-hover:text-white" : "text-slate-400 group-hover:text-blue-600",
          { "rotate-180": isOpen.value },
          isOpen.value && !props.inverse ? "!text-blue-600" : ""
        ]]
      }, null, _parent));
      _push(`</button><div class="absolute right-0 top-full z-50 mt-2 w-64 origin-top-right rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-xl ring-1 ring-slate-900/5 focus:outline-none" role="menu" aria-orientation="vertical" tabindex="-1" style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}"><div class="flex items-center justify-between px-2.5 pb-2 pt-1 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400 select-none"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-bold",
        class: "h-3 w-3 text-slate-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(headerLabel.value)}</span><span class="rounded-full bg-slate-100 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-slate-500">${ssrInterpolate(localeOptions.value.length)}</span></div><div class="mt-1 space-y-1"><!--[-->`);
      ssrRenderList(localeOptions.value, (item) => {
        _push(`<button type="button" role="menuitem" class="${ssrRenderClass([activeLocale.value === item.code ? "bg-blue-50/90 text-blue-600 font-bold border border-blue-100/80 shadow-2xs" : "text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent", "group relative flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left transition-all duration-150"])}"><div class="flex items-center gap-2.5 min-w-0"><span class="${ssrRenderClass([{ "!bg-blue-100/70": activeLocale.value === item.code }, "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-base leading-none shadow-2xs transition-transform group-hover:scale-105"])}">${ssrInterpolate(item.flag)}</span><div class="flex flex-col min-w-0"><span class="${ssrRenderClass([activeLocale.value === item.code ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600", "truncate text-xs font-bold leading-tight"])}">${ssrInterpolate(item.fullName)}</span><span class="${ssrRenderClass([activeLocale.value === item.code ? "text-blue-400" : "group-hover:text-slate-500", "truncate text-[10px] leading-tight text-slate-400"])}">${ssrInterpolate(item.englishName)}</span></div></div><div class="flex items-center gap-1.5 shrink-0 ml-2"><span class="${ssrRenderClass([activeLocale.value === item.code ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200/80 group-hover:text-slate-600", "rounded px-1.5 py-0.5 font-mono text-[10px] font-bold"])}">${ssrInterpolate(item.tag)}</span>`);
        if (activeLocale.value === item.code) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-bold",
            class: "h-4 w-4 text-blue-600"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></button>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyLanguageSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "ShoplyLanguageSwitcher" });

export { DEFAULT_LOCALES, __nuxt_component_3 as default };
//# sourceMappingURL=ShoplyLanguageSwitcher-D-nYAmKF.mjs.map
