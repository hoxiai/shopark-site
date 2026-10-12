import { u as useI18n, r as useSettings, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import __nuxt_component_1$1 from './PageCta-BP5IliLQ.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { f as wholesaleLocales } from './marketing-pages-CBN_Ll80.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
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
  __name: "wholesale",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { getSetting } = useSettings();
    const { signUpUrl } = useShoplyAuthLinks();
    computed(() => getSetting("shoply_consult_url", "mailto:support@qingpu.ai"));
    const copy = computed(() => locale.value.startsWith("zh") ? wholesaleLocales.zh : wholesaleLocales.en);
    const tableDemo = computed(() => locale.value.startsWith("zh") ? {
      title: "\u7ECF\u5178\u5E06\u5E03\u5305 \xB7 \u6279\u53D1\u8868\u683C",
      badge: "\u6279\u53D1",
      columns: { variant: "\u89C4\u683C", stock: "\u5E93\u5B58", price: "\u5355\u4EF7", qty: "\u6570\u91CF" },
      rows: [
        { variant: "\u7C73\u767D / S", stock: "1,200", price: "\xA538.00", qty: "120" },
        { variant: "\u7C73\u767D / M", stock: "860", price: "\xA538.00", qty: "80" },
        { variant: "\u6DF1\u84DD / S", stock: "540", price: "\xA539.50", qty: "60" },
        { variant: "\u6DF1\u84DD / M", stock: "320", price: "\xA539.50", qty: "40" }
      ],
      summaryLabel: "\u5408\u8BA1\u4EF6\u6570",
      summaryValue: "300",
      action: "\u6574\u8868\u52A0\u5165\u8D2D\u7269\u8F66"
    } : {
      title: "Classic canvas bag \xB7 wholesale table",
      badge: "Wholesale",
      columns: { variant: "Variant", stock: "Stock", price: "Unit price", qty: "Qty" },
      rows: [
        { variant: "Ivory / S", stock: "1,200", price: "$5.40", qty: "120" },
        { variant: "Ivory / M", stock: "860", price: "$5.40", qty: "80" },
        { variant: "Navy / S", stock: "540", price: "$5.60", qty: "60" },
        { variant: "Navy / M", stock: "320", price: "$5.60", qty: "40" }
      ],
      summaryLabel: "Total units",
      summaryValue: "300",
      action: "Add the table to cart"
    });
    useSeoMeta({
      title: () => copy.value.seo.title,
      description: () => copy.value.seo.description,
      keywords: () => copy.value.seo.keywords,
      ogTitle: () => copy.value.seo.title,
      ogDescription: () => copy.value.seo.description,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.seo.title,
      twitterDescription: () => copy.value.seo.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Q;
      const _component_ShoplyLeadForm = __nuxt_component_1;
      const _component_PageCta = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="relative isolate overflow-hidden bg-[#2678ff] text-white"><div class="absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-28 top-10 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:px-12"><div class="min-w-0"><span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.12em] uppercase backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300"></span> ${ssrInterpolate(copy.value.hero.badge)}</span><h1 class="mt-7 text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-7 max-w-xl text-base leading-8 text-blue-50/85">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-blue-700 shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-0.5 active:scale-95">${ssrInterpolate(copy.value.hero.primaryCta)} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a href="#consult" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(copy.value.hero.secondaryCta)}</a></div><ul class="mt-8 flex flex-wrap gap-2.5 text-xs font-semibold text-blue-50/85"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<li class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3.5 w-3.5 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="min-w-0"><div class="overflow-hidden rounded-[1.75rem] border border-white/20 bg-white p-3 shadow-[0_35px_90px_rgba(4,20,60,0.45)] sm:p-4"><div class="flex items-center justify-between rounded-t-[1.1rem] bg-slate-100 px-4 py-3"><p class="text-xs font-black text-slate-700">${ssrInterpolate(tableDemo.value.title)}</p><span class="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold text-white">${ssrInterpolate(tableDemo.value.badge)}</span></div><div class="overflow-x-auto"><table class="w-full min-w-[420px] text-left text-sm"><thead><tr class="border-b border-slate-200 text-[11px] font-bold tracking-wide text-slate-400 uppercase"><th class="px-4 py-3">${ssrInterpolate(tableDemo.value.columns.variant)}</th><th class="px-4 py-3">${ssrInterpolate(tableDemo.value.columns.stock)}</th><th class="px-4 py-3">${ssrInterpolate(tableDemo.value.columns.price)}</th><th class="px-4 py-3 text-right">${ssrInterpolate(tableDemo.value.columns.qty)}</th></tr></thead><tbody class="divide-y divide-slate-100"><!--[-->`);
      ssrRenderList(tableDemo.value.rows, (row) => {
        _push(`<tr><td class="px-4 py-3 font-semibold text-slate-900">${ssrInterpolate(row.variant)}</td><td class="px-4 py-3 text-slate-500">${ssrInterpolate(row.stock)}</td><td class="px-4 py-3 font-mono text-slate-700">${ssrInterpolate(row.price)}</td><td class="px-4 py-3 text-right"><span class="inline-flex min-w-[52px] justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-sm font-bold text-slate-900">${ssrInterpolate(row.qty)}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="flex flex-wrap items-center justify-between gap-3 rounded-b-[1.1rem] bg-slate-50 px-4 py-4"><p class="text-xs text-slate-500">${ssrInterpolate(tableDemo.value.summaryLabel)} <span class="ml-1.5 font-black text-slate-900">${ssrInterpolate(tableDemo.value.summaryValue)}</span></p><span class="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-simple-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(tableDemo.value.action)}</span></div></div></div></div></section><section class="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1280px]"><div class="grid gap-5 md:grid-cols-2"><!--[-->`);
      ssrRenderList(copy.value.features, (feature) => {
        _push(`<article class="group min-w-0 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"><div class="flex items-center gap-3"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: feature.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">${ssrInterpolate(feature.tag)}</span></div><h2 class="mt-5 text-xl font-extrabold tracking-tight text-slate-900">${ssrInterpolate(feature.title)}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(feature.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1280px]"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">${ssrInterpolate(copy.value.flow.title)}</h2><p class="mt-4 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.flow.subtitle)}</p></div><ol class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.flow.steps, (item) => {
        _push(`<li class="relative min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><span class="text-3xl font-black tracking-tight text-blue-600/20">${ssrInterpolate(item.step)}</span><h3 class="mt-3 text-lg font-extrabold text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-2.5 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></li>`);
      });
      _push(`<!--]--></ol></div></section><section class="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1280px]"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">${ssrInterpolate(copy.value.fit.title)}</h2><p class="mt-4 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.fit.subtitle)}</p></div><div class="mt-14 grid gap-5 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.fit.items, (item) => {
        _push(`<article class="min-w-0 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><h3 class="mt-5 text-lg font-extrabold text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section id="consult" class="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto grid max-w-[1080px] items-start gap-10 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_minmax(0,420px)]"><div class="min-w-0"><h2 class="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">${ssrInterpolate(copy.value.consult.title)}</h2><p class="mt-4 text-sm leading-7 text-slate-600">${ssrInterpolate(copy.value.consult.description)}</p><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.consult.points, (point) => {
        _push(`<li class="flex gap-2.5 text-sm leading-6 text-slate-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(point)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(_component_ShoplyLeadForm, {
        source: "wholesale",
        "demand-placeholder": copy.value.consult.demandPlaceholder
      }, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_PageCta, {
        title: copy.value.bottomCta.title,
        description: copy.value.bottomCta.subtitle,
        "primary-label": copy.value.bottomCta.primaryText,
        "primary-url": unref(signUpUrl),
        "secondary-label": copy.value.bottomCta.secondaryText,
        "secondary-url": "#consult"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/wholesale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
