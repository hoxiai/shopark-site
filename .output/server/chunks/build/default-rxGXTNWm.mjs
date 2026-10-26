import { _ as __nuxt_component_0 } from './EmailVerificationBanner-COTZbyvB.mjs';
import { r as useSettings, D as useLocaleRouter, u as useI18n, aA as useAppConfig, br as useRuntimeConfig, K as useHead, O as __nuxt_component_3$4, _ as _sfc_main$W, H as useRoute$1, U as useRequestURL, o as navigateTo } from './server.mjs';
import __nuxt_component_3 from './ShoplyLanguageSwitcher-BOM261Mp.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { e as en, z as zh, a as zhHK, r as ru } from './zh-HK-C4q0Dgg9.mjs';
import { s as shoplyMarketplaceLocales } from './marketplace-CasyombD.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-qBrGWuE8.mjs';
import { u as useShoplySiteName } from './useShoplySiteName-LSPGeJ7u.mjs';
import { u as useShoplyLogo } from './useShoplyLogo-Ck6X-KKS.mjs';
import { fA as localeDomainUrl } from '../nitro/nitro.mjs';
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
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const faviconUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20rx='52'%20fill='%23246FE5'%20/%3e%3cpath%20d='M46.1%20184.5L121.5%2054.5C124.1%2049.3%20131.9%2049.3%20134.5%2054.5L209.9%20184.5C215.1%20193.6%20208.6%20201.4%20199.5%20198.8L137.1%20180.6V113C137.1%20107.8%20133.2%20103.9%20128%20103.9C122.8%20103.9%20118.9%20107.8%20118.9%20113V180.6L56.5%20198.8C47.4%20201.4%2040.9%20193.6%2046.1%20184.5Z'%20fill='%23FFFFFF'%20/%3e%3c/svg%3e";
const useLocaleDomainSwitch = () => {
  const config = useRuntimeConfig();
  const route = useRoute$1();
  const requestUrl = useRequestURL();
  const switchDomain = async (locale) => {
    const url = localeDomainUrl(route.fullPath, locale, {
      domainLocales: config.public.apayDomainLocales,
      localeDomains: config.public.apayLocaleDomains,
      protocol: config.public.apayPublicProtocol
    }, requestUrl.origin);
    if (!url) return false;
    await navigateTo(url, { external: true });
    return true;
  };
  return { switchDomain };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const route = useRoute();
    const { locale, mergeLocaleMessage, setLocale } = useI18n();
    const { logoUrl, inverseLogoUrl, logoWidth, logoAlt } = useShoplyLogo();
    const appConfig = useAppConfig();
    const appVersion = computed(() => String(appConfig.appVersion || "").trim());
    const isScrolled = ref(false);
    const darkHeroPaths = /* @__PURE__ */ new Set([
      "/",
      "/page/migration",
      "/page/b2c-store",
      "/page/b2b-website",
      "/page/amazon-store",
      "/page/custom",
      "/page/wholesale",
      "/page/store-design",
      "/page/weidian",
      "/page/install",
      "/page/about",
      "/apps",
      "/themes",
      "/cases",
      "/solutions",
      "/blog"
    ]);
    const isHomePage = computed(() => {
      const currentPath = route.path.replace(/\/$/, "") || "/";
      const homePath = localePath("/").replace(/\/$/, "") || "/";
      return currentPath === homePath || route.name === "index" || String(route.name || "").startsWith("index___");
    });
    const hasDarkHero = computed(() => {
      if (isHomePage.value) return true;
      const strippedPath = (route.path.replace(/^\/(?:zh-HK|zh|en|ru)(?=\/|$)/, "") || "/").replace(/\/$/, "") || "/";
      return darkHeroPaths.has(strippedPath);
    });
    const isTransparentHeader = computed(() => {
      return hasDarkHero.value && !isScrolled.value && !isMobileMenuOpen.value;
    });
    mergeLocaleMessage("en", { shoply: en });
    mergeLocaleMessage("zh", { shoply: zh });
    mergeLocaleMessage("zh-HK", { shoply: zhHK });
    mergeLocaleMessage("ru", { shoply: ru });
    const isMobileMenuOpen = ref(false);
    const isMobileOpenStoreOpen = ref(false);
    const isMobileSolutionsOpen = ref(false);
    const activeDropdown = ref(null);
    const closeDropdownImmediately = () => {
      activeDropdown.value = null;
      isMobileMenuOpen.value = false;
    };
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const locales = [
      { code: "zh", name: "\u4E2D\u6587", fullName: "\u7B80\u4F53\u4E2D\u6587", englishName: "Simplified Chinese", flag: "\u{1F1E8}\u{1F1F3}", tag: "ZH" },
      { code: "zh-HK", name: "\u7E41\u4E2D", fullName: "\u9999\u6E2F\u7E41\u9AD4", englishName: "Traditional Chinese", flag: "\u{1F1ED}\u{1F1F0}", tag: "HK" },
      { code: "en", name: "EN", fullName: "English", englishName: "English (US)", flag: "\u{1F1FA}\u{1F1F8}", tag: "EN" },
      { code: "ru", name: "RU", fullName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", englishName: "Russian", flag: "\u{1F1F7}\u{1F1FA}", tag: "RU" }
    ];
    const marketplaceCopy = computed(() => shoplyMarketplaceLocales[locale.value in shoplyMarketplaceLocales ? locale.value : "zh"]);
    const marketplaceNavigation = computed(() => [
      { path: "/apps", label: marketplaceCopy.value.nav.apps },
      { path: "/themes", label: marketplaceCopy.value.nav.themes }
    ]);
    const { loggedIn, signInUrl, signUpUrl, consoleUrl } = useShoplyAuthLinks();
    const { copy: consoleCopy } = useShoplyConsoleCopy();
    const supportedLocales = new Set(locales.map((item) => item.code));
    const { switchDomain } = useLocaleDomainSwitch();
    useRuntimeConfig().public.apayDomainLocales;
    const switchLocale = async (newLocale) => {
      if (!supportedLocales.has(newLocale)) return;
      isMobileMenuOpen.value = false;
      if (await switchDomain(newLocale)) return;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("locale", newLocale);
      }
      await setLocale(newLocale);
    };
    watch(() => route.path, () => {
    });
    const { formatPageTitle } = useShoplySiteName();
    useHead({
      link: [{
        key: "apay-site-favicon",
        rel: "icon",
        type: "image/svg+xml",
        sizes: "any",
        href: faviconUrl
      }],
      htmlAttrs: {
        class: "scroll-smooth",
        "data-theme-style": "shoply",
        lang: computed(() => locale.value)
      },
      titleTemplate: (titleChunk) => formatPageTitle(titleChunk)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$W;
      const _component_ShoplyLanguageSwitcher = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-theme-style": "shoply",
        class: "min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-blue-200"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_EmailVerificationBanner, null, null, _parent));
      _push(`<header class="${ssrRenderClass([isTransparentHeader.value ? "bg-transparent" : "bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/5", "fixed inset-x-0 top-0 z-50 transition-all duration-300"])}"><nav class="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center gap-2.5 shrink-0",
        "aria-label": _ctx.$t("shoply.nav.home"),
        onClick: ($event) => isMobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", isTransparentHeader.value ? unref(inverseLogoUrl) : unref(logoUrl))}${ssrRenderAttr("alt", unref(logoAlt))}${ssrRenderAttr("width", unref(logoWidth))} height="166" class="h-8 w-auto sm:h-9"${_scopeId}>`);
            if (unref(locale) === "zh" || unref(locale) === "zh-HK") {
              _push2(`<span class="${ssrRenderClass([isTransparentHeader.value ? "border-white/30 bg-white/10 text-white" : "border-blue-200 bg-blue-50 text-blue-600", "hidden rounded-md border px-1.5 py-0.5 text-xs font-bold whitespace-nowrap transition-colors duration-200 xl:inline-flex"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.brandTag"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("img", {
                src: isTransparentHeader.value ? unref(inverseLogoUrl) : unref(logoUrl),
                alt: unref(logoAlt),
                width: unref(logoWidth),
                height: "166",
                class: "h-8 w-auto sm:h-9"
              }, null, 8, ["src", "alt", "width"]),
              unref(locale) === "zh" || unref(locale) === "zh-HK" ? (openBlock(), createBlock("span", {
                key: 0,
                class: ["hidden rounded-md border px-1.5 py-0.5 text-xs font-bold whitespace-nowrap transition-colors duration-200 xl:inline-flex", isTransparentHeader.value ? "border-white/30 bg-white/10 text-white" : "border-blue-200 bg-blue-50 text-blue-600"]
              }, toDisplayString(_ctx.$t("shoply.nav.brandTag")), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([isTransparentHeader.value ? "text-white/85" : "text-slate-600", "hidden items-center gap-6 text-sm font-semibold transition-colors duration-200 lg:flex xl:gap-8"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: ["transition-colors", isTransparentHeader.value ? "hover:text-white" : "hover:text-blue-600"],
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><button type="button" class="${ssrRenderClass([[
        isTransparentHeader.value ? activeDropdown.value === "openStore" ? "text-white font-bold" : "hover:text-white" : activeDropdown.value === "openStore" ? "text-blue-600" : "hover:text-blue-600"
      ], "flex items-center gap-1.5 py-2 transition-colors focus:outline-none"])}"><span>${ssrInterpolate(_ctx.$t("shoply.nav.openStore"))}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: ["h-3.5 w-3.5 transition-transform duration-200", [
          { "rotate-180": activeDropdown.value === "openStore" },
          isTransparentHeader.value ? "text-white/70" : ""
        ]]
      }, null, _parent));
      _push(`</button><div class="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50" style="${ssrRenderStyle(activeDropdown.value === "openStore" ? null : { display: "none" })}"><div class="w-[840px] rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-900/10"><div class="grid grid-cols-12 gap-6 text-left"><div class="col-span-4 flex flex-col justify-between border-r border-slate-100 pr-5"><div class="space-y-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/b2c-store"),
        class: "group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-blue-50/80",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:storefront-bold",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><div${_scopeId}><p class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.salesTitle"))}</p><p class="mt-0.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.salesDesc"))}</p></div>`);
          } else {
            return [
              createVNode("span", { class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white" }, [
                createVNode(_component_UIcon, {
                  name: "ph:storefront-bold",
                  class: "h-5 w-5"
                })
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.salesTitle")), 1),
                createVNode("p", { class: "mt-0.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.salesDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/user/stores"),
        class: "group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-blue-50/80",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sliders-horizontal-bold",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><div${_scopeId}><p class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.mgmtTitle"))}</p><p class="mt-0.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.mgmtDesc"))}</p></div>`);
          } else {
            return [
              createVNode("span", { class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white" }, [
                createVNode(_component_UIcon, {
                  name: "ph:sliders-horizontal-bold",
                  class: "h-5 w-5"
                })
              ]),
              createVNode("div", null, [
                createVNode("p", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.mgmtTitle")), 1),
                createVNode("p", { class: "mt-0.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.mgmtDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/install"),
        class: "mt-4 block rounded-2xl bg-emerald-50/80 p-4 transition-all hover:bg-emerald-100/80 group",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-xs font-bold text-emerald-700"${_scopeId}><span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:terminal-window-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.deployTitle"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-1 text-[11px] text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.deployDesc"))}</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-emerald-700" }, [
                createVNode("span", { class: "flex items-center gap-1.5" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:terminal-window-bold",
                    class: "h-4 w-4"
                  }),
                  createTextVNode(" " + toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.deployTitle")), 1)
                ]),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                })
              ]),
              createVNode("p", { class: "mt-1 text-[11px] text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.deployDesc")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-8 grid grid-cols-2 gap-3.5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/migration"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrows-left-right-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.migrationTitle"))}</span></div><span class="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.badgeNew"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.migrationDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:arrows-left-right-bold",
                        class: "h-4 w-4"
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.migrationTitle")), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.badgeNew")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.migrationDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/themes"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:paint-brush-broad-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.themeTitle"))}</span></div><span class="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.badgeHot"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.themeDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:paint-brush-broad-bold",
                        class: "h-4 w-4"
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.themeTitle")), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.badgeHot")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.themeDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/apps"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:puzzle-piece-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.appsTitle"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.appsDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:puzzle-piece-bold",
                      class: "h-4 w-4"
                    })
                  ]),
                  createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.appsTitle")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.appsDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/store-design"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:hand-pointing-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.customTitle"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.customDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:hand-pointing-bold",
                      class: "h-4 w-4"
                    })
                  ]),
                  createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.customTitle")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.customDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="relative"><button type="button" class="${ssrRenderClass([[
        isTransparentHeader.value ? activeDropdown.value === "solutions" ? "text-white font-bold" : "hover:text-white" : activeDropdown.value === "solutions" ? "text-blue-600" : "hover:text-blue-600"
      ], "flex items-center gap-1.5 py-2 transition-colors focus:outline-none"])}"><span>${ssrInterpolate(_ctx.$t("shoply.nav.solutions"))}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: ["h-3.5 w-3.5 transition-transform duration-200", [
          { "rotate-180": activeDropdown.value === "solutions" },
          isTransparentHeader.value ? "text-white/70" : ""
        ]]
      }, null, _parent));
      _push(`</button><div class="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50" style="${ssrRenderStyle(activeDropdown.value === "solutions" ? null : { display: "none" })}"><div class="w-[840px] rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-900/10"><div class="grid grid-cols-12 gap-6 text-left"><div class="col-span-4 flex flex-col justify-between border-r border-slate-100 pr-5"><div><div class="flex items-start gap-3 rounded-2xl bg-blue-50/80 p-3.5 text-blue-600"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:squares-four-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</span><div><p class="text-sm font-bold text-blue-700">${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.scenarioTitle"))}</p><p class="mt-1 text-xs leading-relaxed text-blue-950/70">${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.scenarioDesc"))}</p></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/solutions"),
        class: "mt-4 block rounded-2xl bg-slate-50 p-4 transition-all hover:bg-blue-50/80 group",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerTitle"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="mt-1 text-[11px] text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerDesc"))}</p>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors" }, [
                createVNode("span", null, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerTitle")), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                })
              ]),
              createVNode("p", { class: "mt-1 text-[11px] text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerDesc")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-8 grid grid-cols-2 gap-3.5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/custom"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:t-shirt-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.podTitle"))}</span></div><span class="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.badgeNew"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.podDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:t-shirt-bold",
                        class: "h-4 w-4"
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.podTitle")), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.badgeNew")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.podDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/amazon-store"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:amazon-logo-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.amazonTitle"))}</span></div><span class="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.badgeHot"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.amazonDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:amazon-logo-bold",
                        class: "h-4 w-4"
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.amazonTitle")), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.badgeHot")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.amazonDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/b2b-website"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:buildings-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2bDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:buildings-bold",
                      class: "h-4 w-4"
                    })
                  ]),
                  createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2bDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/b2c-store"),
        class: "group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:globe-stand-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2cTitle"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2cDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:globe-stand-bold",
                      class: "h-4 w-4"
                    })
                  ]),
                  createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2cTitle")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2cDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/wholesale"),
        class: "group col-span-2 flex flex-col justify-between rounded-2xl border border-blue-100 bg-blue-50/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md",
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:stack-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle"))}</span></div><span class="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.badgeNew"))}</span></div><p class="mt-2.5 text-xs leading-relaxed text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.wholesaleDesc"))}</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:stack-bold",
                        class: "h-4 w-4"
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle")), 1)
                  ]),
                  createVNode("span", { class: "rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.badgeNew")), 1)
                ]),
                createVNode("p", { class: "mt-2.5 text-xs leading-relaxed text-slate-500" }, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.wholesaleDesc")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/cases"),
        class: ["transition-colors", isTransparentHeader.value ? "hover:text-white" : "hover:text-blue-600"],
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.cases"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.cases")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/blog"),
        class: ["transition-colors", isTransparentHeader.value ? "hover:text-white" : "hover:text-blue-600"],
        onClick: closeDropdownImmediately
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/pricing"),
        class: ["transition-colors", isTransparentHeader.value ? "hover:text-white" : "hover:text-blue-600"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.pricing"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.pricing")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(marketplaceNavigation.value, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: unref(localePath)(item.path),
          class: ["transition-colors", isTransparentHeader.value ? "hover:text-white" : "hover:text-blue-600"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-2 sm:gap-3">`);
      _push(ssrRenderComponent(_component_ShoplyLanguageSwitcher, {
        class: "hidden sm:block",
        "current-locale": unref(locale),
        locales,
        inverse: isTransparentHeader.value,
        onSwitch: switchLocale
      }, null, _parent));
      if (unref(loggedIn)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(consoleUrl),
          class: ["hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 md:inline-flex", isTransparentHeader.value ? "bg-white text-blue-600 shadow-blue-950/20 hover:bg-blue-50 hover:shadow-xl" : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:squares-four-bold",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(consoleCopy).nav.console)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:squares-four-bold",
                  class: "h-4 w-4"
                }),
                createTextVNode(" " + toDisplayString(unref(consoleCopy).nav.console), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(signInUrl),
          class: ["hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors active:scale-95 md:inline-flex", isTransparentHeader.value ? "text-white hover:bg-white/15" : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.signIn"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(signUpUrl),
          class: ["hidden rounded-full px-5 py-2.5 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 md:inline-flex", isTransparentHeader.value ? "bg-white text-blue-600 shadow-blue-950/20 hover:bg-blue-50 hover:shadow-xl" : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.signUp"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.signUp")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`<button type="button" class="${ssrRenderClass([isTransparentHeader.value ? "text-white hover:bg-white/15" : "text-slate-700 hover:bg-slate-100", "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden"])}"${ssrRenderAttr("aria-label", _ctx.$t(isMobileMenuOpen.value ? "shoply.nav.closeMenu" : "shoply.nav.menu"))}${ssrRenderAttr("aria-expanded", isMobileMenuOpen.value)}><span class="sr-only">${ssrInterpolate(_ctx.$t(isMobileMenuOpen.value ? "shoply.nav.closeMenu" : "shoply.nav.menu"))}</span><span class="${ssrRenderClass([isMobileMenuOpen.value ? "rotate-45" : "-translate-y-1.5", "absolute h-0.5 w-5 rounded-full bg-current transition-transform"])}"></span><span class="${ssrRenderClass([isMobileMenuOpen.value ? "opacity-0" : "opacity-100", "absolute h-0.5 w-5 rounded-full bg-current transition-opacity"])}"></span><span class="${ssrRenderClass([isMobileMenuOpen.value ? "-rotate-45" : "translate-y-1.5", "absolute h-0.5 w-5 rounded-full bg-current transition-transform"])}"></span></button></div></nav>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"><div class="mx-auto flex max-w-[1440px] flex-col gap-1">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/"),
          class: "rounded-xl px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="rounded-xl overflow-hidden"><button type="button" class="flex w-full items-center justify-between px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"><span>${ssrInterpolate(_ctx.$t("shoply.nav.openStore"))}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-4 w-4 transition-transform duration-200", { "rotate-180": isMobileOpenStoreOpen.value }]
        }, null, _parent));
        _push(`</button><div class="space-y-1 bg-slate-50/80 rounded-xl px-4 py-2 text-sm mt-1 mb-1" style="${ssrRenderStyle(isMobileOpenStoreOpen.value ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/install"),
          class: "flex items-center justify-between py-2 text-emerald-700 hover:text-emerald-800 font-semibold",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.deployTitle"))}</span><span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700"${_scopeId}>Docker</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.deployTitle")), 1),
                createVNode("span", { class: "rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700" }, "Docker")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/b2c-store"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.salesTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.salesTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/user/stores"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.mgmtTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.mgmtTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/migration"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.migrationTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.migrationTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/themes"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.themeTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.themeTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/apps"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.appsTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.appsTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/store-design"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.openStoreMenu.customTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.openStoreMenu.customTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="rounded-xl overflow-hidden"><button type="button" class="flex w-full items-center justify-between px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"><span>${ssrInterpolate(_ctx.$t("shoply.nav.solutions"))}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-4 w-4 transition-transform duration-200", { "rotate-180": isMobileSolutionsOpen.value }]
        }, null, _parent));
        _push(`</button><div class="space-y-1 bg-slate-50/80 rounded-xl px-4 py-2 text-sm mt-1 mb-1" style="${ssrRenderStyle(isMobileSolutionsOpen.value ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/solutions"),
          class: "block py-2 text-blue-600 font-bold border-b border-slate-200/60 mb-1 flex items-center justify-between",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerTitle"))}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.exploreBannerTitle")), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3.5 w-3.5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/custom"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.podTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.podTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/amazon-store"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.amazonTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.amazonTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/b2b-website"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/b2c-store"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2cTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2cTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/wholesale"),
          class: "block py-2 text-slate-600 hover:text-blue-600 font-medium",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases"),
          class: "rounded-xl px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.cases"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.cases")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/blog"),
          class: "rounded-xl px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.blog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.blog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/page/pricing"),
          class: "rounded-xl px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600",
          onClick: closeDropdownImmediately
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.pricing"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("shoply.nav.pricing")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(marketplaceNavigation.value, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.path,
            to: unref(localePath)(item.path),
            class: "rounded-xl px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600",
            onClick: closeDropdownImmediately
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="my-3 h-px bg-slate-200"></div><div class="mb-4 grid grid-cols-2 gap-2 sm:hidden"><!--[-->`);
        ssrRenderList(locales, (item) => {
          _push(`<button type="button" class="${ssrRenderClass([unref(locale) === item.code ? "border-blue-500/80 bg-blue-50/90 text-blue-600 shadow-2xs font-bold" : "border-slate-200/80 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50", "flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-bold transition-all active:scale-98"])}"><div class="flex items-center gap-2 min-w-0"><span class="text-base leading-none select-none">${ssrInterpolate(item.flag)}</span><span class="truncate">${ssrInterpolate(item.fullName)}</span></div>`);
          if (unref(locale) === item.code) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:check-bold",
              class: "h-3.5 w-3.5 text-blue-600 shrink-0"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(loggedIn)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(consoleUrl),
            class: "flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-transform",
            onClick: closeDropdownImmediately
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:squares-four-bold",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(consoleCopy).nav.console)}`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:squares-four-bold",
                    class: "h-4 w-4"
                  }),
                  createTextVNode(" " + toDisplayString(unref(consoleCopy).nav.console), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="grid grid-cols-2 gap-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(signInUrl),
            class: "rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700 active:scale-95 transition-transform",
            onClick: closeDropdownImmediately
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.signIn"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("shoply.nav.signIn")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(signUpUrl),
            class: "rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-transform",
            onClick: closeDropdownImmediately
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.signUp"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("shoply.nav.signUp")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="${ssrRenderClass({ "pt-[72px] sm:pt-20": !hasDarkHero.value })}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-[#07152f] text-white"><div class="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12"><div class="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5"><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "inline-flex items-center gap-2.5",
        "aria-label": _ctx.$t("shoply.nav.home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(inverseLogoUrl))}${ssrRenderAttr("alt", unref(logoAlt))}${ssrRenderAttr("width", unref(logoWidth))} height="166" class="h-10 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(inverseLogoUrl),
                alt: unref(logoAlt),
                width: unref(logoWidth),
                height: "166",
                class: "h-10 w-auto"
              }, null, 8, ["src", "alt", "width"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-5 max-w-md text-sm leading-7 text-blue-100/70">${ssrInterpolate(_ctx.$t("shoply.footer.description"))}</p></div><div><h2 class="text-sm font-bold text-white">${ssrInterpolate(_ctx.$t("shoply.footer.product"))}</h2><ul class="mt-5 space-y-3 text-sm text-blue-100/70"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/solutions"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.solutions"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.solutions")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/cases"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.cases"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.cases")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="https://qingpu.ai" target="_blank" class="hover:text-white">${ssrInterpolate(_ctx.$t("shoply.footer.ai"))}</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/wholesale"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.wholesaleTitle")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/b2b-website"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.nav.solutionsMenu.b2bTitle")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h2 class="text-sm font-bold text-white">${ssrInterpolate(_ctx.$t("shoply.footer.resources"))}</h2><ul class="mt-5 space-y-3 text-sm text-blue-100/70"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/install"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.installGuide"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.installGuide")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="https://gitcode.com/hoxiai/shoply" target="_blank" rel="noreferrer" class="hover:text-white flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "h-3.5 w-3.5 text-blue-300"
      }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$t("shoply.footer.gitcode"))}</a></li><li><a href="https://github.com/hoxiai/shoply" target="_blank" rel="noreferrer" class="hover:text-white flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:github-logo-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$t("shoply.footer.github"))}</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/privacy"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/terms"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h2 class="text-sm font-bold text-white">${ssrInterpolate(_ctx.$t("shoply.footer.company"))}</h2><ul class="mt-5 space-y-3 text-sm text-blue-100/70"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/about"),
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("shoply.footer.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("shoply.footer.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="flex flex-col gap-3 pt-7 text-xs leading-6 text-blue-100/55 lg:flex-row lg:items-center lg:justify-between"><p>Copyright \xA9 ${ssrInterpolate(unref(currentYear))} ${ssrInterpolate(unref(getSetting)("footer_copyright") || _ctx.$t("shoply.footer.copyright"))}</p><div class="flex flex-wrap items-center gap-x-3 gap-y-1">`);
      if (appVersion.value) {
        _push(`<span class="font-mono text-[11px] text-blue-100/45">v${ssrInterpolate(appVersion.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p>${ssrInterpolate(unref(getSetting)("company_name") || _ctx.$t("shoply.footer.operator"))}</p></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-rxGXTNWm.mjs.map
