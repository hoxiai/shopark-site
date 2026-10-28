import __nuxt_component_0 from './ShoparkConsoleHeader-D-VQHPXh.mjs';
import { V as useLocaleCurrency, d as useFormatTime, bi as useCustomerAuth, e as useToast, y as useFetch, bg as useSeoMeta, _ as _sfc_main$W, i as _sfc_main$R, v as _sfc_main$o, k as _sfc_main$M, n as _sfc_main$G } from './server.mjs';
import __nuxt_component_2 from './ShoparkCheckoutModal-BdRNNhl1.mjs';
import __nuxt_component_6 from './ShoparkPlanCards-WDOkKuv-.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoparkPlanName, S as SHOPARK_PLAN_CATALOG, i as isShoparkPlanKey } from './useShoparkPlanName-DlYj_Dxm.mjs';
import { u as useShoparkConsoleCopy, f as formatCopy, a as formatPlanPeriod } from './useShoparkConsole-R5T7lfU2.mjs';
import { u as useShoparkPlans } from './useShoparkPlans-CEL07kg8.mjs';
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
import './zh-HK-DK-xUlgh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subscription",
  __ssrInlineRender: true,
  setup(__props) {
    const { planName } = useShoparkPlanName();
    const { copy } = useShoparkConsoleCopy();
    const { formatAmount } = useLocaleCurrency();
    const { formatDate } = useFormatTime();
    const { loggedIn } = useCustomerAuth();
    const toast = useToast();
    const { data: entitlementData, error: entitlementError, refresh: refreshEntitlement } = useFetch(
      "/api/shopark/entitlement",
      {
        server: false,
        lazy: true
      },
      "$-6PN2yJPS_"
      /* nuxt-injected */
    );
    const { data: subscriptionData, refresh: refreshSubscription } = useFetch(
      "/api/users/subscription",
      {
        server: false,
        lazy: true
      },
      "$xMFyLtXB4a"
      /* nuxt-injected */
    );
    const { data: storesData, refresh: refreshStores } = useFetch(
      "/api/shopark/stores",
      {
        server: false,
        lazy: true,
        query: { page: 1, limit: 1 }
      },
      "$LXnl-7vScc"
      /* nuxt-injected */
    );
    const { plans, status: plansStatus, refresh: refreshPlans } = useShoparkPlans();
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const isPaid = computed(() => {
      var _a;
      return ((_a = entitlement.value) == null ? void 0 : _a.source) === "subscription" && Boolean(entitlement.value.subscription);
    });
    const storeQuota = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.quota) != null ? _c : null;
    });
    const trial = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.trial) != null ? _c : null;
    });
    const isTrialActive = computed(() => {
      var _a;
      return !isPaid.value && Boolean((_a = trial.value) == null ? void 0 : _a.active);
    });
    const subscription = computed(() => {
      var _a, _b, _c;
      const sub = (_a = subscriptionData.value) == null ? void 0 : _a.data;
      return sub && sub.id === ((_c = (_b = entitlement.value) == null ? void 0 : _b.subscription) == null ? void 0 : _c.id) ? sub : null;
    });
    const isManualGrant = computed(
      () => Boolean(subscription.value && Number(subscription.value.amount) === 0 && subscription.value.interval === "day")
    );
    const currentProductId = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.productId) != null ? _c : null;
    });
    const currentPlanName = computed(() => entitlement.value ? planName(entitlement.value.planKey, entitlement.value.planCode) : "");
    const currentPlanCatalog = computed(() => {
      var _a;
      const key = (_a = entitlement.value) == null ? void 0 : _a.planKey;
      return key && isShoparkPlanKey(key) ? SHOPARK_PLAN_CATALOG[key] : null;
    });
    const currentLevel = computed(() => {
      var _a, _b;
      return (_b = (_a = currentPlanCatalog.value) == null ? void 0 : _a.rank) != null ? _b : null;
    });
    const periodEnd = computed(() => {
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
    const renewTargetPlan = computed(() => {
      var _a;
      if (!isPaid.value || !plans.value.length) return null;
      if (currentProductId.value !== null) {
        const exact = plans.value.find((plan) => plan.id === currentProductId.value);
        if (exact) return exact;
      }
      const key = (_a = entitlement.value) == null ? void 0 : _a.planKey;
      if (!key) return null;
      return plans.value.find((plan) => plan.planKey === key && plan.interval === "month") || plans.value.find((plan) => plan.planKey === key) || null;
    });
    function formatStorage(bytes) {
      if (bytes >= 1e9) return `${Math.round(bytes / 1e9)} GB`;
      if (bytes >= 1e6) return `${Math.round(bytes / 1e6)} MB`;
      return `${bytes} B`;
    }
    const handlePurchased = async () => {
      toast.add({ title: copy.value.subscription.paymentSuccess, color: "success", icon: "ph:check-circle-bold" });
      await Promise.all([refreshEntitlement(), refreshSubscription(), refreshStores()]);
    };
    const isCancelOpen = ref(false);
    const cancelling = ref(false);
    const cancelRenewal = async () => {
      cancelling.value = true;
      try {
        await $fetch("/api/users/subscription/cancel", { method: "POST" });
        isCancelOpen.value = false;
        await refreshEntitlement();
        toast.add({ title: formatCopy(copy.value.subscription.cancelled, { date: periodEnd.value }), color: "success" });
      } catch {
        toast.add({ title: copy.value.subscription.cancelFailed, color: "error" });
      } finally {
        cancelling.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.subscription.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_ShoparkConsoleHeader = __nuxt_component_0;
      const _component_UIcon = _sfc_main$W;
      const _component_ShoparkCheckoutModal = __nuxt_component_2;
      const _component_UButton = _sfc_main$R;
      const _component_UAlert = _sfc_main$o;
      const _component_UBadge = _sfc_main$M;
      const _component_ShoparkPlanCards = __nuxt_component_6;
      const _component_UModal = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoparkConsoleHeader, {
        title: unref(copy).subscription.title,
        subtitle: unref(copy).subscription.subtitle
      }, null, _parent));
      if (isExpiringSoon.value && daysRemaining.value !== null) {
        _push(`<div class="flex flex-col justify-between gap-4 rounded-3xl border border-amber-200 bg-amber-50/90 p-5 sm:flex-row sm:items-center sm:px-6"><div class="flex items-start gap-3.5 min-w-0"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:alarm-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-sm font-black text-amber-950">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.expiringBannerTitle, { plan: currentPlanName.value, days: daysRemaining.value, date: periodEnd.value }))}</p><p class="mt-1 text-xs leading-5 text-amber-800">${ssrInterpolate(unref(copy).subscription.expiringBannerDesc)}</p></div></div>`);
        if (unref(loggedIn) && renewTargetPlan.value) {
          _push(`<div class="shrink-0">`);
          _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
            "product-id": renewTargetPlan.value.id,
            "plan-key": renewTargetPlan.value.planKey,
            onSuccess: handlePurchased
          }, {
            trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "warning",
                  class: "rounded-full px-5 font-bold",
                  icon: "ph:arrows-clockwise-bold",
                  loading,
                  onClick: open
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).subscription.renewCurrent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).subscription.renewCurrent), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    color: "warning",
                    class: "rounded-full px-5 font-bold",
                    icon: "ph:arrows-clockwise-bold",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).subscription.renewCurrent), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">`);
      if (!entitlement.value && !unref(entitlementError)) {
        _push(`<div class="h-40 animate-pulse bg-slate-50"></div>`);
      } else if (unref(entitlementError)) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: unref(copy).subscription.loadFailed
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(refreshEntitlement)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).common.retry)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => unref(refreshEntitlement)()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"><div class="flex min-w-0 items-start gap-4"><span class="${ssrRenderClass([isPaid.value ? "bg-blue-600 text-white" : isTrialActive.value ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500", "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: isPaid.value ? "ph:crown-simple-fill" : isTrialActive.value ? "ph:sparkle-bold" : "ph:leaf-bold",
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).subscription.current)}</p>`);
        if (isPaid.value && isManualGrant.value) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).subscription.manualGrant)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).subscription.manualGrant), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
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
        _push(`</div><h2 class="mt-1 truncate text-2xl font-black text-slate-950">${ssrInterpolate(isPaid.value ? currentPlanName.value : isTrialActive.value ? unref(copy).plan.trial : ((_a = trial.value) == null ? void 0 : _a.expired) ? unref(copy).plan.trialExpired : unref(copy).subscription.freeTitle)}</h2><p class="mt-2 text-sm leading-6 text-slate-500">`);
        if (isPaid.value) {
          _push(`<!--[-->${ssrInterpolate(unref(formatCopy)(((_c = (_b = entitlement.value) == null ? void 0 : _b.subscription) == null ? void 0 : _c.cancelAtPeriodEnd) && !isManualGrant.value ? unref(copy).plan.endsOn : unref(copy).plan.validUntil, { date: periodEnd.value }))}<!--]-->`);
        } else if (isTrialActive.value && ((_d = trial.value) == null ? void 0 : _d.endsAt)) {
          _push(`<!--[-->${ssrInterpolate(unref(formatCopy)(unref(copy).plan.trialEndsOn, { date: unref(formatDate)(trial.value.endsAt) }))}<!--]-->`);
        } else if ((_e = trial.value) == null ? void 0 : _e.expired) {
          _push(`<!--[-->${ssrInterpolate(unref(copy).plan.trialExpiredDescription)}<!--]-->`);
        } else if ((_f = trial.value) == null ? void 0 : _f.eligible) {
          _push(`<!--[-->${ssrInterpolate(unref(copy).plan.trialEligible)}<!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(unref(copy).subscription.freeDescription)}<!--]-->`);
        }
        _push(`</p></div></div>`);
        if (isPaid.value && subscription.value) {
          _push(`<dl class="grid shrink-0 grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 text-sm sm:grid-cols-3"><div><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.amount)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(isManualGrant.value ? unref(copy).subscription.manualGrant : unref(formatAmount)(subscription.value.amount))}</dd></div><div><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.cycle)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(unref(formatPlanPeriod)(unref(copy), subscription.value.interval, subscription.value.intervalCount))}</dd></div><div class="col-span-2 sm:col-span-1"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.validUntil)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(periodEnd.value)}</dd></div></dl>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (isPaid.value && currentPlanCatalog.value) {
        _push(`<div class="grid grid-cols-2 gap-4 border-t border-slate-100 bg-slate-50/40 px-6 py-4 text-sm sm:grid-cols-4 sm:px-8"><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.quotaStores)}</p><p class="mt-1 font-bold text-slate-900">`);
        if (storeQuota.value) {
          _push(`<!--[-->${ssrInterpolate(storeQuota.value.owned)} / ${ssrInterpolate((_h = (_g = entitlement.value) == null ? void 0 : _g.maxStores) != null ? _h : storeQuota.value.planMaxStores)}<!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.storesIncluded, { count: (_j = (_i = entitlement.value) == null ? void 0 : _i.maxStores) != null ? _j : 1 }))}<!--]-->`);
        }
        _push(`</p></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.quotaProducts)}</p><p class="mt-1 font-bold text-slate-900">${ssrInterpolate(currentPlanCatalog.value.products.toLocaleString())}</p></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.quotaDomainsStaff)}</p><p class="mt-1 font-bold text-slate-900">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.domainsStaffValue, { domains: currentPlanCatalog.value.domains, staff: currentPlanCatalog.value.staff }))}</p></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.quotaStorageAi)}</p><p class="mt-1 font-bold text-slate-900">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.storageAiValue, { storage: formatStorage(currentPlanCatalog.value.storageBytes), ai: currentPlanCatalog.value.aiMonthly.toLocaleString() }))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isPaid.value && (renewTargetPlan.value || !isManualGrant.value || !((_l = (_k = entitlement.value) == null ? void 0 : _k.subscription) == null ? void 0 : _l.cancelAtPeriodEnd))) {
        _push(`<div class="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div class="flex flex-wrap items-center gap-2 text-sm text-slate-500">`);
        if (((_n = (_m = entitlement.value) == null ? void 0 : _m.subscription) == null ? void 0 : _n.cancelAtPeriodEnd) && !isManualGrant.value) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "warning",
            variant: "subtle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).plan.cancelling)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).plan.cancelling), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-wrap items-center gap-2">`);
        if (unref(loggedIn) && renewTargetPlan.value) {
          _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
            "product-id": renewTargetPlan.value.id,
            "plan-key": renewTargetPlan.value.planKey,
            onSuccess: handlePurchased
          }, {
            trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  class: "rounded-full font-bold",
                  icon: "ph:arrows-clockwise-bold",
                  loading,
                  onClick: open
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).subscription.renewCurrent)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).subscription.renewCurrent), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "soft",
                    class: "rounded-full font-bold",
                    icon: "ph:arrows-clockwise-bold",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).subscription.renewCurrent), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!isManualGrant.value && !((_p = (_o = entitlement.value) == null ? void 0 : _o.subscription) == null ? void 0 : _p.cancelAtPeriodEnd)) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            class: "self-start rounded-full text-slate-500 hover:text-rose-600 sm:self-auto",
            icon: "ph:prohibit-bold",
            onClick: ($event) => isCancelOpen.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).subscription.cancelAction)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).subscription.cancelAction), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="space-y-4"><h2 class="text-lg font-black text-slate-950">${ssrInterpolate(unref(copy).subscription.choosePlan)}</h2>`);
      _push(ssrRenderComponent(_component_ShoparkPlanCards, {
        plans: unref(plans),
        pending: unref(plansStatus) === "pending",
        failed: unref(plansStatus) === "error",
        onRetry: ($event) => unref(refreshPlans)(),
        "logged-in": unref(loggedIn),
        "current-product-id": currentProductId.value,
        "current-level": currentLevel.value,
        onPurchased: handlePurchased
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isCancelOpen.value,
        "onUpdate:open": ($event) => isCancelOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-md rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 sm:p-7"${_scopeId}><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-bold",
              class: "h-6 w-6"
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="mt-4 text-lg font-black text-slate-950"${_scopeId}>${ssrInterpolate(unref(copy).subscription.cancelTitle)}</h2><p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(unref(copy).subscription.cancelDescription)}</p><div class="mt-6 flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              class: "rounded-full",
              onClick: ($event) => isCancelOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).subscription.keepPlan)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.keepPlan), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              class: "rounded-full font-bold",
              loading: cancelling.value,
              onClick: cancelRenewal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).subscription.cancelAction)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.cancelAction), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 sm:p-7" }, [
                createVNode("span", { class: "flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:warning-bold",
                    class: "h-6 w-6"
                  })
                ]),
                createVNode("h2", { class: "mt-4 text-lg font-black text-slate-950" }, toDisplayString(unref(copy).subscription.cancelTitle), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(unref(copy).subscription.cancelDescription), 1),
                createVNode("div", { class: "mt-6 flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    class: "rounded-full",
                    onClick: ($event) => isCancelOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).subscription.keepPlan), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    class: "rounded-full font-bold",
                    loading: cancelling.value,
                    onClick: cancelRenewal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).subscription.cancelAction), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/user/subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=subscription-dymUG8gF.mjs.map
