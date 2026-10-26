import { u as useI18n, D as useLocaleRouter, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4 } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-D_0Jyd2M.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { e as customLocales } from './marketing-pages-BVSsx8tM.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'zod';
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
import '@iconify/utils';
import 'consola';
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
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const copy = computed(() => {
      const current = locale.value;
      return customLocales[current in customLocales ? current : "zh"];
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in customLocales) return customLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.custom.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in customLocales) return customLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.custom.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in customLocales) return customLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.custom.seoKeywords") || copy.value.seo.keywords;
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
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-20 pb-10 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto w-full max-w-[1380px]"><div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16"><div class="relative z-10 text-left"><div class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-1.5 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-7">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"><button type="button" class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto sm:text-base"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/cases"),
        class: "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-base"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-bold",
              class: "h-4 w-4 text-amber-300"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.hero.secondaryCta)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "h-4 w-4 text-amber-300"
              }),
              createVNode("span", null, toDisplayString(copy.value.hero.secondaryCta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-100"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:code-bold",
        class: "h-3.5 w-3.5 text-emerald-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroQuickPills[0])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-fill",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroQuickPills[1])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-cyan-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroQuickPills[2])}</span></div></div><div class="relative mx-auto w-full max-w-[580px] lg:max-w-none"><div class="absolute -top-3.5 -right-1.5 z-20 hidden items-center gap-1.5 rounded-full border border-white/90 bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:inline-flex"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(copy.value.demo.deliveryPill)}</span></div><div class="overflow-hidden rounded-2xl border border-white/30 bg-slate-900/85 p-2.5 shadow-[0_30px_80px_rgba(13,45,120,0.4)] backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs text-white/60"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="flex items-center gap-1 rounded-md bg-white/10 px-3 py-0.5 font-mono text-[11px] text-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:terminal-window-fill",
        class: "h-3 w-3 text-cyan-400"
      }, null, _parent));
      _push(`<span>qingpu-engine / core-architecture (Go 1.24)</span></div><div class="flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-[10px] font-bold text-emerald-300">Enterprise</span></div></div><div class="rounded-b-xl bg-slate-950/90 p-3.5 sm:p-4.5"><div class="grid grid-cols-4 gap-2 border-b border-white/10 pb-3 text-center"><div class="rounded-lg bg-white/5 p-2"><div class="text-base font-black text-amber-300 sm:text-lg">${ssrInterpolate(copy.value.demo.stats[0].value)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.stats[0].label)}</div></div><div class="rounded-lg bg-white/5 p-2"><div class="text-base font-black text-emerald-300 sm:text-lg">${ssrInterpolate(copy.value.demo.stats[1].value)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.stats[1].label)}</div></div><div class="rounded-lg bg-white/5 p-2"><div class="text-base font-black text-cyan-300 sm:text-lg">${ssrInterpolate(copy.value.demo.stats[2].value)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.stats[2].label)}</div></div><div class="rounded-lg bg-white/5 p-2"><div class="text-base font-black text-white sm:text-lg">${ssrInterpolate(copy.value.demo.stats[3].value)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.stats[3].label)}</div></div></div><div class="mt-3.5 grid grid-cols-2 gap-2.5"><div class="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5 transition-colors hover:border-blue-400"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:cpu-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.demo.modules[0].title)}</div><div class="truncate text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.modules[0].desc)}</div></div></div><div class="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5 transition-colors hover:border-emerald-400"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:database-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.demo.modules[1].title)}</div><div class="truncate text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.modules[1].desc)}</div></div></div><div class="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5 transition-colors hover:border-purple-400"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-commit-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.demo.modules[2].title)}</div><div class="truncate text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.modules[2].desc)}</div></div></div><div class="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5 transition-colors hover:border-amber-400"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:cloud-check-duotone",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.demo.modules[3].title)}</div><div class="truncate text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.modules[3].desc)}</div></div></div></div><div class="mt-3.5 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-300"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[0])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-fill",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[1])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[2])}</span></div></div></div></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-violet-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-700">${ssrInterpolate(copy.value.advantagesTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.advantagesTitle.replace("{brand}", brandName.value))}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.advantagesDesc)}</p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.advantages, (adv, idx) => {
        _push(`<div class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition-colors duration-300 group-hover:bg-violet-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: adv.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(adv.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(adv.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.industriesTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.industriesTitle)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.industriesDesc)}</p></div><div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"><!--[-->`);
      ssrRenderList(copy.value.industries, (ind) => {
        _push(`<div class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-white hover:border-blue-400 hover:shadow-md"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:tag-chevron-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</div><span class="text-sm font-bold text-slate-800">${ssrInterpolate(ind)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-slate-50 border-y border-slate-100 text-slate-900"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.conversion.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.conversion.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.conversion.desc)}</p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:crosshair-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.conversion.items[0].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.conversion.items[0].desc)}</p></div><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.conversion.items[1].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.conversion.items[1].desc)}</p></div><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:device-mobile-camera-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.conversion.items[2].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.conversion.items[2].desc)}</p></div></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">${ssrInterpolate(copy.value.process.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.process.title)}</h2></div><div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">01</span><h4 class="mt-2 font-bold text-slate-900">${ssrInterpolate(copy.value.process.steps[0].title)}</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">${ssrInterpolate(copy.value.process.steps[0].desc)}</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">02</span><h4 class="mt-2 font-bold text-slate-900">${ssrInterpolate(copy.value.process.steps[1].title)}</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">${ssrInterpolate(copy.value.process.steps[1].desc)}</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">03</span><h4 class="mt-2 font-bold text-slate-900">${ssrInterpolate(copy.value.process.steps[2].title)}</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">${ssrInterpolate(copy.value.process.steps[2].desc)}</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">04</span><h4 class="mt-2 font-bold text-slate-900">${ssrInterpolate(copy.value.process.steps[3].title)}</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">${ssrInterpolate(copy.value.process.steps[3].desc)}</p></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/about"),
        class: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:buildings-bold",
              class: "h-5 w-5 text-amber-300"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:buildings-bold",
                class: "h-5 w-5 text-amber-300"
              }),
              createVNode("span", null, toDisplayString(copy.value.bottomCta.secondaryText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:code-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "custom-development"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=custom-Br24opsc.mjs.map
