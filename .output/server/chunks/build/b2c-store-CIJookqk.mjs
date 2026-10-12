import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { c as b2cStoreLocales } from './marketing-pages-CBN_Ll80.mjs';
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

const advantageImg = "" + buildAssetsURL("b2c-advantage.DaVWnhjf.jpg");
const paymentsImg = "" + buildAssetsURL("b2c-payments.B4dPS6NP.png");
const logisticsImg = "" + buildAssetsURL("b2c-logistics.DMzI53d5.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "b2c-store",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return b2cStoreLocales[current in b2cStoreLocales ? current : "zh"];
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in b2cStoreLocales) return b2cStoreLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.b2c-store.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in b2cStoreLocales) return b2cStoreLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.b2c-store.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in b2cStoreLocales) return b2cStoreLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.b2c-store.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => advantageImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => advantageImg
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
        name: "ph:headset-bold",
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
      _push(`<!--]--></div></div><div class="relative mx-auto mt-14 max-w-5xl"><div class="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/60 p-2 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/50"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80"></span><span class="h-3 w-3 rounded-full bg-amber-500/80"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80"></span></div><div class="hidden rounded-lg bg-white/10 px-6 py-1 text-blue-200/80 sm:block font-mono"> https://yourbrand-dtc.store </div><div class="flex items-center gap-2"><span class="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">Global Payments</span></div></div><div class="relative overflow-hidden rounded-b-[1.5rem] bg-slate-950"><img${ssrRenderAttr("src", unref(advantageImg))} alt="B2C Brand Store" class="w-full object-cover transition-transform duration-700 hover:scale-[1.01]" loading="eager"></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> DTC \u6838\u5FC3\u4F18\u52BF </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u505A\u54C1\u724C\u72EC\u7ACB\u7AD9\uFF0C\u628A\u5229\u6DA6\u638C\u63E1\u5728\u81EA\u5DF1\u624B\u4E2D </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u65E0\u9700\u5FCD\u53D7\u9AD8\u6602\u4F63\u91D1\u4E0E\u968F\u610F\u5C01\u5E97\uFF0C\u7528\u5F3A\u5927\u7684\u5EFA\u7AD9\u5DE5\u5177\u4E0E\u5168\u7403\u751F\u6001\u6784\u5EFA\u81EA\u4E3B\u54C1\u724C\u79C1\u57DF\u3002 </p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.features, (f, idx) => {
        _push(`<div class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"><div><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: f.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><span class="mt-4 inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">${ssrInterpolate(f.tag)}</span><h3 class="mt-1 text-lg font-bold text-slate-900">${ssrInterpolate(f.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(f.desc)}</p></div><div class="mt-6 pt-4 border-t border-slate-100"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"><span>\u7ACB\u5373\u5F00\u901A</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-right-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</a></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white overflow-hidden"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="grid gap-12 lg:grid-cols-2 items-center"><div><span class="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700"> \u5168\u7403\u65E0\u7F1D\u6536\u6B3E </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u652F\u6301\u4E3B\u6D41\u5168\u7403\u652F\u4ED8\u901A\u9053\u4E0E\u672C\u5730\u8D27\u5E01 </h2><p class="mt-4 text-base leading-relaxed text-slate-600"> \u6DF1\u5EA6\u96C6\u6210 PayPal \u6700\u65B0 PayPal Commerce \u4F53\u7CFB\u3001Stripe\u3001\u56FD\u9645\u4FE1\u7528\u5361\uFF08Visa / MasterCard / AMEX\uFF09\uFF0C\u5E76\u652F\u6301\u6839\u636E\u4E70\u5BB6 IP \u81EA\u52A8\u5448\u73B0\u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u53CA\u4E2D\u4E1C\u3001\u4E1C\u5357\u4E9A\u8D27\u5230\u4ED8\u6B3E\uFF08COD\uFF09\u3002 </p><div class="mt-8 space-y-4"><div class="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:paypal-logo-duotone",
        class: "h-8 w-8 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="font-bold text-slate-900 text-sm">\u6DF1\u5EA6\u5BF9\u63A5\u6700\u65B0 PayPal Commerce</h4><p class="text-xs text-slate-600 mt-1">\u652F\u6301\u4E2A\u4EBA\u4E0E\u4F01\u4E1A PayPal \u8D26\u6237\u6536\u6B3E\uFF0C\u652F\u6301 PayPal \u5FEB\u6377\u652F\u4ED8\u4E0E\u4E89\u8BAE\u5FEB\u901F\u5728\u7EBF\u5904\u7406\u3002</p></div></div><div class="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:credit-card-duotone",
        class: "h-8 w-8 text-indigo-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="font-bold text-slate-900 text-sm">\u4E3B\u6D41\u56FD\u9645\u4FE1\u7528\u5361 &amp; \u672C\u5730\u5316\u7F51\u5173</h4><p class="text-xs text-slate-600 mt-1">\u8986\u76D6\u5317\u7F8E\u3001\u6B27\u6D32\u3001\u62C9\u7F8E\u3001\u4E9A\u592A\u7B49\u4E3B\u6D41\u652F\u4ED8\u4E60\u60EF\uFF0C\u667A\u80FD\u9632\u6B3A\u8BC8\u4FDD\u62A4\u6BCF\u4E00\u7B14\u4EA4\u6613\u5B89\u5168\u3002</p></div></div></div></div><div class="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm"><img${ssrRenderAttr("src", unref(paymentsImg))} alt="Global Payments" class="w-full rounded-2xl object-contain shadow-inner bg-white p-4"></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="grid gap-12 lg:grid-cols-2 items-center"><div class="order-2 lg:order-1 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"><img${ssrRenderAttr("src", unref(logisticsImg))} alt="Global Logistics" class="w-full rounded-2xl object-contain"></div><div class="order-1 lg:order-2"><span class="rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700"> \u667A\u80FD\u7269\u6D41\u96C6\u6210 </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u5BF9\u63A5\u5B8C\u6574\u8DE8\u5883\u7269\u6D41\u7CFB\u7EDF\uFF0C\u4F4E\u6210\u672C\u9AD8\u6548\u5C65\u7EA6 </h2><p class="mt-4 text-base leading-relaxed text-slate-600"> \u652F\u6301\u5168\u7403\u4E3B\u6D41\u5FEB\u9012\u4E0E\u4E13\u7EBF\u7269\u6D41\uFF0C\u8BA9\u51FA\u6D77\u5C65\u7EA6\u6E05\u6670\u900F\u660E\uFF0C\u6781\u5927\u63D0\u5347\u6D77\u5916\u4E70\u5BB6\u6EE1\u610F\u5EA6\u4E0E\u590D\u8D2D\u7387\u3002 </p><div class="mt-8 space-y-4"><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">1</div><div><h4 class="font-bold text-slate-900 text-sm">\u7CBE\u51C6\u8FD0\u8D39\u9884\u4F30</h4><p class="text-xs text-slate-600 mt-1">\u5BA2\u6237\u4E0B\u5355\u65F6\u6839\u636E\u76EE\u7684\u5730\u56FD\u5BB6\u3001\u91CD\u91CF\u4E0E\u5230\u8D27\u65F6\u6548\u81EA\u52A8\u8BA1\u7B97\u7CBE\u51C6\u8FD0\u8D39\u89C4\u5219\u3002</p></div></div><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">2</div><div><h4 class="font-bold text-slate-900 text-sm">\u4F18\u8D28\u7EBF\u8DEF\u667A\u80FD\u5339\u914D</h4><p class="text-xs text-slate-600 mt-1">\u65E0\u7F1D\u5BF9\u63A5 DHL\u3001UPS\u3001EMS \u53CA\u5404\u5927\u4F18\u52BF\u4E13\u7EBF\uFF0C\u9009\u62E9\u6027\u4EF7\u6BD4\u6700\u9AD8\u7684\u670D\u52A1\u6E20\u9053\u3002</p></div></div><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">3</div><div><h4 class="font-bold text-slate-900 text-sm">\u7AEF\u5230\u7AEF\u8F68\u8FF9\u8DDF\u8E2A</h4><p class="text-xs text-slate-600 mt-1">\u4E70\u5BB6\u53EF\u5728\u524D\u53F0\u5B9E\u65F6\u8F93\u5165\u5355\u53F7\u67E5\u8BE2\u7269\u6D41\u52A8\u6001\uFF0C\u652F\u6301\u90AE\u4EF6\u81EA\u52A8\u63A8\u9001\u5404\u8FD0\u8F93\u8282\u70B9\u3002</p></div></div></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chats-teardrop-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6 B2C \u72EC\u7ACB\u7AD9\u65B9\u6848\u54A8\u8BE2</h3><p class="mt-2 text-xs text-slate-500">\u4E13\u4E1A\u51FA\u6D77\u987E\u95EE\u5C06\u5728 1 \u5C0F\u65F6\u5185\u4E0E\u60A8\u53D6\u5F97\u8054\u7CFB\u5E76\u63D0\u4F9B\u4E13\u5C5E\u5EFA\u7AD9\u6307\u5F15</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "b2c-store"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/b2c-store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
