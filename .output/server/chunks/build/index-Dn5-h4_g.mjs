import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { D as useLocaleRouter, d as useFormatTime, e as useToast, x as usePagination, y as useFetch, bg as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W, b as _sfc_main$v, k as _sfc_main$M, z as _sfc_main$y, n as _sfc_main$G, a as _sfc_main$w, l as _sfc_main$u, v as _sfc_main$o } from './server.mjs';
import { s as shoplyBindLocales, _ as __nuxt_component_6 } from './ShoplyBindDialog-CfJWmaYY.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { defineComponent, ref, computed, reactive, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useShoplyPlanName } from './useShoplyPlanName-ClvbNIbj.mjs';
import { useRoute, useRouter } from 'vue-router';
import { u as useShoplyConsoleCopy, i as isShoplyNotConfigured, r as readShoplyErrorReason, f as formatCopy } from './useShoplyConsole-qBrGWuE8.mjs';
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
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const SHOPLY_STORE_LANGS = ["zh", "en", "zh-HK", "id", "ru"];
const SHOPLY_STORE_CURRENCIES = ["CNY", "USD", "EUR", "GBP", "HKD", "JPY", "SGD", "AUD", "CAD", "IDR", "MYR", "THB", "RUB"];
const SHOPLY_STORE_TIMEZONES = [
  "Asia/Shanghai",
  "Asia/Hong_Kong",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Jakarta",
  "Asia/Bangkok",
  "Asia/Dubai",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Moscow",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Australia/Sydney",
  "UTC"
];
const SHOPLY_STORE_DEFAULTS = {
  zh: { currency: "CNY", timezone: "Asia/Shanghai" },
  "zh-HK": { currency: "HKD", timezone: "Asia/Hong_Kong" },
  en: { currency: "USD", timezone: "America/New_York" },
  id: { currency: "IDR", timezone: "Asia/Jakarta" },
  ru: { currency: "RUB", timezone: "Europe/Moscow" }
};
const isShoplyStoreLang = (value) => typeof value === "string" && SHOPLY_STORE_LANGS.includes(value);
const SHOPLY_STORE_NAME_MIN = 2;
const SHOPLY_STORE_NAME_MAX = 64;
const SHOPLY_STORE_DOMAIN_MIN = 3;
const SHOPLY_STORE_DOMAIN_MAX = 32;
const SHOPLY_STORE_DOMAIN_PATTERN = /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/;
const isShoplyStoreDomain = (value) => SHOPLY_STORE_DOMAIN_PATTERN.test(value) && !value.includes("--");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { planName } = useShoplyPlanName();
    const { copy, locale } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { formatDate } = useFormatTime();
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    const { page, pageSize, onPageChange } = usePagination(10);
    const isBindOpen = ref(false);
    const bindCopy = computed(() => {
      const code = locale.value in shoplyBindLocales ? locale.value : "zh";
      return shoplyBindLocales[code];
    });
    const onBound = async () => {
      await refresh();
    };
    const keywordInput = ref("");
    const keyword = ref("");
    const selectedTimezone = ref("");
    const { data, error, refresh } = useFetch(
      "/api/shoply/stores",
      {
        server: false,
        lazy: true,
        query: computed(() => ({ page: page.value, limit: pageSize.value, keyword: keyword.value || void 0 }))
      },
      "$aeTUDfnt7n"
      /* nuxt-injected */
    );
    const { data: entitlementData } = useFetch(
      "/api/shoply/entitlement",
      { server: false, lazy: true },
      "$8MNuvSciZd"
      /* nuxt-injected */
    );
    const stores = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) != null ? _c : [];
    });
    const filteredStores = computed(() => {
      if (!selectedTimezone.value) return stores.value;
      return stores.value.filter((store) => store.timezone === selectedTimezone.value);
    });
    const total = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) != null ? _c : 0;
    });
    const summary = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.summary) != null ? _c : null;
    });
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const trial = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.trial) != null ? _c : null;
    });
    const quota = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.quota) != null ? _c : null;
    });
    const storeLimit = computed(() => quota.value ? Math.min(quota.value.planMaxStores, quota.value.platformMaxStores) : 0);
    const quotaFull = computed(() => Boolean(quota.value) && quota.value.available <= 0);
    const platformCapped = computed(() => Boolean(quota.value) && quota.value.platformMaxStores < quota.value.planMaxStores);
    const quotaFullReason = computed(() => platformCapped.value ? copy.value.errors.platform_limit : copy.value.stores.quotaFull);
    const canCreate = computed(() => !error.value && Boolean(data.value) && (Boolean(pendingCreate.value) || !quotaFull.value));
    const notConfigured = computed(() => isShoplyNotConfigured(error.value));
    const errorMessage = computed(() => {
      const reason = readShoplyErrorReason(error.value);
      return reason === "unavailable" || reason === "generic" ? copy.value.stores.errorDescription : copy.value.errors[reason];
    });
    const planLabel = computed(() => {
      var _a, _b, _c;
      if (!entitlement.value) return "";
      if (entitlement.value.source === "free" && ((_a = trial.value) == null ? void 0 : _a.active)) return (_c = (_b = copy.value.plan) == null ? void 0 : _b.trial) != null ? _c : "";
      return planName(entitlement.value.planKey, entitlement.value.planCode);
    });
    const effectiveStoreStatus = (store) => {
      if (store.storeStatus === 30) return 30;
      if (store.expireAt && !store.expireAt.startsWith("2099-")) {
        const expMs = Date.parse(store.expireAt);
        if (Number.isFinite(expMs)) {
          if (expMs <= Date.now()) return 30;
          if (expMs <= Date.now() + 7 * 864e5) return 20;
        }
      }
      if ((!store.planKey || store.planKey === "free") && !store.trial) return 30;
      if (store.storeStatus === 20) return 20;
      return 10;
    };
    const expireLabel = (store) => {
      if (!store.expireAt || store.expireAt.startsWith("2099-")) {
        if (effectiveStoreStatus(store) === 30) return copy.value.stores.license.expired;
        return copy.value.plan.longTerm;
      }
      return formatDate(store.expireAt);
    };
    const timezoneLabel = (timezone) => {
      if (!timezone) return copy.value.common.notAvailable;
      const map = copy.value.stores.timezones;
      return map[timezone] || timezone.replace(/_/g, " ");
    };
    const formatNumber = (value) => {
      const n = Number(value != null ? value : 0);
      return Number.isFinite(n) ? n.toLocaleString() : "0";
    };
    const formatDecimal = (value) => {
      const n = Number(value != null ? value : 0);
      if (!Number.isFinite(n)) return "0.00";
      return n.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    const formatStoreMoney = (value, currency) => {
      const formatted = formatDecimal(value);
      return currency ? `${currency} ${formatted}` : formatted;
    };
    const isTemporaryDomain = (domain) => /^miniapp-[a-z0-9]+\./i.test(domain);
    const statusBadge = (store) => {
      if (store.status === 30) return { label: copy.value.stores.status.disabled, color: "error" };
      const licenseStatus = effectiveStoreStatus(store);
      if (licenseStatus === 30) return { label: copy.value.stores.license.expired, color: "error" };
      if (licenseStatus === 20) return { label: copy.value.stores.license.expiring, color: "warning" };
      if (store.status === 10) return { label: copy.value.stores.status.review, color: "info" };
      return { label: copy.value.stores.status.open, color: "success" };
    };
    const applyingThemeSlug = computed(() => {
      const value = route.query.applyTheme;
      return Array.isArray(value) ? String(value[0] || "").trim() : String(value || "").trim();
    });
    const applyingThemeName = computed(() => {
      const value = route.query.themeName;
      const resolved = Array.isArray(value) ? String(value[0] || "").trim() : String(value || "").trim();
      return resolved || applyingThemeSlug.value;
    });
    const hasApplyTheme = computed(() => Boolean(applyingThemeSlug.value));
    const cancelApplyTheme = () => {
      const query = { ...route.query };
      delete query.applyTheme;
      delete query.themeName;
      router.replace({ query });
    };
    const applyThemeToStore = async (storeId) => {
      applyingThemeSlug.value;
      await openAdmin();
    };
    const applyingAppSlug = computed(() => {
      const value = route.query.applyApp;
      return Array.isArray(value) ? String(value[0] || "").trim() : String(value || "").trim();
    });
    const applyingAppName = computed(() => {
      const value = route.query.appName;
      const resolved = Array.isArray(value) ? String(value[0] || "").trim() : String(value || "").trim();
      return resolved || applyingAppSlug.value;
    });
    const hasApplyApp = computed(() => Boolean(applyingAppSlug.value));
    const cancelApplyApp = () => {
      const query = { ...route.query };
      delete query.applyApp;
      delete query.appName;
      router.replace({ query });
    };
    const applyAppToStore = async (storeId) => {
      applyingAppSlug.value;
      await openAdmin();
    };
    const openingStoreId = ref(null);
    const openAdmin = async (storeId, targetPath) => {
      return;
    };
    const isCreateOpen = ref(false);
    const creating = ref(false);
    const createError = ref("");
    const createdStore = ref(null);
    const requestId = ref("");
    const pendingCreate = ref(null);
    const defaultsForLocale = () => {
      const lang = isShoplyStoreLang(locale.value) ? locale.value : "zh";
      return { lang, ...SHOPLY_STORE_DEFAULTS[lang] };
    };
    const form = reactive({ name: "", domain: "", categoryId: void 0, ...defaultsForLocale() });
    const assignDomain = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.assignDomain) || "";
    });
    const domainError = computed(() => {
      const value = form.domain.trim().toLowerCase();
      if (!value) return void 0;
      return isShoplyStoreDomain(value) && value.length >= SHOPLY_STORE_DOMAIN_MIN && value.length <= SHOPLY_STORE_DOMAIN_MAX ? void 0 : copy.value.errors.domain_invalid;
    });
    const { data: categoriesData, pending: categoriesPending, error: categoriesError, execute: loadCategories } = useFetch(
      "/api/shoply/stores/categories",
      { server: false, lazy: true, immediate: false },
      "$2Oe5SMg1Ro"
      /* nuxt-injected */
    );
    const categoryItems = computed(() => {
      var _a, _b;
      return ((_b = (_a = categoriesData.value) == null ? void 0 : _a.data) != null ? _b : []).map((item) => ({ label: item.name, value: item.id }));
    });
    const currencyItems = SHOPLY_STORE_CURRENCIES.map((code) => ({ label: code, value: code }));
    const timezoneItems = computed(() => SHOPLY_STORE_TIMEZONES.map((zone) => ({ label: `${timezoneLabel(zone)} (${zone})`, value: zone })));
    const languageItems = computed(() => SHOPLY_STORE_LANGS.map((code) => ({ label: copy.value.createStore.languages[code], value: code })));
    const formReady = computed(() => {
      const length = form.name.trim().length;
      return length >= SHOPLY_STORE_NAME_MIN && length <= SHOPLY_STORE_NAME_MAX && Boolean(form.categoryId) && !domainError.value;
    });
    watch(categoriesData, (value) => {
      var _a;
      const first = (_a = value == null ? void 0 : value.data) == null ? void 0 : _a[0];
      if (!form.categoryId && first) form.categoryId = first.id;
    });
    const openCreate = () => {
      var _a, _b;
      if (!canCreate.value) return;
      if (!pendingCreate.value) {
        Object.assign(form, { name: "", domain: "", categoryId: void 0 }, defaultsForLocale());
        requestId.value = crypto.randomUUID();
      }
      createError.value = "";
      createdStore.value = null;
      isCreateOpen.value = true;
      if (!((_b = (_a = categoriesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.length)) void loadCategories();
    };
    const submitCreate = async () => {
      var _a;
      if (!formReady.value || creating.value) return;
      creating.value = true;
      createError.value = "";
      (_a = pendingCreate.value) != null ? _a : pendingCreate.value = { ...form, categoryId: Number(form.categoryId), name: form.name.trim(), domain: form.domain.trim().toLowerCase(), requestId: requestId.value };
      try {
        const res = await $fetch("/api/shoply/stores", {
          method: "POST",
          body: pendingCreate.value
        });
        createdStore.value = res.data;
        pendingCreate.value = null;
        toast.add({ title: res.data.licenseApplied ? copy.value.createStore.successTitle : copy.value.createStore.licensePending, color: res.data.licenseApplied ? "success" : "warning", icon: res.data.licenseApplied ? "ph:check-circle-bold" : "ph:clock-bold" });
        page.value = 1;
        keyword.value = "";
        keywordInput.value = "";
        await refresh();
      } catch (err) {
        const reason = readShoplyErrorReason(err);
        createError.value = copy.value.errors[reason];
        if (reason !== "unavailable" && reason !== "busy" && reason !== "generic") {
          pendingCreate.value = null;
          requestId.value = crypto.randomUUID();
        }
      } finally {
        creating.value = false;
      }
    };
    const pendingAutoCreate = ref(false);
    watch([data, error], () => {
      if (!pendingAutoCreate.value || !data.value && !error.value) return;
      pendingAutoCreate.value = false;
      openCreate();
    });
    useSeoMeta({
      title: () => copy.value.stores.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UInput = _sfc_main$v;
      const _component_UBadge = _sfc_main$M;
      const _component_UPagination = _sfc_main$y;
      const _component_ShoplyBindDialog = __nuxt_component_6;
      const _component_UModal = _sfc_main$G;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$w;
      const _component_USelect = _sfc_main$u;
      const _component_UAlert = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).stores.title,
        subtitle: unref(copy).stores.subtitle
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "ph:plus-bold",
              size: "lg",
              class: "rounded-full px-5 font-bold",
              disabled: !canCreate.value,
              onClick: openCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(pendingCreate.value ? unref(copy).common.retry : unref(copy).stores.create)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(pendingCreate.value ? unref(copy).common.retry : unref(copy).stores.create), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "ph:plus-bold",
                size: "lg",
                class: "rounded-full px-5 font-bold",
                disabled: !canCreate.value,
                onClick: openCreate
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(pendingCreate.value ? unref(copy).common.retry : unref(copy).stores.create), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (hasApplyTheme.value) {
        _push(`<div class="flex flex-col gap-3 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between shadow-sm"><div class="flex min-w-0 items-center gap-3.5"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sparkle-bold",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-sm font-black text-slate-900">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.applyThemeBanner, { name: applyingThemeName.value }))}</p><p class="mt-0.5 text-xs text-slate-500 font-mono">${ssrInterpolate(applyingThemeSlug.value)}</p></div></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "sm",
          icon: "ph:x-bold",
          class: "self-start rounded-full text-slate-500 hover:text-slate-900 sm:self-auto",
          onClick: cancelApplyTheme
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).stores.clearApplyTheme)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).stores.clearApplyTheme), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (hasApplyApp.value) {
        _push(`<div class="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between shadow-sm"><div class="flex min-w-0 items-center gap-3.5"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:package-bold",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-sm font-black text-slate-900">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.applyAppBanner, { name: applyingAppName.value }))}</p><p class="mt-0.5 text-xs text-slate-500 font-mono">${ssrInterpolate(applyingAppSlug.value)}</p></div></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "sm",
          icon: "ph:x-bold",
          class: "self-start rounded-full text-slate-500 hover:text-slate-900 sm:self-auto",
          onClick: cancelApplyApp
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).stores.clearApplyApp)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).stores.clearApplyApp), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (quota.value) {
        _push(`<div class="${ssrRenderClass([quotaFull.value ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white", "flex flex-col gap-3 rounded-2xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between"])}"><div class="flex min-w-0 items-center gap-3"><span class="${ssrRenderClass([quotaFull.value ? "bg-amber-100 text-amber-600" : "bg-blue-50 text-blue-600", "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: quotaFull.value ? "ph:warning-bold" : "ph:storefront-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-sm font-bold text-slate-900">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.quota, { owned: quota.value.owned, max: storeLimit.value }))}</p><p class="truncate text-xs text-slate-500">${ssrInterpolate(quotaFull.value ? quotaFullReason.value : planLabel.value)}</p></div></div>`);
        if (quotaFull.value && !platformCapped.value) {
          _push(ssrRenderComponent(_component_UButton, {
            to: unref(localePath)("/user/subscription"),
            color: "warning",
            variant: "soft",
            class: "self-start rounded-full font-bold sm:self-auto",
            "trailing-icon": "ph:arrow-right-bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).stores.upgradeForMore)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).stores.upgradeForMore), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (summary.value && summary.value.totalStores > 0) {
        _push(`<div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm space-y-4"><div class="flex flex-wrap items-center justify-between gap-2"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chart-bar-duotone",
          class: "h-5 w-5 text-blue-600"
        }, null, _parent));
        _push(`<h2 class="text-sm font-black text-slate-900">${ssrInterpolate(unref(copy).stores.summaryTitle)}</h2></div>`);
        if (summary.value.regions.length) {
          _push(`<div class="flex flex-wrap items-center gap-1.5"><span class="text-xs font-semibold text-slate-400 mr-1">${ssrInterpolate(unref(copy).stores.regionsOpened)}:</span><button type="button" class="${ssrRenderClass([selectedTimezone.value === "" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200", "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"])}">${ssrInterpolate(unref(copy).stores.allRegions)}</button><!--[-->`);
          ssrRenderList(summary.value.regions, (region) => {
            _push(`<button type="button" class="${ssrRenderClass([selectedTimezone.value === region.timezone ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100", "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:map-pin-fill",
              class: "h-3 w-3 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(timezoneLabel(region.timezone))}</span><span class="font-mono opacity-80">${ssrInterpolate(region.currency)}</span><span class="rounded-full bg-white/25 px-1.5 py-0.2 font-mono text-[11px]">${ssrInterpolate(region.count)}</span></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-3 lg:grid-cols-4"><div class="rounded-2xl bg-slate-50/80 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).stores.metrics.products)}</p><p class="mt-1 text-lg font-black text-slate-900 font-mono">${ssrInterpolate(formatNumber(summary.value.activeProductCount))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(summary.value.productCount))}</span></p></div><div class="rounded-2xl bg-slate-50/80 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).stores.metrics.orders)}</p><p class="mt-1 text-lg font-black text-slate-900 font-mono">${ssrInterpolate(formatNumber(summary.value.orderCount30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(summary.value.orderCount))}</span></p></div><div class="rounded-2xl bg-slate-50/80 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).stores.metrics.revenue)}</p><p class="mt-1 text-lg font-black text-emerald-600 font-mono">${ssrInterpolate(formatDecimal(summary.value.revenue30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatDecimal(summary.value.revenue))}</span></p></div><div class="rounded-2xl bg-slate-50/80 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).stores.metrics.traffic)}</p><p class="mt-1 text-lg font-black text-slate-900 font-mono">${ssrInterpolate(formatNumber(summary.value.uv30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(summary.value.pv30d))}</span></p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="flex flex-col gap-2 sm:flex-row" role="search">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: keywordInput.value,
        "onUpdate:modelValue": ($event) => keywordInput.value = $event,
        icon: "ph:magnifying-glass",
        size: "lg",
        class: "w-full sm:max-w-md",
        placeholder: unref(copy).stores.searchPlaceholder,
        "aria-label": unref(copy).stores.searchPlaceholder
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        color: "neutral",
        variant: "outline",
        size: "lg",
        class: "justify-center rounded-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).stores.search)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).stores.search), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (!unref(data) && !unref(error)) {
        _push(`<div class="grid gap-4 md:grid-cols-2"><!--[-->`);
        ssrRenderList(4, (index) => {
          _push(`<div class="h-44 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: notConfigured.value ? "ph:plugs-bold" : "ph:cloud-warning-bold",
          class: "mx-auto h-12 w-12 text-slate-300"
        }, null, _parent));
        _push(`<h2 class="mt-4 text-lg font-black text-slate-900">${ssrInterpolate(notConfigured.value ? unref(copy).stores.notConfiguredTitle : unref(copy).stores.errorTitle)}</h2><p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">${ssrInterpolate(notConfigured.value ? unref(copy).stores.notConfiguredDescription : errorMessage.value)}</p>`);
        if (!notConfigured.value) {
          _push(ssrRenderComponent(_component_UButton, {
            class: "mt-6 rounded-full",
            color: "neutral",
            variant: "outline",
            icon: "ph:arrow-clockwise-bold",
            onClick: ($event) => unref(refresh)()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).common.retry)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (!stores.value.length) {
        _push(`<div class="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><span class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:storefront-duotone",
          class: "h-8 w-8"
        }, null, _parent));
        _push(`</span><h2 class="mt-5 text-xl font-black text-slate-900">${ssrInterpolate(unref(copy).stores.emptyTitle)}</h2><p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">${ssrInterpolate(unref(copy).stores.emptyDescription)}</p>`);
        if ((_a = trial.value) == null ? void 0 : _a.eligible) {
          _push(`<p class="mx-auto mt-2 max-w-md text-sm font-bold text-emerald-600">${ssrInterpolate(unref(copy).plan.trialEligible)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (hasApplyTheme.value) {
          _push(`<p class="mx-auto mt-2 max-w-md text-sm font-bold text-blue-600">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.emptyApplyThemeHint, { name: applyingThemeName.value }))}</p>`);
        } else if (hasApplyApp.value) {
          _push(`<p class="mx-auto mt-2 max-w-md text-sm font-bold text-emerald-600">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.emptyApplyAppHint, { name: applyingAppName.value }))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UButton, {
          class: "mt-6 rounded-full px-6 font-bold",
          size: "lg",
          icon: "ph:plus-bold",
          disabled: !canCreate.value,
          onClick: openCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(pendingCreate.value ? unref(copy).common.retry : unref(copy).stores.create)}`);
            } else {
              return [
                createTextVNode(toDisplayString(pendingCreate.value ? unref(copy).common.retry : unref(copy).stores.create), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mx-auto mt-8 max-w-md border-t border-slate-100 pt-6"><p class="text-sm font-bold text-slate-700">${ssrInterpolate(bindCopy.value.entryTitle)}</p><p class="mt-1 text-xs leading-6 text-slate-500">${ssrInterpolate(bindCopy.value.entryDescription)}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "mt-3 rounded-full font-bold",
          color: "neutral",
          variant: "outline",
          icon: "ph:link-simple-bold",
          onClick: ($event) => isBindOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(bindCopy.value.entryAction)}`);
            } else {
              return [
                createTextVNode(toDisplayString(bindCopy.value.entryAction), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!--[--><ul class="grid gap-4 md:grid-cols-2"><!--[-->`);
        ssrRenderList(filteredStores.value, (store) => {
          _push(`<li class="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><h2 class="truncate text-lg font-black text-slate-900">${ssrInterpolate(store.name)}</h2><p class="mt-1 flex min-w-0 items-center gap-2 text-sm text-slate-500">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:globe-simple",
            class: "h-4 w-4 shrink-0"
          }, null, _parent));
          _push(`<span class="truncate">${ssrInterpolate(store.domain || unref(copy).common.notAvailable)}</span>`);
          if (isTemporaryDomain(store.domain)) {
            _push(ssrRenderComponent(_component_UBadge, {
              size: "sm",
              color: "neutral",
              variant: "soft",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).stores.temporaryDomain)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.temporaryDomain), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</p><div class="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">`);
          if (store.timezone) {
            _push(`<span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 font-medium text-blue-700"${ssrRenderAttr("title", `${unref(copy).stores.metrics.region}: ${store.timezone}`)}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:map-pin-bold",
              class: "h-3 w-3 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(timezoneLabel(store.timezone))}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          if (store.currency) {
            _push(`<span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 font-mono font-semibold text-slate-700"${ssrRenderAttr("title", unref(copy).stores.metrics.currency)}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:coins-bold",
              class: "h-3 w-3 shrink-0 text-slate-500"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(store.currency)}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          if (store.categoryName) {
            _push(`<span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-600"${ssrRenderAttr("title", unref(copy).stores.metrics.category)}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:tag-bold",
              class: "h-3 w-3 shrink-0 text-slate-400"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(store.categoryName)}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: statusBadge(store).color,
            variant: "subtle",
            class: "shrink-0"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(statusBadge(store).label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(statusBadge(store).label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
          if (store.stats) {
            _push(`<div class="mt-4 grid grid-cols-2 gap-2.5 rounded-2xl bg-slate-50/90 p-3.5 text-xs sm:grid-cols-4"><div class="min-w-0"><p class="truncate text-[11px] text-slate-400">${ssrInterpolate(unref(copy).stores.metrics.products)}</p><p class="mt-0.5 font-mono text-sm font-black text-slate-900">${ssrInterpolate(formatNumber(store.stats.activeProductCount))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(store.stats.productCount))}</span></p></div><div class="min-w-0"><p class="truncate text-[11px] text-slate-400">${ssrInterpolate(unref(copy).stores.metrics.orders)}</p><p class="mt-0.5 font-mono text-sm font-black text-slate-900">${ssrInterpolate(formatNumber(store.stats.orderCount30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(store.stats.orderCount))}</span></p></div><div class="min-w-0"><p class="truncate text-[11px] text-slate-400">${ssrInterpolate(unref(copy).stores.metrics.revenue)}</p><p class="mt-0.5 truncate font-mono text-sm font-black text-emerald-600">${ssrInterpolate(formatStoreMoney(store.stats.revenue30d, store.currency))}</p><p class="truncate font-mono text-[11px] text-slate-400">${ssrInterpolate(formatStoreMoney(store.stats.revenue, store.currency))}</p></div><div class="min-w-0"><p class="truncate text-[11px] text-slate-400">${ssrInterpolate(unref(copy).stores.metrics.traffic)}</p><p class="mt-0.5 font-mono text-sm font-black text-slate-900">${ssrInterpolate(formatNumber(store.stats.uv30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(store.stats.pv30d))}</span></p></div><div class="col-span-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-2 text-[11px] text-slate-500 sm:col-span-4"><span>${ssrInterpolate(unref(copy).stores.metrics.customers)}: <strong class="font-mono text-slate-700">${ssrInterpolate(formatNumber(store.stats.customerCount))}</strong></span><span>${ssrInterpolate(unref(copy).stores.metrics.lastOrder)}: <strong class="text-slate-700">${ssrInterpolate(store.stats.lastOrderAt || store.lastOrderAt ? unref(formatDate)(store.stats.lastOrderAt || store.lastOrderAt) : unref(copy).stores.metrics.noOrdersYet)}</strong></span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<dl class="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3"><div class="min-w-0"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.plan)}</dt><dd class="mt-1 flex items-center gap-1.5 truncate font-semibold text-slate-800"><span class="truncate">${ssrInterpolate(unref(planName)(store.planKey, store.edition))}</span>`);
          if (store.trial) {
            _push(ssrRenderComponent(_component_UBadge, {
              size: "xs",
              color: "info",
              variant: "subtle",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).plan.trialBadge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).plan.trialBadge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</dd></div><div class="min-w-0"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.expires)}</dt><dd class="${ssrRenderClass([effectiveStoreStatus(store) === 30 ? "text-rose-600" : effectiveStoreStatus(store) === 20 ? "text-amber-600" : "text-slate-800", "mt-1 truncate font-semibold"])}">${ssrInterpolate(expireLabel(store))}</dd></div><div class="col-span-2 min-w-0 sm:col-span-1"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.created)}</dt><dd class="mt-1 truncate font-semibold text-slate-800">${ssrInterpolate(store.createdAt ? unref(formatDate)(store.createdAt) : unref(copy).common.notAvailable)}</dd></div></dl><div class="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">`);
          if (hasApplyTheme.value) {
            _push(ssrRenderComponent(_component_UButton, {
              icon: "ph:sparkle-bold",
              class: "rounded-full font-black bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700",
              loading: openingStoreId.value === store.id,
              disabled: store.status === 30 || openingStoreId.value !== null,
              onClick: ($event) => applyThemeToStore(store.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).stores.applyThemeAction)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.applyThemeAction), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (hasApplyApp.value) {
            _push(ssrRenderComponent(_component_UButton, {
              icon: "ph:package-bold",
              class: "rounded-full font-black bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700",
              loading: openingStoreId.value === store.id,
              disabled: store.status === 30 || openingStoreId.value !== null,
              onClick: ($event) => applyAppToStore(store.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).stores.applyAppAction)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.applyAppAction), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_UButton, {
              icon: "ph:gauge-bold",
              class: "rounded-full font-bold",
              loading: openingStoreId.value === store.id,
              disabled: store.status === 30 || openingStoreId.value !== null,
              onClick: ($event) => openAdmin(store.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).stores.openAdmin)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.openAdmin), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          if (store.domain) {
            _push(ssrRenderComponent(_component_UButton, {
              to: `https://${store.domain}`,
              target: "_blank",
              rel: "noopener noreferrer",
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-square-out-bold",
              class: "rounded-full font-bold"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).stores.visit)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.visit), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
        if (total.value > unref(pageSize)) {
          _push(`<div class="flex flex-col items-center justify-between gap-3 sm:flex-row"><p class="text-sm text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).stores.total, { count: total.value }))}</p>`);
          _push(ssrRenderComponent(_component_UPagination, {
            page: unref(page),
            "onUpdate:page": [($event) => isRef(page) ? page.value = $event : null, (value) => unref(onPageChange)(value)],
            "items-per-page": unref(pageSize),
            total: total.value
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(ssrRenderComponent(_component_ShoplyBindDialog, {
        open: isBindOpen.value,
        "onUpdate:open": ($event) => isBindOpen.value = $event,
        onBound
      }, null, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isCreateOpen.value,
        "onUpdate:open": ($event) => isCreateOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 sm:p-7"${_scopeId}>`);
            if (createdStore.value) {
              _push2(`<!--[--><span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-bold",
                class: "h-7 w-7"
              }, null, _parent2, _scopeId));
              _push2(`</span><h2 class="mt-5 text-xl font-black text-slate-950"${_scopeId}>${ssrInterpolate(unref(copy).createStore.successTitle)}</h2>`);
              if (!createdStore.value.licenseApplied) {
                _push2(`<p class="mt-2 text-sm text-amber-700"${_scopeId}>${ssrInterpolate(unref(copy).createStore.licensePending)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-2 break-words text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(unref(formatCopy)(unref(copy).createStore.successDescription, { name: createdStore.value.name, domain: createdStore.value.domain }))}</p><div class="mt-6 flex flex-wrap gap-2"${_scopeId}>`);
              if (hasApplyTheme.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  class: "rounded-full font-black bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700",
                  icon: "ph:sparkle-bold",
                  loading: openingStoreId.value === createdStore.value.storeId,
                  onClick: ($event) => applyThemeToStore(createdStore.value.storeId)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).stores.applyThemeAction)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).stores.applyThemeAction), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (hasApplyApp.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  class: "rounded-full font-black bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700",
                  icon: "ph:package-bold",
                  loading: openingStoreId.value === createdStore.value.storeId,
                  onClick: ($event) => applyAppToStore(createdStore.value.storeId)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).stores.applyAppAction)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).stores.applyAppAction), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UButton, {
                  class: "rounded-full font-bold",
                  icon: "ph:gauge-bold",
                  loading: openingStoreId.value === createdStore.value.storeId,
                  onClick: ($event) => openAdmin(createdStore.value.storeId)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).stores.openAdmin)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).stores.openAdmin), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                class: "rounded-full font-bold",
                onClick: ($event) => isCreateOpen.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).common.close)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).common.close), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!--[--><h2 class="text-xl font-black text-slate-950"${_scopeId}>${ssrInterpolate(unref(copy).createStore.title)}</h2><p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(unref(copy).createStore.description)}</p>`);
              _push2(ssrRenderComponent(_component_UForm, {
                state: form,
                class: "mt-6 space-y-4",
                onSubmit: submitCreate
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.name,
                      name: "name",
                      hint: unref(copy).createStore.nameHint,
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.name,
                            "onUpdate:modelValue": ($event) => form.name = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            placeholder: unref(copy).createStore.namePlaceholder,
                            maxlength: unref(SHOPLY_STORE_NAME_MAX),
                            autofocus: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.name,
                              "onUpdate:modelValue": ($event) => form.name = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              placeholder: unref(copy).createStore.namePlaceholder,
                              maxlength: unref(SHOPLY_STORE_NAME_MAX),
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.domain,
                      name: "domain",
                      hint: unref(copy).createStore.domainHint,
                      error: domainError.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex min-w-0 items-center gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.domain,
                            "onUpdate:modelValue": ($event) => form.domain = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "min-w-0 flex-1",
                            placeholder: unref(copy).createStore.domainPlaceholder,
                            maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                            autocapitalize: "off",
                            autocorrect: "off",
                            spellcheck: "false"
                          }, null, _parent4, _scopeId3));
                          if (assignDomain.value) {
                            _push4(`<span class="shrink-0 text-sm text-slate-400"${_scopeId3}>.${ssrInterpolate(assignDomain.value)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex min-w-0 items-center gap-2" }, [
                              createVNode(_component_UInput, {
                                modelValue: form.domain,
                                "onUpdate:modelValue": ($event) => form.domain = $event,
                                disabled: Boolean(pendingCreate.value),
                                class: "min-w-0 flex-1",
                                placeholder: unref(copy).createStore.domainPlaceholder,
                                maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                                autocapitalize: "off",
                                autocorrect: "off",
                                spellcheck: "false"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"]),
                              assignDomain.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "shrink-0 text-sm text-slate-400"
                              }, "." + toDisplayString(assignDomain.value), 1)) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.category,
                      name: "categoryId",
                      required: "",
                      error: unref(categoriesError) ? unref(copy).createStore.categoriesFailed : void 0
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelect, {
                            modelValue: form.categoryId,
                            "onUpdate:modelValue": ($event) => form.categoryId = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: categoryItems.value,
                            loading: unref(categoriesPending),
                            placeholder: unref(copy).createStore.categoryPlaceholder
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.categoryId,
                              "onUpdate:modelValue": ($event) => form.categoryId = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: categoryItems.value,
                              loading: unref(categoriesPending),
                              placeholder: unref(copy).createStore.categoryPlaceholder
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items", "loading", "placeholder"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid gap-4 sm:grid-cols-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.currency,
                      name: "currency",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelect, {
                            modelValue: form.currency,
                            "onUpdate:modelValue": ($event) => form.currency = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: unref(currencyItems)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.currency,
                              "onUpdate:modelValue": ($event) => form.currency = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.language,
                      name: "lang",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelect, {
                            modelValue: form.lang,
                            "onUpdate:modelValue": ($event) => form.lang = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: languageItems.value
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.lang,
                              "onUpdate:modelValue": ($event) => form.lang = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).createStore.timezone,
                      name: "timezone",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_USelect, {
                            modelValue: form.timezone,
                            "onUpdate:modelValue": ($event) => form.timezone = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: timezoneItems.value
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.timezone,
                              "onUpdate:modelValue": ($event) => form.timezone = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: timezoneItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (createError.value) {
                      _push3(ssrRenderComponent(_component_UAlert, {
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: createError.value
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex justify-end gap-2 pt-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      class: "rounded-full",
                      onClick: ($event) => isCreateOpen.value = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(copy).common.cancel)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      type: "submit",
                      class: "rounded-full px-6 font-bold",
                      loading: creating.value,
                      disabled: !formReady.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(copy).createStore.submit)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(copy).createStore.submit), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.name,
                        name: "name",
                        hint: unref(copy).createStore.nameHint,
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.name,
                            "onUpdate:modelValue": ($event) => form.name = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            placeholder: unref(copy).createStore.namePlaceholder,
                            maxlength: unref(SHOPLY_STORE_NAME_MAX),
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"])
                        ]),
                        _: 1
                      }, 8, ["label", "hint"]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.domain,
                        name: "domain",
                        hint: unref(copy).createStore.domainHint,
                        error: domainError.value
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex min-w-0 items-center gap-2" }, [
                            createVNode(_component_UInput, {
                              modelValue: form.domain,
                              "onUpdate:modelValue": ($event) => form.domain = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "min-w-0 flex-1",
                              placeholder: unref(copy).createStore.domainPlaceholder,
                              maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                              autocapitalize: "off",
                              autocorrect: "off",
                              spellcheck: "false"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"]),
                            assignDomain.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "shrink-0 text-sm text-slate-400"
                            }, "." + toDisplayString(assignDomain.value), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label", "hint", "error"]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.category,
                        name: "categoryId",
                        required: "",
                        error: unref(categoriesError) ? unref(copy).createStore.categoriesFailed : void 0
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: form.categoryId,
                            "onUpdate:modelValue": ($event) => form.categoryId = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: categoryItems.value,
                            loading: unref(categoriesPending),
                            placeholder: unref(copy).createStore.categoryPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items", "loading", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label", "error"]),
                      createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [
                        createVNode(_component_UFormField, {
                          label: unref(copy).createStore.currency,
                          name: "currency",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: form.currency,
                              "onUpdate:modelValue": ($event) => form.currency = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        createVNode(_component_UFormField, {
                          label: unref(copy).createStore.language,
                          name: "lang",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: form.lang,
                              "onUpdate:modelValue": ($event) => form.lang = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.timezone,
                        name: "timezone",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: form.timezone,
                            "onUpdate:modelValue": ($event) => form.timezone = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: timezoneItems.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createError.value ? (openBlock(), createBlock(_component_UAlert, {
                        key: 0,
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: createError.value
                      }, null, 8, ["description"])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          class: "rounded-full",
                          onClick: ($event) => isCreateOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          type: "submit",
                          class: "rounded-full px-6 font-bold",
                          loading: creating.value,
                          disabled: !formReady.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(copy).createStore.submit), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 sm:p-7" }, [
                createdStore.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("span", { class: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:check-circle-bold",
                      class: "h-7 w-7"
                    })
                  ]),
                  createVNode("h2", { class: "mt-5 text-xl font-black text-slate-950" }, toDisplayString(unref(copy).createStore.successTitle), 1),
                  !createdStore.value.licenseApplied ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-2 text-sm text-amber-700"
                  }, toDisplayString(unref(copy).createStore.licensePending), 1)) : createCommentVNode("", true),
                  createVNode("p", { class: "mt-2 break-words text-sm leading-6 text-slate-500" }, toDisplayString(unref(formatCopy)(unref(copy).createStore.successDescription, { name: createdStore.value.name, domain: createdStore.value.domain })), 1),
                  createVNode("div", { class: "mt-6 flex flex-wrap gap-2" }, [
                    hasApplyTheme.value ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      class: "rounded-full font-black bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700",
                      icon: "ph:sparkle-bold",
                      loading: openingStoreId.value === createdStore.value.storeId,
                      onClick: ($event) => applyThemeToStore(createdStore.value.storeId)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).stores.applyThemeAction), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : hasApplyApp.value ? (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      class: "rounded-full font-black bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700",
                      icon: "ph:package-bold",
                      loading: openingStoreId.value === createdStore.value.storeId,
                      onClick: ($event) => applyAppToStore(createdStore.value.storeId)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).stores.applyAppAction), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : (openBlock(), createBlock(_component_UButton, {
                      key: 2,
                      class: "rounded-full font-bold",
                      icon: "ph:gauge-bold",
                      loading: openingStoreId.value === createdStore.value.storeId,
                      onClick: ($event) => openAdmin(createdStore.value.storeId)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).stores.openAdmin), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      class: "rounded-full font-bold",
                      onClick: ($event) => isCreateOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).common.close), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("h2", { class: "text-xl font-black text-slate-950" }, toDisplayString(unref(copy).createStore.title), 1),
                  createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(unref(copy).createStore.description), 1),
                  createVNode(_component_UForm, {
                    state: form,
                    class: "mt-6 space-y-4",
                    onSubmit: submitCreate
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.name,
                        name: "name",
                        hint: unref(copy).createStore.nameHint,
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.name,
                            "onUpdate:modelValue": ($event) => form.name = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            placeholder: unref(copy).createStore.namePlaceholder,
                            maxlength: unref(SHOPLY_STORE_NAME_MAX),
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"])
                        ]),
                        _: 1
                      }, 8, ["label", "hint"]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.domain,
                        name: "domain",
                        hint: unref(copy).createStore.domainHint,
                        error: domainError.value
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex min-w-0 items-center gap-2" }, [
                            createVNode(_component_UInput, {
                              modelValue: form.domain,
                              "onUpdate:modelValue": ($event) => form.domain = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "min-w-0 flex-1",
                              placeholder: unref(copy).createStore.domainPlaceholder,
                              maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                              autocapitalize: "off",
                              autocorrect: "off",
                              spellcheck: "false"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "maxlength"]),
                            assignDomain.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "shrink-0 text-sm text-slate-400"
                            }, "." + toDisplayString(assignDomain.value), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label", "hint", "error"]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.category,
                        name: "categoryId",
                        required: "",
                        error: unref(categoriesError) ? unref(copy).createStore.categoriesFailed : void 0
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: form.categoryId,
                            "onUpdate:modelValue": ($event) => form.categoryId = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: categoryItems.value,
                            loading: unref(categoriesPending),
                            placeholder: unref(copy).createStore.categoryPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items", "loading", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label", "error"]),
                      createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [
                        createVNode(_component_UFormField, {
                          label: unref(copy).createStore.currency,
                          name: "currency",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: form.currency,
                              "onUpdate:modelValue": ($event) => form.currency = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ]),
                          _: 1
                        }, 8, ["label"]),
                        createVNode(_component_UFormField, {
                          label: unref(copy).createStore.language,
                          name: "lang",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_USelect, {
                              modelValue: form.lang,
                              "onUpdate:modelValue": ($event) => form.lang = $event,
                              disabled: Boolean(pendingCreate.value),
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).createStore.timezone,
                        name: "timezone",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelect, {
                            modelValue: form.timezone,
                            "onUpdate:modelValue": ($event) => form.timezone = $event,
                            disabled: Boolean(pendingCreate.value),
                            class: "w-full",
                            items: timezoneItems.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createError.value ? (openBlock(), createBlock(_component_UAlert, {
                        key: 0,
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: createError.value
                      }, null, 8, ["description"])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          class: "rounded-full",
                          onClick: ($event) => isCreateOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          type: "submit",
                          class: "rounded-full px-6 font-bold",
                          loading: creating.value,
                          disabled: !formReady.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(copy).createStore.submit), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["state"])
                ], 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/stores/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dn5-h4_g.mjs.map
