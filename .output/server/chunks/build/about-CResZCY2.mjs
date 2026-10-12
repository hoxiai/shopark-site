import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { a as aboutLocales } from './marketing-pages-CBN_Ll80.mjs';
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

const companyImg = "" + buildAssetsURL("company.DbaBkzBQ.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      if (current in aboutLocales) {
        return aboutLocales[current];
      }
      return aboutLocales.zh;
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.about.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.about.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.about.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => companyImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => companyImg
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
        name: "ph:handshake-bold",
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
      _push(`<!--]--></div></div><div class="relative mx-auto mt-14 max-w-5xl"><div class="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/60 p-2 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-3"><img${ssrRenderAttr("src", unref(companyImg))} alt="Qingpu Technology Headquarter &amp; Team" class="w-full rounded-[1.5rem] object-cover" loading="eager"></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> \u6838\u5FC3\u4F7F\u547D\u4E0E\u57FA\u56E0 </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u4E13\u6CE8\u4E8E\u6280\u672F\u81EA\u7814\uFF0C\u8BA9\u8DE8\u5883\u4E1A\u52A1\u53D8\u5F97\u7B80\u5355\u9AD8\u6548 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u62D2\u7EDD\u6D6E\u8E81\u4E0E\u7C97\u653E\u5916\u5305\uFF0C\u4EE5\u624E\u5B9E\u7684\u5DE5\u7A0B\u7814\u53D1\u4E3A\u6570\u5341\u4E07\u51FA\u6D77\u5546\u6237\u63D0\u4F9B\u957F\u6548\u4EF7\u503C\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.pillars, (p, idx) => {
        _push(`<div class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: p.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(p.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(p.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700"> \u5168\u7403\u534F\u540C </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u7ACB\u8DB3\u7CA4\u6E2F\u6FB3\u5927\u6E7E\u533A\uFF0C\u670D\u52A1\u5168\u7403\u51FA\u6D77\u5546\u6237 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u8BBE\u7ACB\u9999\u6E2F\u56FD\u9645\u8FD0\u8425\u4E0E\u6DF1\u5733\u6838\u5FC3\u6280\u672F\u7814\u53D1\u53CC\u4E2D\u5FC3\uFF0C\u4FDD\u969C\u7CFB\u7EDF\u7684\u9AD8\u53EF\u7528\u4E0E\u672C\u5730\u5316\u5408\u89C4\u652F\u6301\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"><!--[-->`);
      ssrRenderList(copy.value.locations, (loc) => {
        _push(`<div class="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 transition-all hover:bg-white hover:border-blue-300 hover:shadow-lg"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: loc.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><span class="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-blue-600">${ssrInterpolate(loc.region)}</span><h3 class="mt-1 text-xl font-bold text-slate-900">${ssrInterpolate(loc.company)}</h3><p class="mt-4 text-sm text-slate-600 leading-relaxed"><span class="font-semibold text-slate-800">\u5730\u5740\uFF1A</span>${ssrInterpolate(loc.address)}</p>`);
        if (loc.phone) {
          _push(`<p class="mt-2 text-sm text-slate-600"><span class="font-semibold text-slate-800">\u7535\u8BDD\uFF1A</span>${ssrInterpolate(loc.phone)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (loc.email) {
          _push(`<p class="mt-2 text-sm text-slate-600"><span class="font-semibold text-slate-800">\u90AE\u7BB1\uFF1A</span>${ssrInterpolate(loc.email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
          name: "ph:handshake-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u5546\u52A1\u5408\u4F5C\u4E0E\u4EA4\u6D41</h3><p class="mt-2 text-xs text-slate-500">\u6B22\u8FCE\u751F\u6001\u5408\u4F5C\u4F19\u4F34\u3001\u670D\u52A1\u5546\u4E0E\u54C1\u724C\u51FA\u6D77\u56E2\u961F\u6D3D\u8C08\u5408\u4F5C</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "about"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
