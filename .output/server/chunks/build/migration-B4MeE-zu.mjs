import { dl as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bf as useSeoMeta, _ as _sfc_main$R } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-12rK7weU.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-CNxPcIoY.mjs';
import { m as migrationLocales } from './marketing-pages-BHsFqGxr.mjs';
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

const bannerImg = "" + buildAssetsURL("migration-banner.Dfgj5XNa.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "migration",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return migrationLocales[current in migrationLocales ? current : "zh"];
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in migrationLocales) return migrationLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.migration.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in migrationLocales) return migrationLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.migration.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in migrationLocales) return migrationLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.migration.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => bannerImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => bannerImg
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$R;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-28 pb-16 text-white sm:px-8 sm:pt-36 sm:pb-20 lg:px-12 lg:pt-40 lg:pb-24"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14"><div class="text-center lg:col-span-7 lg:text-left"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-3xl font-black leading-[1.18] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8 lg:mx-0">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrows-left-right-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold text-blue-100 sm:text-sm lg:justify-start"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="relative mx-auto w-full max-w-[560px] lg:col-span-5 lg:max-w-none"><div class="pointer-events-none absolute -inset-4 rounded-3xl bg-cyan-400/20 blur-2xl"></div><div class="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/60 p-2 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:rounded-3xl sm:p-3 transition-transform duration-300 hover:scale-[1.01]"><img${ssrRenderAttr("src", unref(bannerImg))} alt="Store Migration Preview" class="w-full h-auto rounded-xl sm:rounded-2xl object-cover" loading="eager"></div></div></div></div></section><section class="py-14 bg-slate-100 border-b border-slate-200"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 text-center"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">${ssrInterpolate(copy.value.sources.label)}</p><div class="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8"><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-bag-duotone",
        class: "h-5 w-5 text-emerald-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">Shopify</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:storefront-duotone",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">Shopline</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:device-mobile-duotone",
        class: "h-5 w-5 text-green-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">${ssrInterpolate(copy.value.sources.weidian)}</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-duotone",
        class: "h-5 w-5 text-violet-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">WooCommerce</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:package-duotone",
        class: "h-5 w-5 text-amber-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">${ssrInterpolate(copy.value.sources.amazon)}</span></div></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-teal-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">${ssrInterpolate(copy.value.workflow.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.workflow.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.workflow.desc)}</p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.steps, (s) => {
        _push(`<div class="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 transition-all hover:bg-white hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10"><span class="text-4xl font-black text-teal-600/30">${ssrInterpolate(s.step)}</span><h3 class="mt-4 text-lg font-bold text-slate-900">${ssrInterpolate(s.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(s.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.guarantees.title)}</h2><p class="mt-4 text-base text-slate-600">${ssrInterpolate(copy.value.guarantees.desc)}</p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.guarantees.items[0].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.guarantees.items[0].desc)}</p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.guarantees.items[1].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.guarantees.items[1].desc)}</p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-line-up-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.guarantees.items[2].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.guarantees.items[2].desc)}</p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">${ssrInterpolate(copy.value.guarantees.items[3].title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(copy.value.guarantees.items[3].desc)}</p></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-teal-700 shadow-xl transition-all hover:bg-teal-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrows-left-right-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "migration"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/migration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=migration-B4MeE-zu.mjs.map
