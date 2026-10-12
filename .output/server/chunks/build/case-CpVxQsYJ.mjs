import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { d as caseLocales } from './marketing-pages-CBN_Ll80.mjs';
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

const casesBanner = "" + buildAssetsURL("cases-banner.7QlgNE2v.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "case",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return caseLocales[current in caseLocales ? current : "zh"];
    });
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const tabs = [
      { id: "b2b", name: "\u5916\u8D38 B2B \u5236\u9020\u4F01\u4E1A" },
      { id: "amazon", name: "\u4E9A\u9A6C\u900A\u54C1\u724C\u5356\u5BB6" },
      { id: "dtc", name: "\u5782\u76F4\u54C1\u7C7B DTC \u54C1\u724C" }
    ];
    const activeTab = ref(0);
    const currentCategory = computed(() => {
      const cats = copy.value.categories || [];
      return cats[activeTab.value] || cats[0] || {
        name: "\u51FA\u6D77\u6807\u6746\u4F01\u4E1A",
        title: "\u81EA\u4E3B\u51FA\u6D77\u6570\u5B57\u5316\u5168\u94FE\u8DEF",
        metric: "+200%",
        metricLabel: "\u7EFC\u5408\u6548\u76CA\u63D0\u5347",
        desc: `\u501F\u52A9 ${brandName.value} \u72EC\u7ACB\u7AD9\u7CFB\u7EDF\u5F00\u542F\u5168\u57DF\u79C1\u57DF\u589E\u957F\u3002`
      };
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.case.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.case.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.case.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => casesBanner,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => casesBanner
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
        name: "ph:presentation-chart-bold",
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
      _push(`<!--]--></div></div><div class="mt-14 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md"><div class="text-4xl font-black text-amber-300">+280%</div><div class="mt-2 text-sm font-semibold text-white">\u6D77\u5916\u9AD8\u8D28\u91CF\u8BE2\u76D8\u63D0\u5347</div><div class="mt-1 text-xs text-blue-200/70">\u5916\u8D38 B2B \u5236\u9020\u884C\u4E1A\u6807\u6746</div></div><div class="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md"><div class="text-4xl font-black text-sky-300">3.4 \u500D</div><div class="mt-2 text-sm font-semibold text-white">\u4E70\u5BB6\u79C1\u57DF\u8D44\u4EA7\u6C89\u6DC0</div><div class="mt-1 text-xs text-blue-200/70">\u4E9A\u9A6C\u900A\u5934\u90E8\u7206\u6B3E\u77E9\u9635</div></div><div class="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md"><div class="text-4xl font-black text-emerald-300">42%</div><div class="mt-2 text-sm font-semibold text-white">\u6D77\u5916\u5BA2\u6237\u5E74\u5747\u590D\u8D2D\u7387</div><div class="mt-1 text-xs text-blue-200/70">\u5782\u76F4\u54C1\u7C7B DTC \u54C1\u724C</div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="flex flex-wrap items-center justify-center gap-3"><!--[-->`);
      ssrRenderList(tabs, (tab, idx) => {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === idx ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100", "rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200"])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div><div class="mt-12 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm"><div class="grid gap-10 lg:grid-cols-2 items-center"><div><div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600"><span>\u6807\u6746\u6848\u4F8B</span><span>\u2022</span><span>${ssrInterpolate(currentCategory.value.name)}</span></div><h2 class="mt-4 text-2xl sm:text-3xl font-black text-slate-900">${ssrInterpolate(currentCategory.value.title)}</h2><p class="mt-4 text-base leading-relaxed text-slate-600">${ssrInterpolate(currentCategory.value.desc)}</p><div class="mt-8 flex items-center gap-6 border-y border-slate-100 py-6"><div><div class="text-3xl sm:text-4xl font-black text-blue-600">${ssrInterpolate(currentCategory.value.metric)}</div><div class="mt-1 text-xs font-semibold text-slate-500">${ssrInterpolate(currentCategory.value.metricLabel)}</div></div><div class="h-10 w-px bg-slate-200"></div><div><div class="text-3xl sm:text-4xl font-black text-slate-900">100%</div><div class="mt-1 text-xs font-semibold text-slate-500">\u81EA\u4E3B\u6570\u636E\u5F52\u5C5E</div></div></div><div class="mt-8 flex flex-wrap items-center gap-4"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600"><span>\u7ACB\u5373\u501F\u9274\u672C\u6848\u6A21\u5F0F</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chats-teardrop-bold",
        class: "h-4 w-4 text-blue-600"
      }, null, _parent));
      _push(`<span>\u9884\u7EA6\u987E\u95EE\u8BE6\u7EC6\u62C6\u89E3</span></button></div></div><div class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl"><img${ssrRenderAttr("src", unref(casesBanner))} alt="Case Delivery Visual Preview" class="w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6"><div class="text-white"><div class="flex items-center gap-2 text-xs font-bold text-amber-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-check-fill",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(brandName.value)} \u5B98\u65B9\u5B9E\u65BD\u4EA4\u4ED8\u8BA4\u8BC1</span></div><p class="mt-1 text-sm text-slate-300 font-medium">\u5168\u94FE\u8DEF\u67B6\u6784\u3001\u591A\u8BED\u79CD\u672C\u5730\u5316\u4E0E\u9AD8\u8F6C\u5316\u7ED3\u7B97\u4F53\u7CFB\u4E00\u7AD9\u5F0F\u843D\u6210</p></div></div></div></div></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"><div><span class="text-xs font-bold text-blue-600 uppercase tracking-wider">\u673A\u68B0\u4E0E\u91CD\u5DE5\u5236\u9020</span><h3 class="mt-2 font-bold text-lg text-slate-900">\u4ECE\u4F20\u7EDF\u5E7F\u4EA4\u4F1A\u5230 Google \u641C\u7D22\u5934\u7248</h3><p class="mt-2 text-xs leading-relaxed text-slate-600"> \u4E3A\u6C5F\u82CF\u67D0\u5DE5\u4E1A\u9600\u95E8\u5236\u9020\u5382\u642D\u5EFA 15 \u8BED\u79CD\u72EC\u7ACB\u7AD9\uFF0C\u4E0A\u7EBF 6 \u4E2A\u6708\u83B7\u5F97 300+ \u6B27\u7F8E\u771F\u5B9E\u5DE5\u7A0B\u8BE2\u76D8\uFF0C\u76F4\u63A5\u8FBE\u6210 200 \u4E07\u7F8E\u5143\u5916\u8D38\u91C7\u8D2D\u5355\u3002 </p></div><div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span>\u4EA4\u4ED8\u5468\u671F\uFF1A1 \u5468</span><span class="text-emerald-600 font-bold">\u8BE2\u76D8\u8F6C\u5316\u7387 8.4%</span></div></div><div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"><div><span class="text-xs font-bold text-sky-600 uppercase tracking-wider">\u4E9A\u9A6C\u900A 3C \u6570\u7801\u5927\u5356</span><h3 class="mt-2 font-bold text-lg text-slate-900">\u793E\u5A92\u5168\u57DF\u79CD\u8349\u4E0E\u4E9A\u9A6C\u900A\u7AD9\u5916\u76F4\u8FBE</h3><p class="mt-2 text-xs leading-relaxed text-slate-600"> \u901A\u8FC7\u72EC\u7ACB\u7AD9\u843D\u5730\u9875\u627F\u63A5 TikTok \u7F51\u7EA2\u5F00\u7BB1\u8BC4\u6D4B\u6D41\u91CF\uFF0C\u4E00\u952E Buy on Amazon \u76F4\u8FBE\u5E97\u94FA\uFF0C\u6210\u529F\u5C06\u6838\u5FC3\u65B0\u54C1\u63A8\u81F3\u7C7B\u76EE Best Seller \u7B2C\u4E00\u3002 </p></div><div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span>\u4EA4\u4ED8\u5468\u671F\uFF1A3 \u5929</span><span class="text-emerald-600 font-bold">ROI \u63D0\u5347 2.3 \u500D</span></div></div><div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"><div><span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">\u65F6\u5C1A\u4E0E\u8F7B\u5962\u5BB6\u5C45</span><h3 class="mt-2 font-bold text-lg text-slate-900">\u9AD8\u8D28\u611F\u54CD\u5E94\u5F0F\u89C6\u89C9\u4E0E\u5168\u7403\u4FE1\u7528\u5361\u65E0\u7F1D\u6536\u5355</h3><p class="mt-2 text-xs leading-relaxed text-slate-600"> \u91C7\u7528 ${ssrInterpolate(brandName.value)} \u591A\u884C\u4E1A\u81EA\u9002\u5E94\u4E3B\u9898\uFF0C\u63A5\u5165 PayPal \u4E0E Stripe\uFF0C\u5BA2\u5355\u4EF7\u63D0\u5347\u81F3 $180\uFF0C\u6210\u529F\u5F00\u62D3\u6B27\u6D32 8 \u56FD\u5E02\u573A\u3002 </p></div><div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500"><span>\u4EA4\u4ED8\u5468\u671F\uFF1A5 \u5929</span><span class="text-emerald-600 font-bold">\u9000\u6B3E\u7387\u964D\u81F3 0.8%</span></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
          name: "ph:presentation-chart-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6\u540C\u884C\u4E1A\u6848\u4F8B\u62C6\u89E3</h3><p class="mt-2 text-xs text-slate-500">\u51FA\u6D77\u589E\u957F\u987E\u95EE\u5C06\u4E3A\u60A8\u63D0\u4F9B\u540C\u54C1\u7C7B\u6210\u529F\u5356\u5BB6\u7684\u5168\u5957\u6253\u6CD5\u53C2\u8003</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "cases"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/case.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
