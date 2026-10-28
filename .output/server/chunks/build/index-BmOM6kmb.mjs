import { u as useI18n, D as useLocaleRouter, t as useAsyncData, by as useCollectionPageJsonLd, bg as useSeoMeta, O as __nuxt_component_3$4, _ as _sfc_main$W } from './server.mjs';
import ShoparkLeadForm from './ShoparkLeadForm-N5i4b_rX.mjs';
import { defineComponent, computed, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useShoparkAuthLinks } from './useShoparkAuthLinks-BeK9Ns7v.mjs';
import { c as casesBanner } from './cases-banner-orEhwJ1M.mjs';
import { h as heroImg } from './b2b-hero-BmxDzkof.mjs';
import { b as bannerImg } from './banner-CA2b0UIS.mjs';
import { l as logisticsImg, a as advantageImg } from './b2c-logistics-DYQpObZh.mjs';
import { c as caseLocales } from './marketing-pages-CJGWYxP0.mjs';
import { d as defaultShoparkCases, l as localizeShoparkCase } from './cases-DnBGv0co.mjs';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const presetCaseCovers = {
      "b2b-valve-manufacturing": heroImg,
      "amazon-auker-electronics": bannerImg,
      "dtc-nordiq-furniture": advantageImg,
      "dtc-solara-swimwear": casesBanner,
      "b2b-autoparts-wholesale": logisticsImg,
      "/themes/shopark/assets/cases/case-b2b.png": heroImg,
      "/themes/shopark/assets/cases/case-amazon.png": bannerImg,
      "/themes/shopark/assets/cases/case-dtc.png": advantageImg,
      "/themes/shopark/assets/cases/case-swim.png": casesBanner,
      "/themes/shopark/assets/cases/case-auto.png": logisticsImg
    };
    const resolveCaseCover = (item) => {
      if (!item) return casesBanner;
      if (item.coverImage && presetCaseCovers[item.coverImage]) {
        return presetCaseCovers[item.coverImage];
      }
      if (item.coverImage && !item.coverImage.startsWith("/themes/shopark/")) {
        return item.coverImage;
      }
      return presetCaseCovers[item.id] || casesBanner;
    };
    const onCoverError = (event) => {
      const target = event.target;
      if (!target || target.dataset.coverFallback === "1") return;
      target.dataset.coverFallback = "1";
      target.src = casesBanner;
    };
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoparkAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return caseLocales[current in caseLocales ? current : "zh"];
    });
    const { data: casesData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "shopark-cases-list",
      () => $fetch("/api/shopark/cases").catch(() => ({ cases: [] }))
    )), __temp = await __temp, __restore(), __temp);
    const casesList = computed(() => {
      var _a;
      const base = ((_a = casesData.value) == null ? void 0 : _a.cases) && casesData.value.cases.length > 0 ? casesData.value.cases : defaultShoparkCases;
      return base.map((item) => localizeShoparkCase(item, locale.value));
    });
    const categoryTabs = computed(() => {
      const tabs = [{ id: "all", name: copy.value.allCategories }];
      const seen = /* @__PURE__ */ new Set();
      for (const c of casesList.value) {
        if (!seen.has(c.category)) {
          seen.add(c.category);
          tabs.push({
            id: c.category,
            name: c.categoryLabel || c.category
          });
        }
      }
      return tabs;
    });
    const selectedTab = ref("all");
    const filteredCases = computed(() => {
      if (selectedTab.value === "all") {
        return casesList.value;
      }
      return casesList.value.filter((c) => c.category === selectedTab.value);
    });
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.title;
      return t("shopark.pages.marketing.case.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.description;
      return t("shopark.pages.marketing.case.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in caseLocales) return caseLocales[locale.value].seo.keywords;
      return t("shopark.pages.marketing.case.seoKeywords") || copy.value.seo.keywords;
    });
    useCollectionPageJsonLd("shopark-cases-collection", {
      path: "/cases",
      name: () => seoTitle.value,
      description: () => seoDescription.value,
      items: filteredCases
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
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$W;
      const _component_ShoparkLeadForm = ShoparkLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-blue-100" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-28 pb-16 text-center text-white sm:px-8 sm:pt-36 sm:pb-20 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shopark-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shopark-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div></div><div class="mx-auto max-w-2xl"><h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.hero.titleMain)}</h1><p class="mt-3 text-sm text-blue-100/80 sm:text-base leading-relaxed">${ssrInterpolate(copy.value.hero.description)}</p></div></section><section class="py-10 sm:py-14"><div class="mx-auto max-w-[1240px] px-5 sm:px-8"><div class="flex flex-wrap items-center justify-center gap-2"><!--[-->`);
      ssrRenderList(categoryTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedTab.value === tab.id ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50", "rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors"])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div><div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(filteredCases.value, (item) => {
        _push(`<article class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300 hover:shadow-sm">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases/" + item.id),
          class: "relative block aspect-[16/9] overflow-hidden bg-slate-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", resolveCaseCover(item))}${ssrRenderAttr("alt", item.title)} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"${_scopeId}><div class="absolute top-3 left-3 flex items-center gap-1.5"${_scopeId}><span class="rounded-md bg-slate-900/80 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"${_scopeId}>${ssrInterpolate(item.categoryLabel || item.category)}</span>`);
              if (item.isFeatured) {
                _push2(`<span class="rounded-md bg-blue-600/90 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"${_scopeId}>${ssrInterpolate(copy.value.featured)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("img", {
                  src: resolveCaseCover(item),
                  alt: item.title,
                  class: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                  loading: "lazy",
                  onError: onCoverError
                }, null, 40, ["src", "alt"]),
                createVNode("div", { class: "absolute top-3 left-3 flex items-center gap-1.5" }, [
                  createVNode("span", { class: "rounded-md bg-slate-900/80 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm" }, toDisplayString(item.categoryLabel || item.category), 1),
                  item.isFeatured ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "rounded-md bg-blue-600/90 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"
                  }, toDisplayString(copy.value.featured), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex flex-1 flex-col justify-between p-5"><div><div class="text-xs text-slate-400">${ssrInterpolate(item.clientName)}`);
        if (item.industry) {
          _push(`<span> \xB7 ${ssrInterpolate(item.industry)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h2 class="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases/" + item.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2><p class="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">${ssrInterpolate(item.summary)}</p></div><div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs"><div class="flex items-baseline gap-1.5"><span class="text-slate-400 text-[11px]">${ssrInterpolate(item.metricLabel)}</span><span class="font-bold text-blue-600">${ssrInterpolate(item.metricValue)}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases/" + item.id),
          class: "font-medium text-slate-500 hover:text-blue-600 flex items-center gap-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.detail)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(copy.value.detail), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-3.5 h-3.5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="border-t border-slate-200/80 bg-white py-12 px-5 text-center"><div class="mx-auto max-w-xl"><p class="text-sm font-semibold text-slate-800">${ssrInterpolate(copy.value.bottomCta.title)}</p><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-5 flex items-center justify-center gap-3"><a${ssrRenderAttr("href", unref(signUpUrl))} class="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700">${ssrInterpolate(copy.value.bottomCta.primaryText)}</a><button type="button" class="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50">${ssrInterpolate(copy.value.bottomCta.secondaryText)}</button></div></div></section>`);
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-7"><button type="button" class="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`</button><div class="text-center"><h3 class="text-base font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoparkLeadForm, {
          class: "mt-5",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/cases/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BmOM6kmb.mjs.map
