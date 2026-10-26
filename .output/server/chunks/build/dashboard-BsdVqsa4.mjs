import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { D as useLocaleRouter, bi as useCustomerAuth, d as useFormatTime, F as useCurrencyFormat, y as useFetch, bg as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W, k as _sfc_main$M, O as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useShoplyPlanName } from './useShoplyPlanName-ClvbNIbj.mjs';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-qBrGWuE8.mjs';
import { u as useShoplyOrderStatus } from './useShoplyOrderStatus-BLNV7pA1.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { planName } = useShoplyPlanName();
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { user } = useCustomerAuth();
    const { formatDate } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { payStatusLabel, payStatusColor } = useShoplyOrderStatus();
    const { data: entitlementData } = useFetch(
      "/api/shoply/entitlement",
      { server: false, lazy: true },
      "$skxxhdbZkv"
      /* nuxt-injected */
    );
    const { data: storesData, error: storesError } = useFetch(
      "/api/shoply/stores",
      {
        server: false,
        lazy: true,
        query: { page: 1, limit: 3 }
      },
      "$GwsGof8QhT"
      /* nuxt-injected */
    );
    const { data: ordersData } = useFetch(
      "/api/users/orders",
      { lazy: true, query: { page: 1, pageSize: 5 } },
      "$rToCznsgXQ"
      /* nuxt-injected */
    );
    const userName = computed(() => {
      var _a, _b, _c;
      return String(((_a = user.value) == null ? void 0 : _a.nickname) || ((_b = user.value) == null ? void 0 : _b.nickName) || String(((_c = user.value) == null ? void 0 : _c.email) || "").split("@")[0] || copy.value.common.guest);
    });
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const isPaid = computed(() => {
      var _a;
      return ((_a = entitlement.value) == null ? void 0 : _a.source) === "subscription" && Boolean(entitlement.value.subscription);
    });
    const trial = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.trial) != null ? _c : null;
    });
    const isTrialActive = computed(() => {
      var _a;
      return !isPaid.value && Boolean((_a = trial.value) == null ? void 0 : _a.active);
    });
    const planTitle = computed(() => {
      var _a;
      if (isPaid.value && entitlement.value) return planName(entitlement.value.planKey, entitlement.value.planCode);
      if (isTrialActive.value) return copy.value.plan.trial;
      if (!isPaid.value && ((_a = trial.value) == null ? void 0 : _a.expired)) return copy.value.plan.trialExpired;
      return copy.value.plan.free;
    });
    const planExpiry = computed(() => {
      var _a, _b, _c, _d;
      const sub = (_a = entitlement.value) == null ? void 0 : _a.subscription;
      if (isPaid.value && sub) {
        return formatCopy(sub.cancelAtPeriodEnd ? copy.value.plan.endsOn : copy.value.plan.validUntil, { date: formatDate(sub.currentPeriodEnd) });
      }
      if (isTrialActive.value && ((_b = trial.value) == null ? void 0 : _b.endsAt)) {
        return formatCopy(copy.value.plan.trialEndsOn, { date: formatDate(trial.value.endsAt) });
      }
      if ((_c = trial.value) == null ? void 0 : _c.expired) return copy.value.plan.trialExpiredDescription;
      if ((_d = trial.value) == null ? void 0 : _d.eligible) return copy.value.plan.trialEligible;
      return copy.value.plan.freeDescription;
    });
    const periodEndText = computed(() => {
      var _a, _b;
      const end = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.currentPeriodEnd;
      return end ? formatDate(end) : copy.value.common.notAvailable;
    });
    const daysRemaining = computed(() => {
      var _a, _b;
      const end = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.currentPeriodEnd;
      if (!isPaid.value || !end) return null;
      const ms = new Date(end).getTime() - Date.now();
      if (!Number.isFinite(ms)) return null;
      return Math.max(0, Math.ceil(ms / 864e5));
    });
    const isExpiringSoon = computed(() => isPaid.value && daysRemaining.value !== null && daysRemaining.value <= 7);
    const storeCount = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) != null ? _c : 0;
    });
    const storeLimit = computed(() => {
      var _a, _b;
      const quota = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.quota;
      return quota ? Math.min(quota.planMaxStores, quota.platformMaxStores) : 0;
    });
    const recentStores = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) != null ? _c : [];
    });
    const storeSummary = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.summary) != null ? _c : null;
    });
    const recentOrders = computed(() => {
      var _a, _b;
      return (_b = (_a = ordersData.value) == null ? void 0 : _a.data) != null ? _b : [];
    });
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
    useSeoMeta({
      title: () => copy.value.dashboard.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UBadge = _sfc_main$M;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(formatCopy)(unref(copy).dashboard.greeting, { name: userName.value }),
        subtitle: unref(copy).dashboard.subtitle
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              to: `${unref(localePath)("/user/stores")}?create=1`,
              icon: "ph:plus-bold",
              class: "rounded-full px-5 font-bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).dashboard.createStore)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).dashboard.createStore), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                to: `${unref(localePath)("/user/stores")}?create=1`,
                icon: "ph:plus-bold",
                class: "rounded-full px-5 font-bold"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(copy).dashboard.createStore), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isExpiringSoon.value && daysRemaining.value !== null) {
        _push(`<div class="flex flex-col justify-between gap-4 rounded-3xl border border-amber-200 bg-amber-50/90 p-5 sm:flex-row sm:items-center sm:px-6"><div class="flex items-start gap-3.5 min-w-0"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:alarm-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-sm font-black text-amber-950">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.expiringBannerTitle, { plan: planTitle.value, days: daysRemaining.value, date: periodEndText.value }))}</p><p class="mt-1 text-xs leading-5 text-amber-800">${ssrInterpolate(unref(copy).subscription.expiringBannerDesc)}</p></div></div><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/user/subscription"),
          color: "warning",
          class: "rounded-full px-5 font-bold",
          icon: "ph:arrows-clockwise-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).subscription.renewCurrent)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).subscription.renewCurrent), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="grid gap-4 lg:grid-cols-2"><div class="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-2"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).dashboard.planCard)}</p>`);
      if (isPaid.value && daysRemaining.value !== null) {
        _push(ssrRenderComponent(_component_UBadge, {
          color: daysRemaining.value <= 7 ? "warning" : "success",
          variant: "subtle",
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.daysRemainingBadge, { days: daysRemaining.value }))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(formatCopy)(unref(copy).subscription.daysRemainingBadge, { days: daysRemaining.value })), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!entitlement.value) {
        _push(`<div class="mt-4 h-16 animate-pulse rounded-2xl bg-slate-50"></div>`);
      } else {
        _push(`<!--[--><div class="mt-3 flex items-center gap-3"><span class="${ssrRenderClass([isPaid.value ? "bg-blue-600 text-white" : isTrialActive.value ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500", "flex h-11 w-11 items-center justify-center rounded-xl"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: isPaid.value ? "ph:crown-simple-fill" : isTrialActive.value ? "ph:sparkle-bold" : "ph:leaf-bold",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="truncate text-xl font-black text-slate-950">${ssrInterpolate(planTitle.value)}</p><p class="text-sm text-slate-500">${ssrInterpolate(planExpiry.value)}</p></div></div><div class="mt-auto pt-5">`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/user/subscription"),
          color: isExpiringSoon.value ? "warning" : "neutral",
          variant: isExpiringSoon.value ? "solid" : "outline",
          class: "rounded-full font-bold",
          "trailing-icon": "ph:arrow-right-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(isExpiringSoon.value ? unref(copy).subscription.renewCurrent : isPaid.value ? unref(copy).subscription.details : unref(copy).dashboard.upgrade)}`);
            } else {
              return [
                createTextVNode(toDisplayString(isExpiringSoon.value ? unref(copy).subscription.renewCurrent : isPaid.value ? unref(copy).subscription.details : unref(copy).dashboard.upgrade), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      }
      _push(`</div><div class="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).dashboard.storesCard)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/user/stores"),
        class: "text-sm font-semibold text-blue-600 hover:text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).common.viewAll)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).common.viewAll), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(storesData) && !unref(storesError)) {
        _push(`<div class="mt-4 h-16 animate-pulse rounded-2xl bg-slate-50"></div>`);
      } else if (unref(storesError)) {
        _push(`<p class="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">${ssrInterpolate(unref(copy).dashboard.storesUnavailable)}</p>`);
      } else {
        _push(`<!--[--><div class="mt-3 flex flex-wrap items-baseline justify-between gap-2"><div><p class="text-3xl font-black text-slate-950">${ssrInterpolate(storeCount.value)}</p>`);
        if (entitlement.value) {
          _push(`<p class="text-sm text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).dashboard.storesUsage, { owned: storeCount.value, max: storeLimit.value }))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_b = (_a = storeSummary.value) == null ? void 0 : _a.regions) == null ? void 0 : _b.length) {
          _push(`<div class="flex flex-wrap items-center gap-1.5"><!--[-->`);
          ssrRenderList(storeSummary.value.regions, (region) => {
            _push(`<span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:map-pin-fill",
              class: "h-3 w-3 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(timezoneLabel(region.timezone))}</span><span class="font-mono opacity-80">${ssrInterpolate(region.currency)}</span><span class="font-mono text-[11px] opacity-75">\xD7${ssrInterpolate(region.count)}</span></span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (recentStores.value.length) {
          _push(`<ul class="mt-4 space-y-2"><!--[-->`);
          ssrRenderList(recentStores.value, (store) => {
            _push(`<li class="flex flex-col gap-1.5 rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between"><div class="min-w-0"><div class="flex items-center gap-2"><span class="truncate font-semibold text-slate-800">${ssrInterpolate(store.name)}</span>`);
            if (store.timezone) {
              _push(`<span class="shrink-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-200/80">${ssrInterpolate(timezoneLabel(store.timezone))}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (store.currency) {
              _push(`<span class="shrink-0 font-mono text-[11px] font-semibold text-slate-500">${ssrInterpolate(store.currency)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p class="truncate text-xs text-slate-400">${ssrInterpolate(store.domain)}</p></div>`);
            if (store.stats) {
              _push(`<div class="flex shrink-0 items-center gap-3 text-xs font-mono"><span class="text-slate-600"${ssrRenderAttr("title", unref(copy).stores.metrics.orders)}>${ssrInterpolate(formatNumber(store.stats.orderCount30d))}/${ssrInterpolate(formatNumber(store.stats.orderCount))}</span><span class="font-bold text-emerald-600"${ssrRenderAttr("title", unref(copy).stores.metrics.revenue)}>${ssrInterpolate(store.currency || "")} ${ssrInterpolate(formatDecimal(store.stats.revenue30d))}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(copy).dashboard.noStores)}</p>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section>`);
      if (storeSummary.value && storeSummary.value.totalStores > 0) {
        _push(`<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chart-line-up-bold",
          class: "h-5 w-5 text-blue-600"
        }, null, _parent));
        _push(`<h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).dashboard.metricsTitle)}</h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/user/stores"),
          class: "text-sm font-semibold text-blue-600 hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).common.details)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).common.details), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"><div class="rounded-2xl bg-slate-50 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).dashboard.activeProducts)}</p><p class="mt-1 font-mono text-xl font-black text-slate-900">${ssrInterpolate(formatNumber(storeSummary.value.activeProductCount))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(storeSummary.value.productCount))}</span></p></div><div class="rounded-2xl bg-slate-50 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).dashboard.orders30d)}</p><p class="mt-1 font-mono text-xl font-black text-slate-900">${ssrInterpolate(formatNumber(storeSummary.value.orderCount30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(storeSummary.value.orderCount))}</span></p></div><div class="rounded-2xl bg-slate-50 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).dashboard.revenue30d)}</p><p class="mt-1 font-mono text-xl font-black text-emerald-600">${ssrInterpolate(formatDecimal(storeSummary.value.revenue30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatDecimal(storeSummary.value.revenue))}</span></p></div><div class="rounded-2xl bg-slate-50 px-4 py-3"><p class="text-xs text-slate-500">${ssrInterpolate(unref(copy).dashboard.traffic30d)}</p><p class="mt-1 font-mono text-xl font-black text-slate-900">${ssrInterpolate(formatNumber(storeSummary.value.uv30d))} <span class="text-xs font-normal text-slate-400">/ ${ssrInterpolate(formatNumber(storeSummary.value.pv30d))}</span></p></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).dashboard.recentOrders)}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/user/orders"),
        class: "text-sm font-semibold text-blue-600 hover:text-blue-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).common.viewAll)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).common.viewAll), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!recentOrders.value.length) {
        _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(copy).dashboard.noOrders)}</p>`);
      } else {
        _push(`<ul class="mt-4 divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(recentOrders.value, (order) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/user/orders/${order.id}`),
            class: "flex flex-wrap items-center justify-between gap-3 py-3 text-sm hover:text-blue-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="min-w-0 truncate font-semibold text-slate-800"${_scopeId}>${ssrInterpolate(order.productName || order.id)}</span><span class="flex items-center gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: unref(payStatusColor)(order.payStatus),
                  variant: "subtle"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(payStatusLabel)(order.payStatus))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(payStatusLabel)(order.payStatus)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<span class="font-mono font-bold text-slate-900"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</span></span>`);
              } else {
                return [
                  createVNode("span", { class: "min-w-0 truncate font-semibold text-slate-800" }, toDisplayString(order.productName || order.id), 1),
                  createVNode("span", { class: "flex items-center gap-3" }, [
                    createVNode(_component_UBadge, {
                      color: unref(payStatusColor)(order.payStatus),
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(payStatusLabel)(order.payStatus)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("span", { class: "font-mono font-bold text-slate-900" }, toDisplayString(unref(formatCurrencyAmount)(order.amount, order.currency)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-BsdVqsa4.mjs.map
