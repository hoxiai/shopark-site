import { u as useI18n, r as useSettings, bf as useSeoMeta, _ as _sfc_main$R } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-12rK7weU.mjs';
import __nuxt_component_1 from './PageCta-CT1szK7J.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { f as wholesaleLocales } from './marketing-pages-BHsFqGxr.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-CNxPcIoY.mjs';
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
import './CaptchaSlider-BJqv3jPw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wholesale",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { getSetting } = useSettings();
    const { signUpUrl } = useShoplyAuthLinks();
    const consultUrl = computed(() => getSetting("shoply_consult_url", "mailto:support@qingpu.ai"));
    const copy = computed(() => {
      const current = locale.value;
      return wholesaleLocales[current in wholesaleLocales ? current : "zh"];
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
      const _component_UIcon = _sfc_main$R;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      const _component_PageCta = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-20 pb-10 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto w-full max-w-[1380px]"><div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16"><div class="relative z-10 text-left"><div class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-1.5 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-7">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto sm:text-base"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", consultUrl.value)} class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-base">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></a></div><div class="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-100"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:table-bold",
        class: "h-3.5 w-3.5 text-emerald-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[0])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-simple-bold",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[1])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pencil-simple-line-bold",
        class: "h-3.5 w-3.5 text-cyan-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[2])}</span></div></div><div class="relative mx-auto w-full max-w-[580px] lg:max-w-none"><div class="absolute -top-3.5 -right-1.5 z-20 hidden items-center gap-1.5 rounded-full border border-white/90 bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:inline-flex"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(copy.value.demo.leadsPill)}</span></div><div class="overflow-hidden rounded-2xl border border-white/30 bg-slate-900/85 p-2.5 shadow-[0_30px_80px_rgba(13,45,120,0.4)] backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs text-white/60"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="flex items-center gap-1 rounded-md bg-white/10 px-3 py-0.5 font-mono text-[11px] text-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:table-fill",
        class: "h-3 w-3 text-cyan-400"
      }, null, _parent));
      _push(`<span>https://yourbrand.store/products/canvas-bag</span></div><div class="flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-[10px] font-bold text-emerald-300">Wholesale</span></div></div><div class="rounded-b-xl bg-slate-950/90 p-3.5 sm:p-4"><div class="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs"><div class="flex items-center gap-2"><span class="font-bold text-white">${ssrInterpolate(copy.value.demo.table.title)}</span><span class="rounded bg-blue-500/20 px-1.5 py-0.2 text-[10px] font-semibold text-blue-300">${ssrInterpolate(copy.value.demo.table.badge)}</span></div><div class="text-[11px] text-slate-400">${ssrInterpolate(copy.value.demo.stockStrip)}</div></div><div class="mt-2.5 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90"><table class="w-full text-left text-xs"><thead><tr class="border-b border-slate-800 text-[10px] font-bold tracking-wider text-slate-400 uppercase"><th class="py-2 px-3">${ssrInterpolate(copy.value.demo.table.columns.variant)}</th><th class="py-2 px-3">${ssrInterpolate(copy.value.demo.table.columns.stock)}</th><th class="py-2 px-3">${ssrInterpolate(copy.value.demo.table.columns.price)}</th><th class="py-2 px-3 text-right">${ssrInterpolate(copy.value.demo.table.columns.qty)}</th></tr></thead><tbody class="divide-y divide-slate-800/80"><!--[-->`);
      ssrRenderList(copy.value.demo.table.rows.slice(0, 3), (row) => {
        _push(`<tr class="transition-colors hover:bg-white/5"><td class="py-2 px-3 font-semibold text-white">${ssrInterpolate(row.variant)}</td><td class="py-2 px-3 text-slate-400">${ssrInterpolate(row.stock)}</td><td class="py-2 px-3 font-mono text-emerald-300 font-semibold">${ssrInterpolate(row.price)}</td><td class="py-2 px-3 text-right"><span class="inline-flex min-w-[48px] justify-center rounded-lg border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-xs font-bold text-white shadow-inner">${ssrInterpolate(row.qty)}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="mt-3 flex items-center justify-between rounded-xl bg-white/5 p-2.5"><div class="text-xs"><span class="text-slate-400">${ssrInterpolate(copy.value.demo.table.summaryLabel)}:</span><span class="ml-1 text-sm font-black text-white">${ssrInterpolate(copy.value.demo.table.summaryValue)} ${ssrInterpolate(copy.value.demo.unit)}</span><span class="ml-2 text-xs text-emerald-400 font-semibold font-mono">\xA511,540.00</span></div><button type="button" class="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-simple-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.table.action)}</span></button></div><div class="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-300"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chats-circle-fill",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.stripFeatures[0])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pencil-simple-fill",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.stripFeatures[1])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:currency-circle-dollar-fill",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.stripFeatures[2])}</span></div></div></div></div></div></div></div></section><section class="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1280px]"><div class="grid gap-5 md:grid-cols-2"><!--[-->`);
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
//# sourceMappingURL=wholesale-DbNdiB1d.mjs.map
