import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bc as useSeoMeta, _ as _sfc_main$Q } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-C05FT5nr.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
import { m as migrationLocales } from './marketing-pages-CBN_Ll80.mjs';
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
      const _component_UIcon = _sfc_main$Q;
      const _component_ShoplyLeadForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-28 sm:pt-24 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrows-left-right-bold",
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
      _push(`<!--]--></div></div><div class="relative mx-auto mt-14 max-w-5xl"><div class="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/60 p-2 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-3"><img${ssrRenderAttr("src", unref(bannerImg))} alt="Store Migration Preview" class="w-full rounded-[1.5rem] object-cover" loading="eager"></div></div></div></section><section class="py-14 bg-slate-100 border-b border-slate-200"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 text-center"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">\u5168\u9762\u517C\u5BB9\u652F\u6301\u7684\u4E3B\u6D41\u7535\u5546\u5E73\u53F0\u6570\u636E\u6E90\u65E0\u7F1D\u5E73\u79FB</p><div class="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8"><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
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
      _push(`<span class="font-bold text-sm text-slate-800">\u5FAE\u4FE1\u5C0F\u5E97 / \u5FAE\u5E97</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-duotone",
        class: "h-5 w-5 text-violet-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">WooCommerce</span></div><div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm border border-slate-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:package-duotone",
        class: "h-5 w-5 text-amber-600"
      }, null, _parent));
      _push(`<span class="font-bold text-sm text-slate-800">Amazon \u5E97\u94FA</span></div></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-teal-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700"> \u6781\u7B80\u65E0\u635F\u6D41\u7A0B </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u53EA\u9700 4 \u6B65\uFF0C\u5E97\u94FA\u5168\u91CF\u6570\u636E\u5B89\u5168\u65E0\u635F\u5E73\u79FB </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u65E0\u9700\u7F16\u5199\u4EFB\u4F55\u4EE3\u7801\uFF0C\u4E91\u7AEF\u81EA\u52A8\u5316\u89E3\u6790\u5E76\u5BF9\u9F50\u591A\u89C4\u683C\u5546\u54C1\u3001\u8BA2\u5355\u548C\u5BA2\u6237\u6570\u636E\u3002 </p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.steps, (s) => {
        _push(`<div class="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 transition-all hover:bg-white hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10"><span class="text-4xl font-black text-teal-600/30">${ssrInterpolate(s.step)}</span><h3 class="mt-4 text-lg font-bold text-slate-900">${ssrInterpolate(s.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(s.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl"> \u56DB\u5927\u65E0\u635F\u5E73\u79FB\u4FDD\u969C\uFF0C\u8BA9\u4E1A\u52A1\u8FDE\u7EED\u4E0D\u95F4\u65AD </h2><p class="mt-4 text-base text-slate-600"> \u8FC1\u79FB\u4E0D\u4EC5\u662F\u6570\u636E\u7684\u65E0\u635F\u8FC7\u6E21\uFF0C\u66F4\u662F\u544A\u522B\u5E73\u53F0\u6263\u70B9\u3001\u5927\u5E45\u964D\u4F4E\u7ECF\u8425\u6210\u672C\u7684\u6218\u7565\u5347\u7EA7\u3002 </p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u544A\u522B Shopify \u5F3A\u5236\u6536\u53D6\u7684 0.5%~2% \u4EA4\u6613\u8FC7\u8DEF\u8D39\uFF0C\u8D44\u91D1\u76F4\u8FBE\u5546\u5BB6\u81EA\u6709\u7684 Stripe / PayPal \u8D26\u6237\uFF0C\u5E74\u7701\u6570\u4E07\u7F8E\u91D1\u6210\u672C\u3002 </p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">\u6570\u636E\u96F6\u4E22\u5931</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u5B8C\u6574\u652F\u6301\u591A\u56FE\u76F8\u518C\u3001\u5BCC\u6587\u672C\u63CF\u8FF0\u3001\u591A\u89C4\u683C SKU \u5C5E\u6027\u53CA\u5206\u7C7B\u5173\u7CFB\uFF0C\u4E25\u683C\u6838\u9A8C\u6821\u9A8C\u548C\uFF0C\u786E\u4FDD\u6BCF\u4E00\u4EF6\u5546\u54C1\u51C6\u786E\u5C31\u4F4D\u3002 </p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-line-up-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">SEO \u6743\u91CD\u4E0E\u5E7F\u544A\u5E73\u7A33\u8FC7\u6E21</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u63D0\u4F9B 301 \u81EA\u52A8\u94FE\u63A5\u6620\u5C04\u5DE5\u5177\uFF0C\u786E\u4FDD\u539F\u672C\u7684 Google \u81EA\u7136\u641C\u7D22\u6536\u5F55\u4E0E\u6B63\u5728\u6295\u653E\u7684\u5E7F\u544A\u843D\u5730\u9875\u5E73\u6ED1\u627F\u63A5\uFF0C\u6D41\u91CF\u4E0D\u6D6A\u8D39\u3002 </p></div><div class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-duotone",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">\u5BA2\u6237\u4E0E\u5386\u53F2\u8BA2\u5355\u5B8C\u6574\u4FDD\u7559</h3><p class="mt-3 text-sm leading-relaxed text-slate-600"> \u540C\u6B65\u5386\u53F2\u4E70\u5BB6\u8D44\u6599\u3001\u6536\u4EF6\u5730\u5740\u4E0E\u8FC7\u5F80\u8D2D\u4E70\u8BB0\u5F55\uFF0C\u65E0\u7F1D\u63A5\u5165\u65B0\u7684\u4F1A\u5458\u79EF\u5206\u4F53\u7CFB\uFF0C\u7EF4\u6301\u9AD8\u590D\u8D2D\u79C1\u57DF\u6C60\u3002 </p></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-teal-700 shadow-xl transition-all hover:bg-teal-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6\u6570\u636E\u8FC1\u79FB\u4E13\u5BB6\u534F\u52A9</h3><p class="mt-2 text-xs text-slate-500">\u4E13\u4E1A\u6280\u672F\u652F\u6301\u534F\u52A9\u60A8\u8BC4\u4F30\u6E90\u5E97\u94FA\u6570\u636E\u91CF\u4E0E\u8FC1\u79FB\u8BA1\u5212</p></div>`);
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
