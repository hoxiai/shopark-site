import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { B as useLocaleRouter, d as useFormatTime, e as useToast, v as usePagination, w as useFetch, bc as useSeoMeta, i as _sfc_main$L, _ as _sfc_main$Q, b as _sfc_main$s, k as _sfc_main$H, x as _sfc_main$v, n as _sfc_main$B, a as _sfc_main$t, l as _sfc_main$r, bf as _sfc_main$l } from './server.mjs';
import { s as shoplyBindLocales, _ as __nuxt_component_6 } from './ShoplyBindDialog-e1GXB9NZ.mjs';
import { _ as _sfc_main$1 } from './Form-CYIN9NOp.mjs';
import { defineComponent, ref, computed, reactive, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useShoplyConsoleCopy, i as isShoplyNotConfigured, r as readShoplyErrorReason, f as formatCopy } from './useShoplyConsole-Jz-jwtEc.mjs';
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
    const { copy, locale } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { formatDate } = useFormatTime();
    const toast = useToast();
    useRoute();
    useRouter();
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
    const total = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) != null ? _c : 0;
    });
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const quota = computed(() => {
      var _a, _b, _c;
      const remote = (_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.quota;
      if (remote) return remote;
      if (!((_c = data.value) == null ? void 0 : _c.data) || !entitlement.value) return null;
      return { owned: 0, planMaxStores: entitlement.value.maxStores, platformMaxStores: entitlement.value.maxStores, available: entitlement.value.maxStores };
    });
    const storeLimit = computed(() => quota.value ? Math.min(quota.value.planMaxStores, quota.value.platformMaxStores) : 0);
    const quotaFull = computed(() => Boolean(quota.value) && quota.value.available <= 0);
    const platformCapped = computed(() => Boolean(quota.value) && quota.value.platformMaxStores < quota.value.planMaxStores);
    const quotaFullReason = computed(() => platformCapped.value ? copy.value.errors.platform_limit : copy.value.stores.quotaFull);
    const canCreate = computed(() => !error.value && Boolean(data.value) && !quotaFull.value);
    const notConfigured = computed(() => isShoplyNotConfigured(error.value));
    const errorMessage = computed(() => {
      const reason = readShoplyErrorReason(error.value);
      return reason === "unavailable" || reason === "generic" ? copy.value.stores.errorDescription : copy.value.errors[reason];
    });
    const planLabel = computed(() => {
      var _a;
      if (!entitlement.value) return "";
      if (entitlement.value.source === "free") return copy.value.plan.free;
      return ((_a = entitlement.value.subscription) == null ? void 0 : _a.productName) || entitlement.value.planCode;
    });
    const editionLabel = (edition) => {
      const code = String(edition || "").toLowerCase();
      if (!code || code === "free" || code === "custom") return copy.value.plan.free;
      if (entitlement.value && code === entitlement.value.planCode && entitlement.value.subscription) {
        return entitlement.value.subscription.productName;
      }
      return edition;
    };
    const expireLabel = (expireAt) => {
      if (!expireAt || expireAt.startsWith("2099-")) return copy.value.plan.longTerm;
      return formatDate(expireAt);
    };
    const isTemporaryDomain = (domain) => /^miniapp-[a-z0-9]+\./i.test(domain);
    const statusBadge = (store) => {
      if (store.status === 30) return { label: copy.value.stores.status.disabled, color: "error" };
      if (store.status === 10) return { label: copy.value.stores.status.review, color: "info" };
      if (store.storeStatus === 30) return { label: copy.value.stores.license.expired, color: "error" };
      if (store.storeStatus === 20) return { label: copy.value.stores.license.expiring, color: "warning" };
      return { label: copy.value.stores.status.open, color: "success" };
    };
    const openingStoreId = ref(null);
    const openAdmin = async (storeId) => {
      return;
    };
    const isCreateOpen = ref(false);
    const creating = ref(false);
    const createError = ref("");
    const createdStore = ref(null);
    const requestId = ref("");
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
    const timezoneItems = SHOPLY_STORE_TIMEZONES.map((zone) => ({ label: zone.replace(/_/g, " "), value: zone }));
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
      Object.assign(form, { name: "", domain: "", categoryId: void 0 }, defaultsForLocale());
      createError.value = "";
      createdStore.value = null;
      requestId.value = crypto.randomUUID();
      isCreateOpen.value = true;
      if (!((_b = (_a = categoriesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.length)) void loadCategories();
    };
    const submitCreate = async () => {
      if (!formReady.value || creating.value) return;
      creating.value = true;
      createError.value = "";
      try {
        const res = await $fetch("/api/shoply/stores", {
          method: "POST",
          body: { ...form, name: form.name.trim(), domain: form.domain.trim().toLowerCase(), requestId: requestId.value }
        });
        createdStore.value = res.data;
        toast.add({ title: res.data.licenseApplied ? copy.value.createStore.successTitle : copy.value.createStore.licensePending, color: res.data.licenseApplied ? "success" : "warning", icon: res.data.licenseApplied ? "ph:check-circle-bold" : "ph:clock-bold" });
        page.value = 1;
        keyword.value = "";
        keywordInput.value = "";
        await refresh();
      } catch (err) {
        const reason = readShoplyErrorReason(err);
        createError.value = copy.value.errors[reason];
        if (reason !== "unavailable" && reason !== "busy" && reason !== "generic") {
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
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$L;
      const _component_UIcon = _sfc_main$Q;
      const _component_UInput = _sfc_main$s;
      const _component_UBadge = _sfc_main$H;
      const _component_UPagination = _sfc_main$v;
      const _component_ShoplyBindDialog = __nuxt_component_6;
      const _component_UModal = _sfc_main$B;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$t;
      const _component_USelect = _sfc_main$r;
      const _component_UAlert = _sfc_main$l;
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
                  _push3(`${ssrInterpolate(unref(copy).stores.create)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).stores.create), 1)
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
                  createTextVNode(toDisplayString(unref(copy).stores.create), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
        _push(ssrRenderComponent(_component_UButton, {
          class: "mt-6 rounded-full px-6 font-bold",
          size: "lg",
          icon: "ph:plus-bold",
          disabled: !canCreate.value,
          onClick: openCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).stores.create)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).stores.create), 1)
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
        ssrRenderList(stores.value, (store) => {
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
          _push(`</p></div>`);
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
          _push(`</div><dl class="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3"><div class="min-w-0"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.plan)}</dt><dd class="mt-1 truncate font-semibold text-slate-800">${ssrInterpolate(editionLabel(store.edition))}</dd></div><div class="min-w-0"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.expires)}</dt><dd class="${ssrRenderClass([store.storeStatus === 30 ? "text-rose-600" : store.storeStatus === 20 ? "text-amber-600" : "text-slate-800", "mt-1 truncate font-semibold"])}">${ssrInterpolate(expireLabel(store.expireAt))}</dd></div><div class="col-span-2 min-w-0 sm:col-span-1"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).stores.columns.created)}</dt><dd class="mt-1 truncate font-semibold text-slate-800">${ssrInterpolate(store.createdAt ? unref(formatDate)(store.createdAt) : unref(copy).common.notAvailable)}</dd></div></dl><div class="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">`);
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
                              class: "w-full",
                              placeholder: unref(copy).createStore.namePlaceholder,
                              maxlength: unref(SHOPLY_STORE_NAME_MAX),
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])
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
                                class: "min-w-0 flex-1",
                                placeholder: unref(copy).createStore.domainPlaceholder,
                                maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                                autocapitalize: "off",
                                autocorrect: "off",
                                spellcheck: "false"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"]),
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
                              class: "w-full",
                              items: categoryItems.value,
                              loading: unref(categoriesPending),
                              placeholder: unref(copy).createStore.categoryPlaceholder
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "loading", "placeholder"])
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
                            class: "w-full",
                            items: unref(currencyItems)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.currency,
                              "onUpdate:modelValue": ($event) => form.currency = $event,
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                            class: "w-full",
                            items: languageItems.value
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.lang,
                              "onUpdate:modelValue": ($event) => form.lang = $event,
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                            class: "w-full",
                            items: unref(timezoneItems)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_USelect, {
                              modelValue: form.timezone,
                              "onUpdate:modelValue": ($event) => form.timezone = $event,
                              class: "w-full",
                              items: unref(timezoneItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                            class: "w-full",
                            placeholder: unref(copy).createStore.namePlaceholder,
                            maxlength: unref(SHOPLY_STORE_NAME_MAX),
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])
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
                              class: "min-w-0 flex-1",
                              placeholder: unref(copy).createStore.domainPlaceholder,
                              maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                              autocapitalize: "off",
                              autocorrect: "off",
                              spellcheck: "false"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"]),
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
                            class: "w-full",
                            items: categoryItems.value,
                            loading: unref(categoriesPending),
                            placeholder: unref(copy).createStore.categoryPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "loading", "placeholder"])
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
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                            class: "w-full",
                            items: unref(timezoneItems)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                    createVNode(_component_UButton, {
                      class: "rounded-full font-bold",
                      icon: "ph:gauge-bold",
                      loading: openingStoreId.value === createdStore.value.storeId,
                      onClick: ($event) => openAdmin(createdStore.value.storeId)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).stores.openAdmin), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"]),
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
                            class: "w-full",
                            placeholder: unref(copy).createStore.namePlaceholder,
                            maxlength: unref(SHOPLY_STORE_NAME_MAX),
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"])
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
                              class: "min-w-0 flex-1",
                              placeholder: unref(copy).createStore.domainPlaceholder,
                              maxlength: unref(SHOPLY_STORE_DOMAIN_MAX),
                              autocapitalize: "off",
                              autocorrect: "off",
                              spellcheck: "false"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength"]),
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
                            class: "w-full",
                            items: categoryItems.value,
                            loading: unref(categoriesPending),
                            placeholder: unref(copy).createStore.categoryPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "loading", "placeholder"])
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
                              class: "w-full",
                              items: unref(currencyItems)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                              class: "w-full",
                              items: languageItems.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                            class: "w-full",
                            items: unref(timezoneItems)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
