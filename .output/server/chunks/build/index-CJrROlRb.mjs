import { u as useI18n, B as useLocaleRouter, r as useSettings, bD as useLocalizedSettings, F as useHead, bc as useSeoMeta, _ as _sfc_main$Q, J as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_1 from './SectionHeading-D_ZqEZzo.mjs';
import __nuxt_component_2 from './ShoplyConsultDialog-NIL3JoHK.mjs';
import { defineComponent, computed, unref, withCtx, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyConsult } from './useShoplyConsult-Bc6OO7cj.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { e as en, z as zh, a as zhHK, r as ru } from './zh-HK-cZUqGdgf.mjs';
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
import './ShoplyLeadForm-C05FT5nr.mjs';
import './CaptchaSlider-BJqv3jPw.mjs';

const aiMarkUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='43'%20height='40'%20viewBox='0%200%2043%2040'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20stop-color='%23E02044'/%3e%3cstop%20offset='.49'%20stop-color='%233F32FF'/%3e%3cstop%20offset='1'%20stop-color='%2300F7DF'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20y='10'%20width='29'%20height='29'%20rx='7'%20fill='url(%23a)'/%3e%3cpath%20fill='%23fff'%20d='m7.5%2018-5%2013h3l1.2-3h5.6l.5%203h2.8l-2-12.2c-.1-.5-.5-.8-1.1-.8h-5Zm.2%207.5%202.1-5.6.8%205.6H7.7ZM18%2018h2.8L19%2031h-2.7L18%2018Z'/%3e%3cpath%20fill='%23FFA410'%20d='M37%201c0%202%201.2%203.4%203.8%204-2.6.6-3.8%202-3.8%204-.6-2.6-2-3.8-4-4%202-.6%203.4-2%204-4Zm-1%2012c0%201.6%201%202.7%203%203.2-2%20.5-3%201.6-3%203.2-.5-2.1-1.6-3.2-3.2-3.2%201.6-.5%202.7-1.6%203.2-3.2ZM26%203c0%201.1.7%201.9%202%202.2-1.3.3-2%201.1-2%202.2-.3-1.4-1.1-2.2-2.2-2.2%201.1-.3%201.9-1.1%202.2-2.2Z'/%3e%3c/svg%3e";
const ribbonsUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='179'%20height='28'%20viewBox='0%200%20179%2028'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20y1='49%25'%20x2='0%25'%20y2='51%25'%3e%3cstop%20stop-color='%2332C5FF'%20stop-opacity='0'/%3e%3cstop%20offset='.14'%20stop-color='%2335C1FE'/%3e%3cstop%20offset='.51'%20stop-color='%23B620E0'/%3e%3cstop%20offset='.93'%20stop-color='%23F5B107'/%3e%3cstop%20offset='1'%20stop-color='%23F7B500'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M1%2024c34-13%2058-19%2072-17%2021%204-3%2025%2048%2013%2034-9%2053-14%2058-16'%20stroke='url(%23a)'%20stroke-width='8'%20fill='none'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, mergeLocaleMessage } = useI18n();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    mergeLocaleMessage("en", { shoply: en });
    mergeLocaleMessage("zh", { shoply: zh });
    mergeLocaleMessage("zh-HK", { shoply: zhHK });
    mergeLocaleMessage("ru", { shoply: ru });
    const localeMessages = { zh, "zh-HK": zhHK, en, ru };
    const messages = computed(() => localeMessages[locale.value] || zh);
    const valueItems = computed(() => messages.value.values.items);
    const dealModeItems = computed(() => messages.value.dealModes.items);
    const audienceItems = computed(() => messages.value.audiences.items);
    const aiItems = computed(() => messages.value.ai.items);
    const platformItems = computed(() => messages.value.platform.items);
    const deploymentItems = computed(() => messages.value.deployment.items);
    const ecosystemItems = computed(() => messages.value.ecosystem.items);
    const ecosystemColors = ["bg-blue-600", "bg-indigo-600", "bg-emerald-600", "bg-orange-500", "bg-rose-500", "bg-blue-500", "bg-green-600", "bg-slate-800"];
    const { signUpUrl } = useShoplyAuthLinks();
    const { consultUrl, isOpen: isConsultOpen } = useShoplyConsult();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const seoTitle = computed(() => {
      return getLocalizedSetting("site_title") || getLocalizedSetting("seo_title") || getSetting("site_name") || t("shoply.seo.title");
    });
    const seoDescription = computed(() => {
      return getLocalizedSetting("site_description") || getLocalizedSetting("seo_description") || t("shoply.seo.description");
    });
    const seoKeywords = computed(() => {
      return getLocalizedSetting("site_keywords") || getLocalizedSetting("keywords") || getSetting("site_keywords") || getSetting("keywords") || t("shoply.seo.keywords") || "";
    });
    useHead({
      titleTemplate: null
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value || void 0,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Q;
      const _component_SectionHeading = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_ShoplyConsultDialog = __nuxt_component_2;
      _push(`<!--[--><div id="top" class="bg-white"><section class="relative isolate overflow-hidden bg-[#2678ff] text-white"><div class="absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-28 top-18 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-800/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-12 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-28"><div class="relative z-10 min-w-0 max-w-2xl"><div class="animate-shoply-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-blue-50 uppercase backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(253,224,71,0.9)] animate-pulse"></span> ${ssrInterpolate(_ctx.$t("shoply.hero.eyebrow"))}</div><h1 class="animate-shoply-fade-in-up mt-7 text-4xl font-black leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl">${ssrInterpolate(_ctx.$t("shoply.hero.titleBefore"))} <span class="mt-2 block text-amber-300">${ssrInterpolate(_ctx.$t("shoply.hero.titleAccent"))}</span></h1><p class="animate-shoply-fade-in-up animate-delay-100 mt-7 max-w-xl text-base leading-8 text-blue-50/85 sm:text-lg">${ssrInterpolate(_ctx.$t("shoply.hero.description"))}</p><div class="animate-shoply-fade-in-up animate-delay-180 mt-9 flex flex-col gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(_ctx.$t("shoply.hero.primary"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a href="#solutions" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.hero.secondary"))}</a></div><div class="animate-shoply-fade-in-up animate-delay-240 mt-8 flex flex-wrap items-center gap-2.5 text-xs font-bold text-blue-100 sm:text-sm"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-fill",
        class: "h-4 w-4 text-emerald-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("shoply.hero.badgeZeroFee"))}</span></span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-fill",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("shoply.hero.badgeEngine"))}</span></span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:database-fill",
        class: "h-4 w-4 text-cyan-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("shoply.hero.badgeData"))}</span></span></div></div><div class="animate-shoply-slide-in-right animate-delay-150 relative mx-auto min-w-0 w-full max-w-[640px] lg:mx-0 lg:justify-self-end"><div class="animate-shoply-glow absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"></div><div class="animate-shoply-float absolute -top-4 -right-2 z-20 hidden sm:inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-xl shadow-blue-950/15 backdrop-blur-md transition-transform hover:scale-105"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</span><span class="text-xs font-black tracking-tight text-slate-800">${ssrInterpolate(_ctx.$t("shoply.hero.floatingFeePill"))}</span></div><div class="relative overflow-hidden rounded-[1.75rem] border border-white/30 bg-white p-2.5 sm:p-3.5 shadow-[0_35px_90px_rgba(13,45,120,0.35)] transition-shadow duration-500 hover:shadow-[0_45px_100px_rgba(13,45,120,0.45)]"><div class="flex items-center justify-between rounded-t-[1.1rem] bg-slate-100/90 px-3.5 py-2.5 backdrop-blur"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-400"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span></div><div class="flex max-w-[240px] flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-simple-fill",
        class: "h-3 w-3 text-emerald-500"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(_ctx.$t("shoply.hero.visualUrl"))}</span></div><span class="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>${ssrInterpolate(_ctx.$t("shoply.hero.visualBadge"))}</span></span></div><div class="relative min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-b-[1.1rem] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 p-5 sm:p-8 text-slate-900"><div class="flex items-center justify-between border-b border-slate-100 pb-3.5"><span class="text-xs font-black tracking-widest text-slate-900 uppercase">${ssrInterpolate(brandName.value)} STUDIO</span><span class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-bag-bold",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</span></div><div class="mt-6 grid items-center gap-6 sm:grid-cols-12"><div class="relative z-10 sm:col-span-5"><h3 class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-snug">${ssrInterpolate(_ctx.$t("shoply.hero.visualTitle"))}</h3><div class="mt-3.5 flex items-baseline gap-2"><span class="text-2xl font-black tracking-tight text-slate-900">$189.00</span><span class="text-xs font-semibold text-slate-400 line-through">$249.00</span></div><div class="mt-4 flex items-center gap-1.5"><span class="h-3.5 w-3.5 rounded-full bg-slate-900 ring-2 ring-blue-600 ring-offset-1"></span><span class="h-3.5 w-3.5 rounded-full bg-amber-200 ring-1 ring-slate-200"></span><span class="h-3.5 w-3.5 rounded-full bg-slate-400 ring-1 ring-slate-200"></span></div><div class="mt-6"><span class="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.hero.visualButton"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`</span></div></div><div class="relative flex items-center justify-center sm:col-span-7"><div class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100/60 via-indigo-50/50 to-amber-100/40 blur-xl"></div><div class="relative w-full max-w-[210px] py-2 transition-transform duration-500 hover:scale-105"><svg viewBox="0 0 200 200" class="w-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="headbandGrad" x1="20" y1="30" x2="180" y2="30" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1e293b"></stop><stop offset="50%" stop-color="#475569"></stop><stop offset="100%" stop-color="#0f172a"></stop></linearGradient><linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8fafc"></stop><stop offset="50%" stop-color="#94a3b8"></stop><stop offset="100%" stop-color="#334155"></stop></linearGradient><linearGradient id="cupGradLeft" x1="20" y1="80" x2="60" y2="150" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#334155"></stop><stop offset="50%" stop-color="#1e293b"></stop><stop offset="100%" stop-color="#0f172a"></stop></linearGradient><linearGradient id="cupGradRight" x1="140" y1="80" x2="180" y2="150" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#334155"></stop><stop offset="50%" stop-color="#1e293b"></stop><stop offset="100%" stop-color="#0f172a"></stop></linearGradient><radialGradient id="cupInner" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2678ff" stop-opacity="0.4"></stop><stop offset="100%" stop-color="#0f172a"></stop></radialGradient></defs><path d="M 42 110 C 42 45, 158 45, 158 110" stroke="url(#headbandGrad)" stroke-width="14" stroke-linecap="round"></path><path d="M 52 100 C 52 56, 148 56, 148 100" stroke="#0f172a" stroke-width="4" stroke-linecap="round" opacity="0.6"></path><rect x="36" y="98" width="12" height="26" rx="4" fill="url(#metalGrad)"></rect><rect x="152" y="98" width="12" height="26" rx="4" fill="url(#metalGrad)"></rect><g transform="translate(18, 95) rotate(-6)"><rect x="0" y="0" width="38" height="66" rx="19" fill="url(#cupGradLeft)"></rect><rect x="3" y="3" width="32" height="60" rx="16" fill="none" stroke="url(#metalGrad)" stroke-width="1.5"></rect><circle cx="19" cy="33" r="11" fill="url(#cupInner)"></circle><circle cx="19" cy="33" r="7" fill="#0f172a" stroke="#3b82f6" stroke-width="1"></circle></g><g transform="translate(144, 95) rotate(6)"><rect x="0" y="0" width="38" height="66" rx="19" fill="url(#cupGradRight)"></rect><rect x="3" y="3" width="32" height="60" rx="16" fill="none" stroke="url(#metalGrad)" stroke-width="1.5"></rect><circle cx="19" cy="33" r="11" fill="url(#cupInner)"></circle><circle cx="19" cy="33" r="7" fill="#0f172a" stroke="#3b82f6" stroke-width="1"></circle></g></svg></div></div></div></div></div><div class="animate-shoply-float-delayed absolute -bottom-4 -left-2 z-20 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-xl shadow-blue-950/15 backdrop-blur-md transition-transform hover:scale-105 sm:-left-6"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-sm shadow-amber-400/30">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-fill",
        class: "h-3 w-3"
      }, null, _parent));
      _push(`</span><span class="text-xs font-black tracking-tight text-slate-800">${ssrInterpolate(_ctx.$t("shoply.hero.floatingSpeedPill"))}</span></div></div></div></section><section id="solutions" class="scroll-mt-20 bg-slate-50/70 py-20 sm:py-28 relative"><div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3rem_3rem]"></div><div class="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.values.label"),
        title: _ctx.$t("shoply.values.title"),
        description: _ctx.$t("shoply.values.description")
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(valueItems.value, (item, index) => {
        _push(`<article class="${ssrRenderClass([index === 1 ? "border-emerald-300 ring-4 ring-emerald-500/10 shadow-emerald-500/5" : "border-slate-200/90 hover:border-blue-300 shadow-slate-900/5", "group relative flex flex-col justify-between rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"])}">`);
        if (index === 1) {
          _push(`<div class="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md shadow-emerald-600/30">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:seal-percent-fill",
            class: "h-3 w-3"
          }, null, _parent));
          _push(`<span>Zero Fee</span></div>`);
        } else if (index === 2) {
          _push(`<div class="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:terminal-window-fill",
            class: "h-3 w-3 text-cyan-300"
          }, null, _parent));
          _push(`<span>Docker &amp; Podman</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><span class="${ssrRenderClass([index === 1 ? "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white", "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7 transition-transform duration-300 group-hover:rotate-6"
        }, null, _parent));
        _push(`</span><h3 class="mt-6 text-xl font-extrabold tracking-tight text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.description)}</p></div><div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">`);
        if (index === 0) {
          _push(`<span class="text-sky-600 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:sparkle-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(` AI SEO \u52A0\u6301</span>`);
        } else if (index === 1) {
          _push(`<span class="text-emerald-700 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(` \u8D44\u91D1 100% \u76F4\u8FBE\u81EA\u6709\u8D26\u6237</span>`);
        } else if (index === 2) {
          _push(`<span class="text-slate-700 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:database-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(` 100% \u6570\u636E\u8D44\u4EA7\u79C1\u6709</span>`);
        } else if (index === 3) {
          _push(`<span class="text-indigo-600 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:credit-card-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(` Stripe / PayPal / \u672C\u5730</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-up-right-bold",
          class: "h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        }, null, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></div></section><section id="deal-modes" class="scroll-mt-20 py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.dealModes.label"),
        title: _ctx.$t("shoply.dealModes.title"),
        description: _ctx.$t("shoply.dealModes.description")
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-8 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(dealModeItems.value, (mode, index) => {
        _push(`<article class="${ssrRenderClass([index === 0 ? "border-sky-200 bg-gradient-to-b from-sky-50/40 via-white to-white hover:border-sky-300 hover:shadow-sky-500/10" : index === 1 ? "border-amber-200 bg-gradient-to-b from-amber-50/40 via-white to-white hover:border-amber-300 hover:shadow-amber-500/10" : "border-teal-200 bg-gradient-to-b from-teal-50/40 via-white to-white hover:border-teal-300 hover:shadow-teal-500/10", "group relative flex min-w-0 flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"])}"><div><div class="flex items-center justify-between gap-4"><span class="${ssrRenderClass([index === 0 ? "bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white" : index === 1 ? "bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white" : "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white", "flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: mode.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><span class="${ssrRenderClass([index === 0 ? "bg-sky-100/80 text-sky-700" : index === 1 ? "bg-amber-100/80 text-amber-800" : "bg-teal-100/80 text-teal-800", "rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider"])}">${ssrInterpolate(index === 0 ? "DTC \u96F6\u552E" : index === 1 ? "\u5927\u5B97\u6279\u53D1" : "B2B \u8BE2\u76D8")}</span></div><h3 class="mt-7 text-2xl font-black tracking-tight text-slate-900">${ssrInterpolate(mode.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(mode.description)}</p><ul class="mt-7 space-y-3.5 border-t border-slate-100 pt-6"><!--[-->`);
        ssrRenderList(mode.points, (point) => {
          _push(`<li class="flex gap-2.5 text-sm leading-6 text-slate-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(mode.to),
          class: ["mt-8 inline-flex items-center justify-between rounded-2xl p-4 text-sm font-black transition-all", index === 0 ? "bg-sky-50 text-sky-700 hover:bg-sky-100" : index === 1 ? "bg-amber-50 text-amber-800 hover:bg-amber-100" : "bg-teal-50 text-teal-800 hover:bg-teal-100"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(mode.action)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-4 w-4 transition-transform group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(mode.action), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.audiences.label"),
        title: _ctx.$t("shoply.audiences.title"),
        description: _ctx.$t("shoply.audiences.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(audienceItems.value, (item, index) => {
        _push(`<article class="${ssrRenderClass([index === 0 ? "bg-blue-600 text-white" : "bg-white text-slate-900", "group relative overflow-hidden rounded-[2rem] border border-slate-200 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"])}"><div class="relative z-10 flex items-start gap-5"><span class="${ssrRenderClass([index === 0 ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600", "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><div><h3 class="text-2xl font-black tracking-tight">${ssrInterpolate(item.title)}</h3><p class="${ssrRenderClass([index === 0 ? "text-blue-100" : "text-slate-600", "mt-3 max-w-xl text-sm leading-7"])}">${ssrInterpolate(item.description)}</p><div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(item.tags, (tag) => {
          _push(`<span class="${ssrRenderClass([index === 0 ? "bg-white/12 text-white" : "bg-slate-100 text-slate-600", "rounded-full px-3 py-1.5 text-xs font-bold transition-transform hover:scale-105"])}">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "absolute -bottom-12 -right-8 h-44 w-44 opacity-[0.04] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.08]"
        }, null, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section id="ai" class="scroll-mt-20 overflow-hidden bg-[#07152f] py-20 text-white sm:py-28"><div class="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12"><div><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(aiMarkUrl))} alt="" class="h-10 w-11 animate-pulse"><p class="text-sm font-black tracking-[0.18em] text-cyan-300 uppercase">${ssrInterpolate(_ctx.$t("shoply.ai.label"))}</p></div><h2 class="mt-6 max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">${ssrInterpolate(_ctx.$t("shoply.ai.title"))}</h2><p class="mt-6 max-w-xl text-base leading-8 text-blue-100/70">${ssrInterpolate(_ctx.$t("shoply.ai.description"))}</p><a${ssrRenderAttr("href", unref(consultUrl))} class="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-blue-700 shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.ai.action"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-right-bold",
        class: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      }, null, _parent));
      _push(`</a></div><div class="relative"><img${ssrRenderAttr("src", unref(ribbonsUrl))} alt="" class="animate-shoply-float absolute -top-8 right-4 h-7 w-44"><div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur sm:p-6"><div class="rounded-2xl bg-white p-5 text-slate-900 sm:p-7"><div class="flex items-center justify-between gap-4 border-b border-slate-100 pb-5"><div><p class="text-base font-black sm:text-lg">${ssrInterpolate(_ctx.$t("shoply.ai.panelTitle"))}</p><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(_ctx.$t("shoply.ai.panelHint"))}</p></div><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-fill",
        class: "h-5 w-5 animate-pulse"
      }, null, _parent));
      _push(`</span></div><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(aiItems.value, (item, index) => {
        _push(`<div class="group/ai flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:scale-[1.01] hover:border-blue-200 hover:bg-blue-50/80 hover:shadow-md"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-blue-600 shadow-sm transition-colors group-hover/ai:bg-blue-600 group-hover/ai:text-white">${ssrInterpolate(index + 1)}</span><div class="min-w-0 flex-1"><p class="text-sm font-extrabold text-slate-900 group-hover/ai:text-blue-700 transition-colors">${ssrInterpolate(item.title)}</p><p class="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">${ssrInterpolate(item.description)}</p></div>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-5 w-5 shrink-0 text-blue-500 transition-transform group-hover/ai:translate-x-1"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section id="platform" class="scroll-mt-20 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.platform.label"),
        title: _ctx.$t("shoply.platform.title"),
        description: _ctx.$t("shoply.platform.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(platformItems.value, (item, index) => {
        _push(`<article class="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-200 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><div><h3 class="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.description)}</p></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div class="grid items-end gap-8 lg:grid-cols-2">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.ecosystem.label"),
        title: _ctx.$t("shoply.ecosystem.title"),
        description: _ctx.$t("shoply.ecosystem.description"),
        align: "left"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(ecosystemItems.value, (item, index) => {
        _push(`<div class="flex min-h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 text-center text-sm font-black text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md active:scale-95"><span class="${ssrRenderClass([ecosystemColors[index], "mr-2 flex h-7 w-7 items-center justify-center rounded-lg text-xs text-white shadow-sm"])}">${ssrInterpolate(item.slice(0, 1))}</span> ${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div></div></section><section id="deployment" class="scroll-mt-20 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.deployment.label"),
        title: _ctx.$t("shoply.deployment.title"),
        description: _ctx.$t("shoply.deployment.description")
      }, null, _parent));
      _push(`<div class="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(deploymentItems.value, (item, index) => {
        _push(`<article class="${ssrRenderClass([index === 0 ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-950 text-white", "group relative overflow-hidden rounded-[2rem] border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"])}"><div class="flex items-start justify-between gap-4"><span class="${ssrRenderClass([index === 0 ? "bg-white text-blue-600 shadow-sm" : "bg-white/10 text-cyan-300", "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><span class="${ssrRenderClass([index === 0 ? "bg-blue-600 text-white" : "bg-cyan-300/15 text-cyan-300", "rounded-full px-3 py-1.5 text-xs font-extrabold shadow-sm"])}">${ssrInterpolate(item.badge)}</span></div><h3 class="mt-8 text-3xl font-black tracking-tight">${ssrInterpolate(item.title)}</h3><p class="${ssrRenderClass([index === 0 ? "text-slate-600" : "text-slate-300", "mt-4 min-h-[84px] text-sm leading-7"])}">${ssrInterpolate(item.description)}</p><div class="mt-7 flex flex-wrap items-center gap-4">`);
        if (index === 0) {
          _push(`<a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 text-sm font-extrabold text-blue-600 transition-transform group-hover:translate-x-1">${ssrInterpolate(item.action)} `);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-right-bold",
            class: "h-4 w-4 transition-transform group-hover:translate-x-1"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/page/install"),
            class: "inline-flex items-center gap-2 text-sm font-extrabold text-cyan-300 transition-transform hover:underline group-hover:translate-x-1"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.deployment.viewGuide") || "\u67E5\u770B\u90E8\u7F72\u6307\u5357")}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(_ctx.$t("shoply.deployment.viewGuide") || "\u67E5\u770B\u90E8\u7F72\u6307\u5357"), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button type="button" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:chats-teardrop-bold",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(item.action)}</span></button><!--]-->`);
        }
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"><div class="relative mx-auto max-w-[1344px] overflow-hidden rounded-[2rem] bg-[#2678ff] px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-12 sm:py-20"><div class="animate-shoply-glow absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-indigo-900/30 blur-3xl"></div><div class="relative"><p class="text-xs font-black tracking-[0.18em] text-amber-300 uppercase">${ssrInterpolate(_ctx.$t("shoply.cta.eyebrow"))}</p><h2 class="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">${ssrInterpolate(_ctx.$t("shoply.cta.title"))}</h2><p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">${ssrInterpolate(_ctx.$t("shoply.cta.description"))}</p><div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-blue-600 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(_ctx.$t("shoply.cta.primary"))}</a><a${ssrRenderAttr("href", unref(consultUrl))} class="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.cta.secondary"))}</a></div></div></div></section></div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "homepage"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
