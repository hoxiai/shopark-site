import { dr as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bg as useSeoMeta, _ as _sfc_main$S } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-BPVVz4Cl.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { d as b2cStoreLocales } from './marketing-pages-BHsFqGxr.mjs';
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

const advantageImg = "" + buildAssetsURL("b2c-advantage.DaVWnhjf.jpg");
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
      const _component_UIcon = _sfc_main$S;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-20 pb-10 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto w-full max-w-[1380px]"><div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16"><div class="relative z-10 text-left"><div class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-1.5 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-7">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto sm:text-base"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-base">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:headset-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-100"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-fill",
        class: "h-3.5 w-3.5 text-emerald-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[0])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[1])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:currency-circle-dollar-fill",
        class: "h-3.5 w-3.5 text-cyan-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.quickPills[2])}</span></div></div><div class="relative mx-auto w-full max-w-[580px] lg:max-w-none"><div class="absolute -top-3.5 -right-1.5 z-20 hidden items-center gap-1.5 rounded-full border border-white/90 bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:inline-flex"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(copy.value.demo.leadsPill)}</span></div><div class="overflow-hidden rounded-2xl border border-white/30 bg-slate-900/85 p-2.5 shadow-[0_30px_80px_rgba(13,45,120,0.4)] backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs text-white/60"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="flex items-center gap-1 rounded-md bg-white/10 px-3 py-0.5 font-mono text-[11px] text-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3 w-3 text-emerald-400"
      }, null, _parent));
      _push(`<span>https://yourbrand.store/checkout</span></div><div class="flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-[10px] font-bold text-emerald-300">Live</span></div></div><div class="rounded-b-xl bg-slate-950/90 p-3.5 sm:p-4.5"><div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs"><div class="flex items-baseline gap-2"><span class="text-xs font-semibold text-slate-400">${ssrInterpolate(copy.value.demo.checkoutLabel)}</span><span class="text-base font-black text-white sm:text-lg">$189.00 USD</span><span class="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">${ssrInterpolate(copy.value.demo.zeroFeeBadge)}</span></div><div class="text-[11px] font-medium text-blue-200/90">${ssrInterpolate(copy.value.demo.directPayLabel)}</div></div><div class="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4"><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-blue-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4H4.2C3.5 4 3 4.5 2.9 5.2L0 23.6C-0.1 24.1 0.3 24.6 0.9 24.6H5.2C5.9 24.6 6.4 24.1 6.5 23.4L7.5 17.1C7.6 16.4 8.1 15.9 8.8 15.9H11.5C16.8 15.9 20.3 13.3 21.1 8C21.5 5.5 20.1 4 12.5 4Z" fill="#003087"></path><path d="M13.8 9.5C13.2 13.4 10.6 15.4 6.8 15.4H4.8C4.3 15.4 3.9 15.8 3.8 16.3L2.3 26C2.2 26.4 2.5 26.8 2.9 26.8H6.5C7 26.8 7.4 26.4 7.5 26L8.3 21C8.4 20.5 8.8 20.1 9.3 20.1H11.2C15.4 20.1 18.2 18 18.8 13.7C19.1 11.7 18 10.5 13.8 9.5Z" fill="#0079C1"></path><path d="M6.8 15.4H4.8C4.3 15.4 3.9 15.8 3.8 16.3L2.9 22C3.5 21.5 4.3 21.2 5.2 21.2H7.5L8.3 16.3C8.4 15.8 8 15.4 7.5 15.4H6.8Z" fill="#00457C"></path><text x="25" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" font-style="italic" fill="#0079C1">Pay<tspan fill="#00457C">Pal</tspan></text></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">PayPal</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-indigo-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.5 14.3c0-4.6-2.3-8.2-6.7-8.2-4.5 0-7.2 3.6-7.2 8.2 0 5.4 3.2 8.2 7.7 8.2 2.2 0 3.9-.5 5.2-1.3v-3.3c-1.3.8-2.7 1.2-4.4 1.2-1.7 0-3.3-.7-3.5-2.8h8.8c0-.4.1-1.4.1-2zm-8.8-1.5c.1-2 1.3-2.9 2.5-2.9 1.1 0 2.3.9 2.3 2.9h-4.8zM47.7 6.1c-1.8 0-3 .9-3.6 1.5v-1.3h-4.8v21.5l5-.1.1-5.2c.6.6 1.7 1.3 3.3 1.3 3.6 0 6.6-2.9 6.6-8.8 0-5.7-3.1-8.9-6.6-8.9zm-1.1 13.6c-1.2 0-2.3-.5-2.7-1v-6.7c.5-.6 1.5-1.1 2.7-1.1 2 0 3.3 1.7 3.3 4.4 0 2.8-1.2 4.4-3.3 4.4zM32.5 3.3L37.7 2.2v4.2l-5.2 1.1V3.3zm0 3.1h5.2v16.1h-5.2V6.4zM24.7 9c-1.1-.5-2.6-.9-4-.9-2.3 0-3.8 1.1-3.8 3 0 3.7 5.1 3.1 5.1 6.1 0 .9-.8 1.5-1.9 1.5-1.5 0-3.3-.6-4.6-1.5l-1.5 3.5c1.4.9 3.5 1.5 5.5 1.5 3.8 0 6.3-1.8 6.3-4.7 0-4.1-5.2-3.4-5.2-6.2 0-.8.7-1.3 1.7-1.3 1.3 0 2.8.5 3.8 1.1L24.7 9zM5.5 10.3c0-.8.7-1.1 1.8-1.1 1.6 0 3.6.5 5 1.4l1.8-3.7C12.4 5.8 10 5.2 7.3 5.2 2.7 5.2 0 7.8 0 11.9c0 6.3 8.7 5.3 8.7 8 0 1-.9 1.3-2.1 1.3-1.8 0-4.1-.7-5.9-1.9L-1.2 23c2 1.1 4.7 1.8 7.4 1.8 4.9 0 7.8-2.4 7.8-6.7 0-6.8-8.5-5.6-8.5-7.8z" fill="#635BFF"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Stripe</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-slate-400 hover:bg-slate-800"><svg class="h-5 w-auto text-white sm:h-6" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6 8.3C10.9 9.1 9.9 9.7 8.9 9.6c-.1-1 .3-2 1-2.8.7-.8 1.8-1.4 2.8-1.4.1 1-.4 2-1.1 2.9zm1.1 1.4c-1.6-.1-2.9.9-3.7.9-.7 0-1.9-.9-3.2-.8-1.6.1-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.3 1-1.4 1.3-2.7 1.4-2.8-.1-.1-2.6-1-2.6-4 0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.4-1.9z" fill="currentColor"></path><path d="M27.2 6.6h4.5c3.2 0 5.4 2.1 5.4 5.2s-2.2 5.3-5.4 5.3h-2.1v6.1h-2.4V6.6zm4.3 8.3c1.9 0 3.1-1.2 3.1-3.1 0-1.9-1.2-3.1-3.1-3.1h-1.9v6.2h1.9zm14.7 8.3c-.3-.7-.5-1.5-.5-2.2-1 1.4-2.5 2.5-4.4 2.5-2.5 0-4.3-1.6-4.3-4 0-2.7 2.1-3.9 5.8-4.1l2.8-.2v-.8c0-1.3-.9-2.2-2.5-2.2-1.4 0-2.5.6-2.8 1.5h-2.2c.4-2 2.4-3.4 5-3.4 2.9 0 4.8 1.5 4.8 4.1v6.7c0 .8.1 1.5.4 2.1h-2.1zm-3.8-1.8c1.9 0 3.3-1.3 3.8-2.6v-1.7l-2.4.2c-2.4.2-3.8.9-3.8 2.3 0 1.1.9 1.8 2.4 1.8zm11.7 6.4c-1.3 0-2.1-.3-2.8-.9l-.3 1.9c.7.4 1.6.7 2.7.7 2.5 0 3.8-1.4 4.5-3.8l5.1-14.8h-2.5l-3.6 11.4-3.6-11.4h-2.6l4.6 13.2c-.4 1.7-1 2.7-2.5 2.7z" fill="currentColor"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Apple Pay</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-amber-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 74 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 14.2c0-.5 0-1-.1-1.5H6.5v2.8h3.6c-.2.9-.7 1.7-1.5 2.2v1.8h2.4c1.4-1.3 2.2-3.2 2.2-5.3z" fill="#4285F4"></path><path d="M6.5 20.6c1.9 0 3.5-.6 4.7-1.7l-2.4-1.8c-.6.4-1.4.7-2.3.7-1.8 0-3.3-1.2-3.8-2.8H.2v1.9c1.2 2.3 3.6 3.7 6.3 3.7z" fill="#34A853"></path><path d="M2.7 14.9c-.2-.6-.2-1.2-.2-1.9 0-.7.1-1.3.2-1.9V9.2H.2C-.3 10.3-.6 11.6-.6 13s.3 2.7.8 3.8l2.5-1.9z" fill="#FBBC05"></path><path d="M6.5 7.2c1 0 2 .4 2.7 1l2-2C10 5.1 8.4 4.4 6.5 4.4 3.8 4.4 1.4 5.8.2 8.1l2.5 1.9c.5-1.6 2-2.8 3.8-2.8z" fill="#EA4335"></path><path d="M28.4 12.3c0-2.9-2.3-5.2-5.2-5.2h-4.3v14.4h2.2v-4.7h2.1c2.9 0 5.2-2.3 5.2-5.2zm-2.2 0c0 1.7-1.4 3-3 3h-2.1v-6h2.1c1.6 0 3 1.3 3 3zm13.1 2.3c0-2.4-1.8-4-4.1-4-2.5 0-4.3 1.8-4.3 4.3 0 2.5 1.8 4.3 4.3 4.3 1.2 0 2.3-.5 3-1.3v1.1h2.1V10.7h-2.1v1.2c-.7-.8-1.8-1.3-3-1.3zm-4.1 2.7c-1.4 0-2.4-1.1-2.4-2.4s1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1 2.4-2.4 2.4zm16.5-6.6l-3.9 9.3-3.8-9.3h-2.4l5.1 11.9-2.2 4.9h2.3l7.3-16.8h-2.4z" fill="#CBD5E1"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Google Pay</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-blue-500 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 64 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7 1.5L16.8 21.2H11.2L6.8 5.7C6.5 4.6 6.3 4.2 5.4 3.7C3.9 2.9 1.8 2.2 0 1.8L0.3 0.6H9.7C10.9 0.6 12 1.4 12.3 2.8L14.6 14.8L20.2 0.6H25.7V1.5ZM48.2 14.6C48.2 9.1 40.2 8.8 40.2 6.3C40.2 5.4 41.1 4.5 42.8 4.3C43.7 4.2 46.1 4.1 48.3 5.1L49.3 0.9C47.9 0.4 46.1 0 43.8 0C38.5 0 34.7 2.8 34.7 6.8C34.7 12.7 42.9 13 42.9 15.6C42.9 16.6 41.8 17.5 39.8 17.5C37.8 17.5 35 16.5 33.5 15.8L32.4 20.2C34 20.9 36.8 21.6 39.7 21.6C45.3 21.6 48.2 18.8 48.2 14.6ZM62.3 21.2H67.2L63 1.5H58.4C57.3 1.5 56.4 2.1 56 3.1L47.8 21.2H53.4L54.5 18.2H61.4L62.3 21.2ZM56.1 13.9L58.9 6.2L60.5 13.9H56.1ZM33.8 1.5L29.4 21.2H24.1L28.5 1.5H33.8Z" fill="#3B82F6"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Visa</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-rose-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14" fill="#EB001B"></circle><circle cx="33" cy="15" r="14" fill="#F79E1B"></circle><path d="M24 4.5a13.9 13.9 0 0 1 5 10.5c0 4.1-1.8 7.8-4.7 10.3A13.9 13.9 0 0 1 19.3 15C19.3 10.9 21.1 7.2 24 4.5z" fill="#FF5F00"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Mastercard</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-sky-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="32" rx="4" fill="#006FCF"></rect><path d="M12.8 11.2h-3.4l-4.8 10h3.5l.9-2.1h4.2l.9 2.1h3.5l-4.8-10zm-2.8 5.7l1.1-2.6 1.1 2.6H10zm12.9-5.7h-3.4l-2.4 5.3-2.4-5.3h-3.4v10h3.2v-5.8l2.2 4.9h.8l2.2-4.9v5.8h3.2v-10zm9.4 0h-7.6v10h7.6v-2.3h-4.4v-1.6h4v-2.2h-4v-1.6h4.4v-2.3zm13.4 0h-3.8l-2.6 4-2.6-4h-3.8l4.4 6.1-4.6 6.1h3.8l2.8-4.3 2.8 4.3h3.8l-4.6-6.1 4.4-6.1z" fill="white"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">AMEX</span></div><div class="flex flex-col items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/90 py-2.5 px-2 transition-colors hover:border-pink-400 hover:bg-slate-800"><svg class="h-5 w-auto sm:h-6" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 0H0v24h6.3V0zM22.7 0h-6.2v24h6.2v-8.8l7.6 8.8h7.9l-9.6-11 9.1-9.8h-7.7l-7.3 8.3V0zM42.2 24h6.1V0h-6.1v24zm14.1-17.5c-3.6 0-6.1 2.6-6.1 6.3 0 3.7 2.5 6.3 6.1 6.3 2.6 0 4.6-1.3 5.4-3.4h-2.4c-.6 1-1.7 1.5-3 1.5-2.1 0-3.6-1.5-3.6-3.8h9.3c.1-.4.1-.7.1-1.1 0-3.3-2.3-5.8-5.8-5.8zm-3.5 5.1c.3-1.6 1.6-2.9 3.5-2.9 1.9 0 3.2 1.3 3.4 2.9h-6.9zM69.7 6.5h-5.9v17.5h5.9V14c0-2.3 1.5-3.5 3.5-3.5h.5V6.5h-4zm3.9 14.8c-1.4 0-2.4 1.1-2.4 2.4 0 1.4 1.1 2.4 2.4 2.4 1.4 0 2.4-1.1 2.4-2.4 0-1.4-1.1-2.4-2.4-2.4z" fill="#FFB3C7"></path></svg><span class="mt-1 text-[11px] font-semibold text-slate-300">Klarna</span></div></div><div class="mt-3.5 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-300"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.security[0])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-fill",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.security[1])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrows-clockwise-bold",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.security[2])}</span></div></div></div></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.featuresTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.featuresTitle)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.featuresDesc)}</p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.features, (f, idx) => {
        _push(`<div class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"><div><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: f.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><span class="mt-4 inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">${ssrInterpolate(f.tag)}</span><h3 class="mt-1 text-lg font-bold text-slate-900">${ssrInterpolate(f.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(f.desc)}</p></div><div class="mt-6 pt-4 border-t border-slate-100"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"><span>${ssrInterpolate(copy.value.cardCta)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-right-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</a></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white overflow-hidden"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="grid gap-12 lg:grid-cols-2 items-center"><div><span class="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">${ssrInterpolate(copy.value.payments.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.payments.title)}</h2><p class="mt-4 text-base leading-relaxed text-slate-600">${ssrInterpolate(copy.value.payments.desc)}</p><div class="mt-8 space-y-4"><div class="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:paypal-logo-duotone",
        class: "h-8 w-8 text-blue-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="font-bold text-slate-900 text-sm">${ssrInterpolate(copy.value.payments.highlights[0].title)}</h4><p class="text-xs text-slate-600 mt-1">${ssrInterpolate(copy.value.payments.highlights[0].desc)}</p></div></div><div class="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:credit-card-duotone",
        class: "h-8 w-8 text-indigo-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div><h4 class="font-bold text-slate-900 text-sm">${ssrInterpolate(copy.value.payments.highlights[1].title)}</h4><p class="text-xs text-slate-600 mt-1">${ssrInterpolate(copy.value.payments.highlights[1].desc)}</p></div></div></div></div><div class="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 sm:p-8 shadow-xl shadow-slate-200/50"><div class="border-b border-slate-200/80 pb-5"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-slate-500">${ssrInterpolate(copy.value.payments.currencyBoardTitle)}</span><span class="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.payments.currencyCountBadge)}</span></div><div class="mt-3 flex flex-wrap gap-2"><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-blue-600">USD</span> $ ${ssrInterpolate(copy.value.payments.currencyLabels[0])}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-indigo-600">EUR</span> \u20AC ${ssrInterpolate(copy.value.payments.currencyLabels[1])}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-purple-600">GBP</span> \xA3 ${ssrInterpolate(copy.value.payments.currencyLabels[2])}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-rose-600">JPY</span> \xA5 ${ssrInterpolate(copy.value.payments.currencyLabels[3])}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-emerald-600">CAD</span> $ ${ssrInterpolate(copy.value.payments.currencyLabels[4])}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-2xs"><span class="font-mono text-amber-600">AUD</span> $ ${ssrInterpolate(copy.value.payments.currencyLabels[5])}</span></div></div><div class="mt-6"><span class="text-xs font-bold uppercase tracking-wider text-slate-500">${ssrInterpolate(copy.value.payments.gatewaysTitle)}</span><div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3"><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"><svg class="h-6 w-auto" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 4H4.2C3.5 4 3 4.5 2.9 5.2L0 23.6C-0.1 24.1 0.3 24.6 0.9 24.6H5.2C5.9 24.6 6.4 24.1 6.5 23.4L7.5 17.1C7.6 16.4 8.1 15.9 8.8 15.9H11.5C16.8 15.9 20.3 13.3 21.1 8C21.5 5.5 20.1 4 12.5 4Z" fill="#003087"></path><path d="M13.8 9.5C13.2 13.4 10.6 15.4 6.8 15.4H4.8C4.3 15.4 3.9 15.8 3.8 16.3L2.3 26C2.2 26.4 2.5 26.8 2.9 26.8H6.5C7 26.8 7.4 26.4 7.5 26L8.3 21C8.4 20.5 8.8 20.1 9.3 20.1H11.2C15.4 20.1 18.2 18 18.8 13.7C19.1 11.7 18 10.5 13.8 9.5Z" fill="#0079C1"></path><path d="M6.8 15.4H4.8C4.3 15.4 3.9 15.8 3.8 16.3L2.9 22C3.5 21.5 4.3 21.2 5.2 21.2H7.5L8.3 16.3C8.4 15.8 8 15.4 7.5 15.4H6.8Z" fill="#00457C"></path><text x="25" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="800" font-style="italic" fill="#003087">Pay<tspan fill="#0079C1">Pal</tspan></text></svg><span class="mt-2 text-[11px] font-bold text-slate-700">PayPal Commerce</span></div><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"><svg class="h-6 w-auto" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.5 14.3c0-4.6-2.3-8.2-6.7-8.2-4.5 0-7.2 3.6-7.2 8.2 0 5.4 3.2 8.2 7.7 8.2 2.2 0 3.9-.5 5.2-1.3v-3.3c-1.3.8-2.7 1.2-4.4 1.2-1.7 0-3.3-.7-3.5-2.8h8.8c0-.4.1-1.4.1-2zm-8.8-1.5c.1-2 1.3-2.9 2.5-2.9 1.1 0 2.3.9 2.3 2.9h-4.8zM47.7 6.1c-1.8 0-3 .9-3.6 1.5v-1.3h-4.8v21.5l5-.1.1-5.2c.6.6 1.7 1.3 3.3 1.3 3.6 0 6.6-2.9 6.6-8.8 0-5.7-3.1-8.9-6.6-8.9zm-1.1 13.6c-1.2 0-2.3-.5-2.7-1v-6.7c.5-.6 1.5-1.1 2.7-1.1 2 0 3.3 1.7 3.3 4.4 0 2.8-1.2 4.4-3.3 4.4zM32.5 3.3L37.7 2.2v4.2l-5.2 1.1V3.3zm0 3.1h5.2v16.1h-5.2V6.4zM24.7 9c-1.1-.5-2.6-.9-4-.9-2.3 0-3.8 1.1-3.8 3 0 3.7 5.1 3.1 5.1 6.1 0 .9-.8 1.5-1.9 1.5-1.5 0-3.3-.6-4.6-1.5l-1.5 3.5c1.4.9 3.5 1.5 5.5 1.5 3.8 0 6.3-1.8 6.3-4.7 0-4.1-5.2-3.4-5.2-6.2 0-.8.7-1.3 1.7-1.3 1.3 0 2.8.5 3.8 1.1L24.7 9zM5.5 10.3c0-.8.7-1.1 1.8-1.1 1.6 0 3.6.5 5 1.4l1.8-3.7C12.4 5.8 10 5.2 7.3 5.2 2.7 5.2 0 7.8 0 11.9c0 6.3 8.7 5.3 8.7 8 0 1-.9 1.3-2.1 1.3-1.8 0-4.1-.7-5.9-1.9L-1.2 23c2 1.1 4.7 1.8 7.4 1.8 4.9 0 7.8-2.4 7.8-6.7 0-6.8-8.5-5.6-8.5-7.8z" fill="#635BFF"></path></svg><span class="mt-2 text-[11px] font-bold text-slate-700">Stripe Payments</span></div><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-800 hover:shadow-md"><svg class="h-6 w-auto text-slate-900" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6 8.3C10.9 9.1 9.9 9.7 8.9 9.6c-.1-1 .3-2 1-2.8.7-.8 1.8-1.4 2.8-1.4.1 1-.4 2-1.1 2.9zm1.1 1.4c-1.6-.1-2.9.9-3.7.9-.7 0-1.9-.9-3.2-.8-1.6.1-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.3 1-1.4 1.3-2.7 1.4-2.8-.1-.1-2.6-1-2.6-4 0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.4-1.9z" fill="currentColor"></path><path d="M27.2 6.6h4.5c3.2 0 5.4 2.1 5.4 5.2s-2.2 5.3-5.4 5.3h-2.1v6.1h-2.4V6.6zm4.3 8.3c1.9 0 3.1-1.2 3.1-3.1 0-1.9-1.2-3.1-3.1-3.1h-1.9v6.2h1.9zm14.7 8.3c-.3-.7-.5-1.5-.5-2.2-1 1.4-2.5 2.5-4.4 2.5-2.5 0-4.3-1.6-4.3-4 0-2.7 2.1-3.9 5.8-4.1l2.8-.2v-.8c0-1.3-.9-2.2-2.5-2.2-1.4 0-2.5.6-2.8 1.5h-2.2c.4-2 2.4-3.4 5-3.4 2.9 0 4.8 1.5 4.8 4.1v6.7c0 .8.1 1.5.4 2.1h-2.1zm-3.8-1.8c1.9 0 3.3-1.3 3.8-2.6v-1.7l-2.4.2c-2.4.2-3.8.9-3.8 2.3 0 1.1.9 1.8 2.4 1.8zm11.7 6.4c-1.3 0-2.1-.3-2.8-.9l-.3 1.9c.7.4 1.6.7 2.7.7 2.5 0 3.8-1.4 4.5-3.8l5.1-14.8h-2.5l-3.6 11.4-3.6-11.4h-2.6l4.6 13.2c-.4 1.7-1 2.7-2.5 2.7z" fill="currentColor"></path></svg><span class="mt-2 text-[11px] font-bold text-slate-700">Apple Pay</span></div><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"><div class="flex items-center gap-1.5"><svg class="h-5 w-auto" viewBox="0 0 64 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7 1.5L16.8 21.2H11.2L6.8 5.7C6.5 4.6 6.3 4.2 5.4 3.7C3.9 2.9 1.8 2.2 0 1.8L0.3 0.6H9.7C10.9 0.6 12 1.4 12.3 2.8L14.6 14.8L20.2 0.6H25.7V1.5ZM48.2 14.6C48.2 9.1 40.2 8.8 40.2 6.3C40.2 5.4 41.1 4.5 42.8 4.3C43.7 4.2 46.1 4.1 48.3 5.1L49.3 0.9C47.9 0.4 46.1 0 43.8 0C38.5 0 34.7 2.8 34.7 6.8C34.7 12.7 42.9 13 42.9 15.6C42.9 16.6 41.8 17.5 39.8 17.5C37.8 17.5 35 16.5 33.5 15.8L32.4 20.2C34 20.9 36.8 21.6 39.7 21.6C45.3 21.6 48.2 18.8 48.2 14.6ZM62.3 21.2H67.2L63 1.5H58.4C57.3 1.5 56.4 2.1 56 3.1L47.8 21.2H53.4L54.5 18.2H61.4L62.3 21.2ZM56.1 13.9L58.9 6.2L60.5 13.9H56.1ZM33.8 1.5L29.4 21.2H24.1L28.5 1.5H33.8Z" fill="#1434CB"></path></svg><svg class="h-5 w-auto" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="14" fill="#EB001B"></circle><circle cx="33" cy="15" r="14" fill="#F79E1B"></circle><path d="M24 4.5a13.9 13.9 0 0 1 5 10.5c0 4.1-1.8 7.8-4.7 10.3A13.9 13.9 0 0 1 19.3 15C19.3 10.9 21.1 7.2 24 4.5z" fill="#FF5F00"></path></svg></div><span class="mt-2 text-[11px] font-bold text-slate-700">Visa / Mastercard</span></div><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-pink-400 hover:shadow-md"><svg class="h-6 w-auto" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 0H0v24h6.3V0zM22.7 0h-6.2v24h6.2v-8.8l7.6 8.8h7.9l-9.6-11 9.1-9.8h-7.7l-7.3 8.3V0zM42.2 24h6.1V0h-6.1v24zm14.1-17.5c-3.6 0-6.1 2.6-6.1 6.3 0 3.7 2.5 6.3 6.1 6.3 2.6 0 4.6-1.3 5.4-3.4h-2.4c-.6 1-1.7 1.5-3 1.5-2.1 0-3.6-1.5-3.6-3.8h9.3c.1-.4.1-.7.1-1.1 0-3.3-2.3-5.8-5.8-5.8zm-3.5 5.1c.3-1.6 1.6-2.9 3.5-2.9 1.9 0 3.2 1.3 3.4 2.9h-6.9zM69.7 6.5h-5.9v17.5h5.9V14c0-2.3 1.5-3.5 3.5-3.5h.5V6.5h-4zm3.9 14.8c-1.4 0-2.4 1.1-2.4 2.4 0 1.4 1.1 2.4 2.4 2.4 1.4 0 2.4-1.1 2.4-2.4 0-1.4-1.1-2.4-2.4-2.4z" fill="#FFB3C7"></path><path d="M6.3 0H0v24h6.3V0zM22.7 0h-6.2v24h6.2v-8.8l7.6 8.8h7.9l-9.6-11 9.1-9.8h-7.7l-7.3 8.3V0zM42.2 24h6.1V0h-6.1v24zm14.1-17.5c-3.6 0-6.1 2.6-6.1 6.3 0 3.7 2.5 6.3 6.1 6.3 2.6 0 4.6-1.3 5.4-3.4h-2.4c-.6 1-1.7 1.5-3 1.5-2.1 0-3.6-1.5-3.6-3.8h9.3c.1-.4.1-.7.1-1.1 0-3.3-2.3-5.8-5.8-5.8zm-3.5 5.1c.3-1.6 1.6-2.9 3.5-2.9 1.9 0 3.2 1.3 3.4 2.9h-6.9zM69.7 6.5h-5.9v17.5h5.9V14c0-2.3 1.5-3.5 3.5-3.5h.5V6.5h-4zm3.9 14.8c-1.4 0-2.4 1.1-2.4 2.4 0 1.4 1.1 2.4 2.4 2.4 1.4 0 2.4-1.1 2.4-2.4 0-1.4-1.1-2.4-2.4-2.4z" fill="#0A0A0A"></path></svg><span class="mt-2 text-[11px] font-bold text-slate-700">${ssrInterpolate(copy.value.demo.klarnaLabel)}</span></div><div class="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"><div class="flex items-center gap-1 text-emerald-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:money-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`<span class="font-black text-sm">COD</span></div><span class="mt-2 text-[11px] font-bold text-slate-700">${ssrInterpolate(copy.value.demo.codLabel)}</span></div></div></div><div class="mt-6 rounded-2xl bg-blue-50/70 p-4 border border-blue-100/80"><div class="flex items-center justify-between text-xs text-blue-900 font-bold"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-4 w-4 text-blue-600"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.payments.riskTitle)}</span><span class="text-blue-700 font-mono">0% Commission</span></div><p class="mt-1.5 text-[11px] leading-relaxed text-blue-800/80">${ssrInterpolate(copy.value.payments.riskDesc)}</p></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="grid gap-12 lg:grid-cols-2 items-center"><div class="order-2 lg:order-1 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"><img${ssrRenderAttr("src", unref(logisticsImg))} alt="Global Logistics" class="w-full rounded-2xl object-contain"></div><div class="order-1 lg:order-2"><span class="rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">${ssrInterpolate(copy.value.logistics.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.logistics.title)}</h2><p class="mt-4 text-base leading-relaxed text-slate-600">${ssrInterpolate(copy.value.logistics.desc)}</p><div class="mt-8 space-y-4"><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">1</div><div><h4 class="font-bold text-slate-900 text-sm">${ssrInterpolate(copy.value.logistics.steps[0].title)}</h4><p class="text-xs text-slate-600 mt-1">${ssrInterpolate(copy.value.logistics.steps[0].desc)}</p></div></div><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">2</div><div><h4 class="font-bold text-slate-900 text-sm">${ssrInterpolate(copy.value.logistics.steps[1].title)}</h4><p class="text-xs text-slate-600 mt-1">${ssrInterpolate(copy.value.logistics.steps[1].desc)}</p></div></div><div class="flex items-start gap-4"><div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">3</div><div><h4 class="font-bold text-slate-900 text-sm">${ssrInterpolate(copy.value.logistics.steps[2].title)}</h4><p class="text-xs text-slate-600 mt-1">${ssrInterpolate(copy.value.logistics.steps[2].desc)}</p></div></div></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
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
//# sourceMappingURL=b2c-store-DINTdTyh.mjs.map
