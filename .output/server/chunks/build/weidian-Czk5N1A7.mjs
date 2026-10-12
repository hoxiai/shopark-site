import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { w as weidianLocales } from './marketing-pages-CBN_Ll80.mjs';
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
import './CaptchaSlider-BJqv3jPw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "weidian",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return weidianLocales[current in weidianLocales ? current : "zh"];
    });
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in weidianLocales) return weidianLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.weidian.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in weidianLocales) return weidianLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.weidian.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in weidianLocales) return weidianLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.weidian.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Q;
      const _component_ShoplyLeadForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-28 sm:pt-24 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chalkboard-teacher-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-100 sm:text-sm"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mt-14 mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"><div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"><div><div class="text-3xl font-black text-amber-300">50,000+</div><div class="mt-1 text-xs text-blue-200/80">\u5FAE\u5E97\u5E97\u4E3B\u4FE1\u8D56\u9009\u62E9</div></div><div><div class="text-3xl font-black text-white">100%</div><div class="mt-1 text-xs text-blue-200/80">\u5168\u81EA\u52A8\u4E91\u7AEF\u540C\u6B65</div></div><div><div class="text-3xl font-black text-emerald-400">0 \u5143</div><div class="mt-1 text-xs text-blue-200/80">14 \u5929\u514D\u8D39\u65E0\u635F\u8BD5\u7528</div></div><div><div class="text-3xl font-black text-sky-300">3 \u5206\u949F</div><div class="mt-1 text-xs text-blue-200/80">\u6781\u901F\u5B8C\u6210\u9996\u5E97\u642C\u8FC1</div></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> \u6781\u901F\u4E0A\u624B </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u4E00\u952E\u8FC1\u79FB\uFF0C\u5C31\u662F\u8FD9\u4E48\u7B80\u5355 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u544A\u522B\u7E41\u7410\u7E41\u590D\u7684\u4EBA\u5DE5\u642C\u5BB6\uFF0C\u53EA\u9700\u8F93\u5165\u5E97\u94FA\u5730\u5740\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u6293\u53D6\u5E76\u751F\u6210\u72EC\u7ACB\u7AD9\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.steps, (s) => {
        _push(`<div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"><div class="flex items-center justify-between"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: s.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><span class="text-5xl font-black text-slate-100">0${ssrInterpolate(s.num)}</span></div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(s.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(s.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl"> \u4E3A\u4EC0\u4E48 50,000+ \u5FAE\u5E97\u5546\u5BB6\u9009\u62E9\u5347\u7EA7\u5230\u72EC\u7ACB\u7AD9\uFF1F </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u4ECE\u56FD\u5185\u5E73\u53F0\u8D70\u5411\u5168\u7403\u79C1\u57DF\uFF0C\u7A81\u7834\u89C4\u5219\u9650\u5236\uFF0C\u5EFA\u7ACB\u771F\u6B63\u7684\u81EA\u4E3B\u54C1\u724C\u9635\u5730\u3002 </p></div><div class="mt-14 grid gap-6 md:grid-cols-2"><div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"><div class="flex items-center gap-3 text-slate-700 font-bold text-lg">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:x-circle-fill",
        class: "h-6 w-6 text-rose-500"
      }, null, _parent));
      _push(` \u4F20\u7EDF\u5FAE\u5E97\u7ECF\u8425\u75DB\u70B9 </div><ul class="mt-6 space-y-4 text-sm text-slate-600"><li class="flex items-start gap-2.5"><span class="text-rose-500 font-bold">\u2715</span><span>\u5E73\u53F0\u6263\u70B9\u4E0E\u62BD\u4F63\u9AD8\uFF0C\u968F\u653F\u7B56\u968F\u65F6\u8C03\u6574\uFF0C\u5229\u6DA6\u88AB\u6301\u7EED\u538B\u7F29</span></li><li class="flex items-start gap-2.5"><span class="text-rose-500 font-bold">\u2715</span><span>\u89C4\u5219\u4E25\u683C\u5BB9\u6613\u8BEF\u5224\u8FDD\u89C4\u5C01\u5E97\uFF0C\u591A\u5E74\u5FC3\u8840\u4E00\u5915\u5F52\u96F6</span></li><li class="flex items-start gap-2.5"><span class="text-rose-500 font-bold">\u2715</span><span>\u4EC5\u652F\u6301\u56FD\u5185\u4EBA\u6C11\u5E01\u652F\u4ED8\uFF0C\u65E0\u6CD5\u62D3\u5C55\u6E2F\u6FB3\u53F0\u4E0E\u6D77\u5916\u534E\u4EBA\u4E70\u5BB6\u5E02\u573A</span></li><li class="flex items-start gap-2.5"><span class="text-rose-500 font-bold">\u2715</span><span>\u65E0\u6CD5\u7ED1\u5B9A\u81EA\u4E3B\u4E2A\u6027\u5316\u54C1\u724C\u72EC\u7ACB\u57DF\u540D\uFF0C\u54C1\u724C\u6EA2\u4EF7\u96BE\u4EE5\u5EFA\u7ACB</span></li></ul></div><div class="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-8"><div class="flex items-center gap-3 text-blue-900 font-bold text-lg">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "h-6 w-6 text-emerald-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(brandName.value)} \u72EC\u7ACB\u7AD9\u5347\u7EA7\u4F18\u52BF </div><ul class="mt-6 space-y-4 text-sm text-slate-700"><li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">\u2713</span><span>0 \u4F63\u91D1\u6263\u70B9\uFF0C\u8425\u6536\u76F4\u63A5\u8FDB\u5165\u81EA\u4E3B\u7ED1\u5B9A\u7684\u652F\u4ED8\u8D26\u6237</span></li><li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">\u2713</span><span>\u81EA\u4E3B\u62E5\u6709\u5E97\u94FA\u6240\u6709\u6743\u4E0E\u7B2C\u4E00\u65B9\u5BA2\u6237\u540D\u5355\uFF0C\u6570\u636E 100% \u81EA\u4E3B\u638C\u63A7</span></li><li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">\u2713</span><span>\u652F\u6301\u5FAE\u4FE1\u652F\u4ED8\u3001\u652F\u4ED8\u5B9D\u3001\u4FE1\u7528\u5361\u53CA PayPal\uFF0C\u5168\u7403\u4E70\u5BB6\u4E00\u7F51\u6253\u5C3D</span></li><li class="flex items-start gap-2.5"><span class="text-emerald-500 font-bold">\u2713</span><span>\u81EA\u7531\u7ED1\u5B9A\u72EC\u7ACB\u4E00\u7EA7\u9876\u7EA7\u57DF\u540D\uFF0C\u6253\u9020\u771F\u6B63\u7684\u9AD8\u7AEF\u54C1\u724C\u8C03\u6027</span></li></ul></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span></button></div></div></section>`);
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:storefront-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6\u5FAE\u5E97\u8FC1\u79FB\u4E13\u5C5E\u987E\u95EE</h3><p class="mt-2 text-xs text-slate-500">\u4E13\u4E1A\u51FA\u6D77\u5BA2\u670D\u5C06\u534F\u52A9\u60A8\u4E00\u952E\u540C\u6B65\u5FAE\u5E97\u6240\u6709\u5546\u54C1\u4E0E\u5386\u53F2\u6570\u636E</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "weidian-migration"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/weidian.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
