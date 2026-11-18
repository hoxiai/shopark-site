import __nuxt_component_0 from './ShoparkConsoleHeader-D-VQHPXh.mjs';
import { aO as useLocaleCurrency, l as useFormatTime, E as useLocaleRouter, bo as useCustomerAuth, a as useToast, y as useFetch, bm as useSeoMeta, j as _sfc_main$10, d as _sfc_main$X, v as _sfc_main$z, _ as _sfc_main$R, p as _sfc_main$u, f as _sfc_main$L } from './server.mjs';
import __nuxt_component_9 from './ShoparkCheckoutModal-DioNwxHu.mjs';
import __nuxt_component_7 from './ShoparkPlanCards-BFvI_i1h.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useShoparkPlanName, S as SHOPARK_PLAN_CATALOG, i as isShoparkPlanKey } from './useShoparkPlanName-DlYj_Dxm.mjs';
import { useRoute } from 'vue-router';
import { u as useShoparkConsoleCopy, f as formatCopy, a as formatPlanPeriod } from './useShoparkConsole-DzX_-4La.mjs';
import { u as useShoparkPlans } from './useShoparkPlans-Bgwa0LAo.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
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
import './zh-HK-CUSfhUsP.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subscription",
  __ssrInlineRender: true,
  setup(__props) {
    const { planName } = useShoparkPlanName();
    const { copy } = useShoparkConsoleCopy();
    const { formatAmount } = useLocaleCurrency();
    const { formatDate } = useFormatTime();
    const { localePath } = useLocaleRouter();
    const { loggedIn } = useCustomerAuth();
    const route = useRoute();
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
        query: { page: 1, limit: 50 }
      },
      "$LXnl-7vScc"
      /* nuxt-injected */
    );
    const { plans, status: plansStatus, refresh: refreshPlans } = useShoparkPlans();
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const seats = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlement.value) == null ? void 0 : _a.subscriptions) != null ? _b : [];
    });
    const primarySeat = computed(() => {
      var _a;
      return (_a = seats.value[0]) != null ? _a : null;
    });
    const isPaid = computed(() => {
      var _a;
      return ((_a = entitlement.value) == null ? void 0 : _a.source) === "subscription" && Boolean(entitlement.value.subscription);
    });
    const storesList = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = storesData.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) != null ? _c : [];
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
    const billingList = computed(() => {
      var _a, _b;
      if (Array.isArray((_a = subscriptionData.value) == null ? void 0 : _a.list)) return subscriptionData.value.list;
      return ((_b = subscriptionData.value) == null ? void 0 : _b.data) ? [subscriptionData.value.data] : [];
    });
    const billingMap = computed(() => new Map(billingList.value.map((item) => [item.id, item])));
    const subscription = computed(() => {
      var _a, _b, _c;
      const targetId = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.id;
      if (!targetId) return null;
      return (_c = billingMap.value.get(targetId)) != null ? _c : null;
    });
    const isManualGrant = computed(
      () => Boolean(subscription.value && Number(subscription.value.amount) === 0 && subscription.value.interval === "day")
    );
    const currentProductId = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.productId) != null ? _c : null;
    });
    const currentPlanName = computed(() => entitlement.value ? planName(entitlement.value.planKey, entitlement.value.planCode) : "");
    const seatPlanBreakdown = computed(() => {
      const groups = /* @__PURE__ */ new Map();
      for (const seat of seats.value) {
        const label = planName(seat.planKey, seat.planCode);
        const existing = groups.get(seat.planKey);
        if (existing) existing.count += 1;
        else groups.set(seat.planKey, { planKey: seat.planKey, label, count: 1 });
      }
      return Array.from(groups.values());
    });
    const planSummaryTitle = computed(() => {
      if (seatPlanBreakdown.value.length > 1) {
        return seatPlanBreakdown.value.map((g) => g.count > 1 ? `${g.label} \xD7${g.count}` : g.label).join(" + ");
      }
      return currentPlanName.value;
    });
    const ownedSeatCounts = computed(() => {
      const counts = {};
      for (const seat of seats.value) {
        counts[seat.planKey] = (counts[seat.planKey] || 0) + 1;
      }
      return counts;
    });
    const currentPlanCatalog = computed(() => {
      var _a;
      const key = (_a = entitlement.value) == null ? void 0 : _a.planKey;
      return key && isShoparkPlanKey(key) ? SHOPARK_PLAN_CATALOG[key] : null;
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
    const findPlanProduct = (productId, planKey) => {
      if (!plans.value.length) return null;
      const exact = plans.value.find((plan) => plan.id === productId);
      if (exact) return exact;
      return plans.value.find((plan) => plan.planKey === planKey && plan.interval === "month") || plans.value.find((plan) => plan.planKey === planKey) || null;
    };
    const renewTargetPlan = computed(() => {
      var _a;
      if (!isPaid.value || !entitlement.value) return null;
      return findPlanProduct((_a = currentProductId.value) != null ? _a : 0, entitlement.value.planKey);
    });
    const enrichedSeats = computed(() => {
      const storeById = new Map(storesList.value.map((s) => [Number(s.id), s]));
      const storeBySubId = new Map(
        storesList.value.filter((s) => typeof s.subscriptionId === "string" && s.subscriptionId).map((s) => [String(s.subscriptionId), s])
      );
      return seats.value.map((seat) => {
        var _a;
        const billing = (_a = billingMap.value.get(seat.id)) != null ? _a : null;
        const isManual = Boolean(billing && Number(billing.amount) === 0 && billing.interval === "day");
        const boundStore = (seat.storeId ? storeById.get(seat.storeId) : null) || storeBySubId.get(seat.id) || null;
        return {
          ...seat,
          storeId: boundStore ? boundStore.id : seat.storeId,
          boundStore,
          billing,
          isManual,
          renewPlan: findPlanProduct(seat.productId, seat.planKey)
        };
      });
    });
    const purchaseMode = ref("new_seat");
    const selectedTargetStoreId = ref(void 0);
    const targetStoreOptions = computed(
      () => storesList.value.map((store) => ({
        label: `${store.name} (${planName(store.planKey, store.edition)})`,
        value: store.id
      }))
    );
    watch(
      [() => route.query.storeId, () => route.query.mode, storesList, seats],
      ([rawStoreId, rawMode, stores, activeSeats]) => {
        const queryStoreId = Number(Array.isArray(rawStoreId) ? rawStoreId[0] : rawStoreId);
        if (Number.isInteger(queryStoreId) && queryStoreId > 0 && stores.some((s) => s.id === queryStoreId)) {
          purchaseMode.value = "target";
          selectedTargetStoreId.value = queryStoreId;
          return;
        }
        if (rawMode === "new_seat") {
          purchaseMode.value = "new_seat";
          return;
        }
        if (!selectedTargetStoreId.value && stores[0]) {
          selectedTargetStoreId.value = stores[0].id;
        }
        if (activeSeats.length === 0 && stores.length === 1) {
          purchaseMode.value = "target";
          selectedTargetStoreId.value = stores[0].id;
        }
      },
      { immediate: true }
    );
    const selectedStoreSeat = computed(() => {
      var _a;
      if (purchaseMode.value !== "target" || !selectedTargetStoreId.value) return null;
      return (_a = enrichedSeats.value.find((seat) => seat.storeId === selectedTargetStoreId.value)) != null ? _a : null;
    });
    const selectedStoreRow = computed(() => {
      var _a;
      if (purchaseMode.value !== "target" || !selectedTargetStoreId.value) return null;
      return (_a = storesList.value.find((s) => s.id === selectedTargetStoreId.value)) != null ? _a : null;
    });
    const cardSubscriptionMode = computed(() => {
      if (purchaseMode.value === "new_seat") return "new_seat";
      return "upgrade";
    });
    const cardTargetSubscriptionId = computed(() => {
      var _a;
      return (_a = selectedStoreSeat.value) == null ? void 0 : _a.id;
    });
    const cardTargetStoreId = computed(() => {
      var _a;
      return purchaseMode.value === "target" ? (_a = selectedTargetStoreId.value) != null ? _a : null : null;
    });
    const cardCurrentStorePlanKey = computed(() => {
      var _a, _b;
      if (purchaseMode.value === "new_seat") return "free";
      if (selectedStoreSeat.value) return selectedStoreSeat.value.planKey;
      if ((_a = selectedStoreRow.value) == null ? void 0 : _a.trial) return "free";
      return ((_b = selectedStoreRow.value) == null ? void 0 : _b.planKey) || "free";
    });
    const cardCurrentProductId = computed(() => {
      var _a, _b;
      if (purchaseMode.value === "new_seat") return null;
      return (_b = (_a = selectedStoreSeat.value) == null ? void 0 : _a.productId) != null ? _b : null;
    });
    const cardCurrentLevel = computed(() => {
      if (purchaseMode.value === "new_seat") return null;
      const key = cardCurrentStorePlanKey.value;
      return key && isShoparkPlanKey(key) && key !== "free" ? SHOPARK_PLAN_CATALOG[key].rank : null;
    });
    const selectNewSeatPurchase = () => {
      purchaseMode.value = "new_seat";
    };
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
    const cancelTargetSeat = ref(null);
    const openCancelSeat = (seat) => {
      cancelTargetSeat.value = seat;
      isCancelOpen.value = true;
    };
    const cancelRenewal = async () => {
      var _a, _b, _c, _d, _e, _f;
      cancelling.value = true;
      try {
        const targetId = ((_a = cancelTargetSeat.value) == null ? void 0 : _a.id) || ((_c = (_b = entitlement.value) == null ? void 0 : _b.subscription) == null ? void 0 : _c.id);
        const targetEnd = ((_d = cancelTargetSeat.value) == null ? void 0 : _d.currentPeriodEnd) || ((_f = (_e = entitlement.value) == null ? void 0 : _e.subscription) == null ? void 0 : _f.currentPeriodEnd);
        await $fetch("/api/users/subscription/cancel", {
          method: "POST",
          body: targetId ? { subscriptionId: targetId } : void 0
        });
        isCancelOpen.value = false;
        await Promise.all([refreshEntitlement(), refreshSubscription()]);
        toast.add({
          title: formatCopy(copy.value.subscription.cancelled, { date: targetEnd ? formatDate(targetEnd) : periodEnd.value }),
          color: "success"
        });
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_ShoparkConsoleHeader = __nuxt_component_0;
      const _component_UIcon = _sfc_main$10;
      const _component_ShoparkCheckoutModal = __nuxt_component_9;
      const _component_UButton = _sfc_main$X;
      const _component_UAlert = _sfc_main$z;
      const _component_UBadge = _sfc_main$R;
      const _component_USelect = _sfc_main$u;
      const _component_ShoparkPlanCards = __nuxt_component_7;
      const _component_UModal = _sfc_main$L;
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
        if (unref(loggedIn) && renewTargetPlan.value && primarySeat.value) {
          _push(`<div class="shrink-0">`);
          _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
            "product-id": renewTargetPlan.value.id,
            "plan-key": renewTargetPlan.value.planKey,
            "subscription-mode": "renew",
            "target-subscription-id": primarySeat.value.id,
            "shopark-store-id": primarySeat.value.storeId,
            "current-store-plan-key": primarySeat.value.planKey,
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
        if (isPaid.value && seats.value.length > 1) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "primary",
            variant: "soft",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2;
              if (_push2) {
                _push2(`${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.storesIncluded, { count: (_b2 = (_a2 = entitlement.value) == null ? void 0 : _a2.maxStores) != null ? _b2 : seats.value.length }))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(formatCopy)(unref(copy).subscription.storesIncluded, { count: (_d2 = (_c2 = entitlement.value) == null ? void 0 : _c2.maxStores) != null ? _d2 : seats.value.length })), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
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
        _push(`</div><h2 class="mt-1 truncate text-2xl font-black text-slate-950">${ssrInterpolate(isPaid.value ? planSummaryTitle.value : isTrialActive.value ? unref(copy).plan.trial : ((_a = trial.value) == null ? void 0 : _a.expired) ? unref(copy).plan.trialExpired : unref(copy).subscription.freeTitle)}</h2>`);
        if (isPaid.value && seatPlanBreakdown.value.length > 0) {
          _push(`<div class="mt-2 flex flex-wrap items-center gap-1.5"><!--[-->`);
          ssrRenderList(seatPlanBreakdown.value, (group) => {
            _push(ssrRenderComponent(_component_UBadge, {
              key: group.planKey,
              color: "primary",
              variant: "subtle",
              size: "xs"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(group.count > 1 ? `${group.label} \xD7${group.count}` : group.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(group.count > 1 ? `${group.label} \xD7${group.count}` : group.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="mt-2 text-sm leading-6 text-slate-500">`);
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
      _push(`</section>`);
      if (seats.value.length > 0) {
        _push(`<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"><div class="flex flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:stack-duotone",
          class: "h-5 w-5 text-blue-600"
        }, null, _parent));
        _push(`<h2 class="text-base font-black text-slate-950">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.seatsSectionTitle, { count: seats.value.length }))}</h2></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          variant: "soft",
          size: "xs",
          icon: "ph:plus-bold",
          class: "rounded-full font-bold",
          onClick: selectNewSeatPurchase
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).subscription.buySeatAction)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).subscription.buySeatAction), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid gap-3 md:grid-cols-2"><!--[-->`);
        ssrRenderList(enrichedSeats.value, (seat) => {
          _push(`<div class="flex flex-col justify-between gap-3 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4"><div class="space-y-1.5"><div class="flex flex-wrap items-center justify-between gap-2"><div class="flex flex-wrap items-center gap-2"><span class="font-black text-slate-950">${ssrInterpolate(unref(planName)(seat.planKey, seat.planCode))}</span>`);
          if (seat.isManual) {
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
              _: 2
            }, _parent));
          } else if (seat.cancelAtPeriodEnd) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "warning",
              variant: "subtle",
              size: "xs"
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
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span class="font-mono text-xs text-slate-400">#${ssrInterpolate(seat.id.slice(0, 8))}</span></div><p class="text-xs text-slate-600">`);
          if (seat.boundStore) {
            _push(`<span class="font-semibold text-slate-800">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.seatBoundTo, { store: `${seat.boundStore.name} (${seat.boundStore.domain})` }))}</span>`);
          } else {
            _push(`<span class="font-semibold text-emerald-700">${ssrInterpolate(unref(copy).subscription.seatUnassigned)}</span>`);
          }
          _push(`</p><p class="text-xs text-slate-500">${ssrInterpolate(unref(formatCopy)(seat.cancelAtPeriodEnd && !seat.isManual ? unref(copy).plan.endsOn : unref(copy).plan.validUntil, { date: unref(formatDate)(seat.currentPeriodEnd) }))} `);
          if (seat.billing && !seat.isManual) {
            _push(`<!--[--> \xB7 ${ssrInterpolate(unref(formatAmount)(seat.billing.amount))} / ${ssrInterpolate(unref(formatPlanPeriod)(unref(copy), seat.billing.interval, seat.billing.intervalCount))}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div><div class="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-3"><div class="flex flex-wrap items-center gap-2">`);
          if (!seat.boundStore) {
            _push(ssrRenderComponent(_component_UButton, {
              to: `${unref(localePath)("/user/stores")}?create=1&seatId=${encodeURIComponent(seat.id)}`,
              size: "xs",
              color: "primary",
              class: "rounded-full font-bold",
              icon: "ph:storefront-bold"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.useSeatCreateStore)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.useSeatCreateStore), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(loggedIn) && seat.renewPlan) {
            _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
              "product-id": seat.renewPlan.id,
              "plan-key": seat.renewPlan.planKey,
              "subscription-mode": "renew",
              "target-subscription-id": seat.id,
              "shopark-store-id": seat.storeId,
              "current-store-plan-key": seat.planKey,
              onSuccess: handlePurchased
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "primary",
                    variant: "soft",
                    class: "rounded-full font-bold",
                    icon: "ph:arrows-clockwise-bold",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(copy).subscription.renew)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).subscription.renew), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "primary",
                      variant: "soft",
                      class: "rounded-full font-bold",
                      icon: "ph:arrows-clockwise-bold",
                      loading,
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).subscription.renew), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (!seat.isManual && !seat.cancelAtPeriodEnd) {
            _push(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "ghost",
              class: "rounded-full text-slate-500 hover:text-rose-600",
              icon: "ph:prohibit-bold",
              onClick: ($event) => openCancelSeat(seat)
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
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section id="shopark-plan-picker" class="space-y-4"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 class="text-lg font-black text-slate-950">${ssrInterpolate(unref(copy).subscription.choosePlan)}</h2>`);
      if (unref(loggedIn) && (seats.value.length > 0 || storesList.value.length > 0)) {
        _push(`<div class="flex flex-wrap items-center gap-2"><div class="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-xs"><button type="button" class="${ssrRenderClass([purchaseMode.value === "new_seat" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-950", "rounded-full px-3.5 py-1.5 font-bold transition cursor-pointer"])}">${ssrInterpolate(unref(copy).subscription.modeNewSeat)}</button>`);
        if (targetStoreOptions.value.length > 0) {
          _push(`<button type="button" class="${ssrRenderClass([purchaseMode.value === "target" ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-950", "rounded-full px-3.5 py-1.5 font-bold transition cursor-pointer"])}">${ssrInterpolate(unref(copy).subscription.modeTargetStore)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (purchaseMode.value === "target" && targetStoreOptions.value.length > 0) {
          _push(ssrRenderComponent(_component_USelect, {
            modelValue: selectedTargetStoreId.value,
            "onUpdate:modelValue": ($event) => selectedTargetStoreId.value = $event,
            items: targetStoreOptions.value,
            class: "w-56"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ShoparkPlanCards, {
        plans: unref(plans),
        pending: unref(plansStatus) === "pending",
        failed: unref(plansStatus) === "error",
        "logged-in": unref(loggedIn),
        "current-product-id": cardCurrentProductId.value,
        "current-level": cardCurrentLevel.value,
        "subscription-mode": cardSubscriptionMode.value,
        "target-subscription-id": cardTargetSubscriptionId.value,
        "shopark-store-id": cardTargetStoreId.value,
        "current-store-plan-key": cardCurrentStorePlanKey.value,
        "owned-seat-counts": ownedSeatCounts.value,
        onRetry: ($event) => unref(refreshPlans)(),
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
//# sourceMappingURL=subscription-UWYMQMD7.mjs.map
