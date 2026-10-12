import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q, J as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { e as customLocales } from './marketing-pages-CBN_Ll80.mjs';
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
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
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
      const _component_UIcon = _sfc_main$Q;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_ShoplyLeadForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-28 sm:pt-24 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><button type="button" class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/case",
        class: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-bold",
              class: "h-5 w-5 text-amber-300"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.hero.secondaryCta)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "h-5 w-5 text-amber-300"
              }),
              createVNode("span", null, toDisplayString(copy.value.hero.secondaryCta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-100 sm:text-sm"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mt-14 mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4"><div class="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"><div class="text-2xl sm:text-3xl font-black text-white">14 \u5E74</div><div class="mt-1 text-xs text-blue-100/85">\u7535\u5546\u7814\u53D1\u6280\u672F\u79EF\u7D2F</div></div><div class="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"><div class="text-2xl sm:text-3xl font-black text-white">Go \u8BED\u8A00</div><div class="mt-1 text-xs text-blue-100/85">\u9AD8\u5E76\u53D1\u7A33\u5B9A\u5E95\u5C42\u5185\u6838</div></div><div class="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"><div class="text-2xl sm:text-3xl font-black text-white">100%</div><div class="mt-1 text-xs text-blue-100/85">\u6E90\u7801\u4EA4\u4ED8\u81EA\u4E3B\u53EF\u63A7</div></div><div class="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm"><div class="text-2xl sm:text-3xl font-black text-white">20\u4E07+</div><div class="mt-1 text-xs text-blue-100/85">\u5168\u7403\u5356\u5BB6\u5B9E\u6218\u5370\u8BC1</div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-violet-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-700"> \u6280\u672F\u5E95\u8574 </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u4E3A\u4EC0\u4E48\u9009\u62E9 ${ssrInterpolate(brandName.value)} \u5B9A\u5236\u5F00\u53D1\uFF1F </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u62D2\u7EDD\u81C3\u80BF\u5F00\u6E90\u9B54\u6539\u4E0E\u5916\u5305\u7C97\u5236\u6EE5\u9020\uFF0C\u4EE5\u771F\u6B63\u7684\u4F01\u4E1A\u7EA7\u67B6\u6784\u652F\u6491\u5343\u4E07\u7EA7\u4E1A\u52A1\u6269\u5C55\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.advantages, (adv, idx) => {
        _push(`<div class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition-colors duration-300 group-hover:bg-violet-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: adv.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(adv.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(adv.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> \u884C\u4E1A\u65B9\u6848\u8986\u76D6 </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u6DF1\u5165 10+ \u5782\u76F4\u51FA\u6D77\u884C\u4E1A\uFF0C\u6BD4\u60A8\u66F4\u61C2\u4E1A\u52A1\u903B\u8F91 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u79EF\u7D2F\u4E86\u5927\u91CF\u5782\u76F4\u884C\u4E1A\u5B9A\u5236\u6A21\u578B\u4E0E\u843D\u5730\u7ECF\u9A8C\uFF0C\u5FEB\u901F\u5339\u914D\u60A8\u7684\u5546\u4E1A\u843D\u5730\u8BC9\u6C42\u3002 </p></div><div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"><!--[-->`);
      ssrRenderList(copy.value.industries, (ind) => {
        _push(`<div class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all hover:bg-white hover:border-blue-400 hover:shadow-md"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:tag-chevron-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</div><span class="text-sm font-bold text-slate-800">${ssrInterpolate(ind)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-slate-50 border-y border-slate-100 text-slate-900"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> \u8F6C\u5316\u4E0E\u83B7\u5BA2 </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u4E0D\u4EC5\u4EC5\u662F\u5B9E\u73B0\u529F\u80FD\uFF0C\u66F4\u4E13\u6CE8\u63D0\u5347\u60A8\u7684\u5B9E\u9645\u5546\u4E1A\u8F6C\u5316\u7387 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u5728\u590D\u6742\u4E1A\u52A1\u903B\u8F91\u80CC\u540E\uFF0C\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u5B9A\u5236\u9879\u76EE\u690D\u5165\u4E09\u5927\u6838\u5FC3\u589E\u957F\u5F15\u64CE\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:crosshair-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">\u4E3B\u52A8\u83B7\u5BA2\u5F15\u64CE</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u53EA\u9700\u586B\u5165\u76EE\u6807\u4EBA\u7FA4\u4E0E\u54C1\u7C7B\u5173\u952E\u8BCD\uFF0C\u5373\u53EF\u667A\u80FD\u6293\u53D6\u6D77\u5916\u76EE\u6807\u5BA2\u6237\u6570\u636E\uFF0C\u5168\u81EA\u52A8\u89E6\u8FBE\u6F5C\u5728\u4E70\u5BB6\uFF0C\u6210\u500D\u653E\u5927\u5916\u8D38\u5546\u673A\u3002 </p></div><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">\u539F\u751F\u6DF1\u5EA6 SEO \u67B6\u6784</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u7CBE\u7B80 CSS/HTML \u4EE3\u7801\uFF0C\u4E09\u7EA7\u6241\u5E73 URL \u7ED3\u6784\u3001\u9759\u6001\u5316\u5730\u5740\u4E0E\u56FE\u7247 ALT \u81EA\u52A8\u8865\u5168\uFF0C\u4E3A Google \u6536\u5F55\u62A2\u5360\u9EC4\u91D1\u6392\u540D\u3002 </p></div><div class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:device-mobile-camera-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-5 text-lg font-bold text-slate-900">\u79FB\u52A8\u7AEF\u9AD8\u8F6C\u5316\u7ED3\u8D26</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u72EC\u7ACB\u54CD\u5E94\u5F0F\u79FB\u52A8\u4F53\u9A8C\uFF0C\u652F\u6301\u7011\u5E03\u6D41\u52A0\u8F7D\u3001PayPal \u5FEB\u6377\u7ED3\u8D26\u53CA\u672C\u5730\u652F\u4ED8\uFF0C\u6781\u5927\u7F29\u77ED\u652F\u4ED8\u8DEF\u5F84\uFF0C\u675C\u7EDD\u8DF3\u5931\u3002 </p></div></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700"> \u9879\u76EE\u4EA4\u4ED8\u6D41\u7A0B </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u4E25\u8C28\u9AD8\u6548\u7684 4 \u6B65\u6807\u51C6\u5316\u7814\u53D1\u4EA4\u4ED8\u95ED\u73AF </h2></div><div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">01</span><h4 class="mt-2 font-bold text-slate-900">\u9700\u6C42\u68B3\u7406\u4E0E\u539F\u578B\u8BC4\u4F30</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">\u7531\u8D44\u6DF1\u7535\u5546\u4EA7\u54C1\u4E13\u5BB6 1 \u5BF9 1 \u62C6\u89E3\u4E1A\u52A1\u903B\u8F91\uFF0C\u8F93\u51FA\u9AD8\u4FDD\u771F\u539F\u578B\u4E0E\u7CFB\u7EDF\u67B6\u6784\u65B9\u6848\u3002</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">02</span><h4 class="mt-2 font-bold text-slate-900">UI/UX \u5B9A\u5236\u8BBE\u8BA1</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">\u8D34\u5408\u6B27\u7F8E\u4E0E\u76EE\u6807\u6D77\u5916\u5E02\u573A\u7684\u4E3B\u6D41\u89C6\u89C9\u4E60\u60EF\uFF0C\u4EA4\u4ED8\u5168\u5957\u9AD8\u8F6C\u5316\u89C6\u89C9\u8BBE\u8BA1\u7A3F\u3002</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">03</span><h4 class="mt-2 font-bold text-slate-900">\u654F\u6377\u5F00\u53D1\u4E0E\u538B\u529B\u6D4B\u8BD5</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">\u57FA\u4E8E\u89C4\u8303\u5316\u5DE5\u7A0B\u4EE3\u7801\u6A21\u5757\u5F00\u53D1\uFF0C\u4E25\u683C\u8FDB\u884C\u529F\u80FD\u6D4B\u8BD5\u3001\u5B89\u5168\u5BA1\u8BA1\u4E0E\u9AD8\u5E76\u53D1\u538B\u6D4B\u3002</p></div><div class="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"><span class="text-4xl font-black text-slate-300">04</span><h4 class="mt-2 font-bold text-slate-900">\u79C1\u6709\u90E8\u7F72\u4E0E\u8FD0\u7EF4\u966A\u8DD1</h4><p class="mt-2 text-xs text-slate-600 leading-relaxed">\u534F\u52A9\u670D\u52A1\u5668\u90E8\u7F72\u3001\u57DF\u540D\u89E3\u6790\u4E0E\u652F\u4ED8\u8054\u8C03\uFF0C\u63D0\u4F9B\u4E13\u5C5E\u6280\u672F\u987E\u95EE\u957F\u6548\u8FD0\u7EF4\u4FDD\u969C\u3002</p></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/about",
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
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6\u72EC\u7ACB\u7AD9\u5B9A\u5236\u67B6\u6784\u5E08</h3><p class="mt-2 text-xs text-slate-500">\u8D44\u6DF1\u6280\u672F\u67B6\u6784\u5E08\u5C06\u5728 1 \u4E2A\u5DE5\u4F5C\u65E5\u5185\u8BC4\u4F30\u60A8\u7684\u9700\u6C42\u5E76\u63D0\u4F9B\u539F\u578B\u5EFA\u8BAE</p></div>`);
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
