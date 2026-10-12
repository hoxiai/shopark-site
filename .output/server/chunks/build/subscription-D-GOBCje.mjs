import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { R as useLocaleCurrency, d as useFormatTime, bd as useCustomerAuth, e as useToast, w as useFetch, bc as useSeoMeta, _ as _sfc_main$Q, k as _sfc_main$H, i as _sfc_main$L, n as _sfc_main$B } from './server.mjs';
import __nuxt_component_4 from './ShoplyPlanCards-_nCLEJ9S.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy, f as formatCopy, a as formatPlanPeriod } from './useShoplyConsole-Jz-jwtEc.mjs';
import { u as useShoplyPlans } from './useShoplyPlans-B0-PgEve.mjs';
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
import './ShoplyCheckoutModal-a2s8RG7T.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subscription",
  __ssrInlineRender: true,
  setup(__props) {
    const { copy } = useShoplyConsoleCopy();
    const { formatAmount } = useLocaleCurrency();
    const { formatDate } = useFormatTime();
    const { loggedIn } = useCustomerAuth();
    const toast = useToast();
    const { data: entitlementData, error: entitlementError, refresh: refreshEntitlement } = useFetch(
      "/api/shoply/entitlement",
      {
        server: false,
        lazy: true
      },
      "$Sqg3Gzu1-8"
      /* nuxt-injected */
    );
    const { data: subscriptionData, refresh: refreshSubscription } = useFetch(
      "/api/users/subscription",
      {
        server: false,
        lazy: true
      },
      "$sxh9JpZxrH"
      /* nuxt-injected */
    );
    const { plans, status: plansStatus } = useShoplyPlans();
    const entitlement = computed(() => {
      var _a, _b;
      return (_b = (_a = entitlementData.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const isPaid = computed(() => {
      var _a;
      return ((_a = entitlement.value) == null ? void 0 : _a.source) === "subscription" && Boolean(entitlement.value.subscription);
    });
    const subscription = computed(() => {
      var _a, _b, _c;
      const sub = (_a = subscriptionData.value) == null ? void 0 : _a.data;
      return sub && sub.id === ((_c = (_b = entitlement.value) == null ? void 0 : _b.subscription) == null ? void 0 : _c.id) ? sub : null;
    });
    const currentProductId = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.productId) != null ? _c : null;
    });
    const currentPlanName = computed(() => {
      var _a, _b, _c;
      const productId = currentProductId.value;
      return ((_a = plans.value.find((plan) => plan.id === productId)) == null ? void 0 : _a.name) || ((_c = (_b = entitlement.value) == null ? void 0 : _b.subscription) == null ? void 0 : _c.productName) || "";
    });
    const currentLevel = computed(() => {
      var _a, _b;
      const productId = currentProductId.value;
      if (productId === null) return null;
      return (_b = (_a = plans.value.find((plan) => plan.id === productId)) == null ? void 0 : _a.level) != null ? _b : null;
    });
    const periodEnd = computed(() => {
      var _a, _b;
      const end = (_b = (_a = entitlement.value) == null ? void 0 : _a.subscription) == null ? void 0 : _b.currentPeriodEnd;
      return end ? formatDate(end) : copy.value.common.notAvailable;
    });
    const handlePurchased = async () => {
      toast.add({ title: copy.value.subscription.paymentSuccess, color: "success", icon: "ph:check-circle-bold" });
      await Promise.all([refreshEntitlement(), refreshSubscription()]);
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UIcon = _sfc_main$Q;
      const _component_UBadge = _sfc_main$H;
      const _component_UButton = _sfc_main$L;
      const _component_ShoplyPlanCards = __nuxt_component_4;
      const _component_UModal = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).subscription.title,
        subtitle: unref(copy).subscription.subtitle
      }, null, _parent));
      _push(`<section class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">`);
      if (!entitlement.value && !unref(entitlementError)) {
        _push(`<div class="h-40 animate-pulse bg-slate-50"></div>`);
      } else {
        _push(`<div class="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"><div class="flex min-w-0 items-start gap-4"><span class="${ssrRenderClass([isPaid.value ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500", "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: isPaid.value ? "ph:crown-simple-fill" : "ph:leaf-bold",
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><div class="min-w-0"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).subscription.current)}</p><h2 class="mt-1 truncate text-2xl font-black text-slate-950">${ssrInterpolate(isPaid.value ? currentPlanName.value : unref(copy).subscription.freeTitle)}</h2><p class="mt-2 text-sm leading-6 text-slate-500">`);
        if (isPaid.value) {
          _push(`<!--[-->${ssrInterpolate(unref(formatCopy)(unref(copy).plan.storeLimit, { count: (_b = (_a = entitlement.value) == null ? void 0 : _a.maxStores) != null ? _b : 0 }))} \xB7 ${ssrInterpolate(unref(formatCopy)(((_d = (_c = entitlement.value) == null ? void 0 : _c.subscription) == null ? void 0 : _d.cancelAtPeriodEnd) ? unref(copy).plan.endsOn : unref(copy).plan.validUntil, { date: periodEnd.value }))}<!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(unref(copy).subscription.freeDescription)} ${ssrInterpolate(unref(formatCopy)(unref(copy).plan.storeLimit, { count: (_f = (_e = entitlement.value) == null ? void 0 : _e.maxStores) != null ? _f : 0 }))}<!--]-->`);
        }
        _push(`</p></div></div>`);
        if (isPaid.value && subscription.value) {
          _push(`<dl class="grid shrink-0 grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 text-sm sm:grid-cols-3"><div><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.amount)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(unref(formatAmount)(subscription.value.amount))}</dd></div><div><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.cycle)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(unref(formatPlanPeriod)(unref(copy), subscription.value.interval, subscription.value.intervalCount))}</dd></div><div class="col-span-2 sm:col-span-1"><dt class="text-xs text-slate-400">${ssrInterpolate(unref(copy).subscription.validUntil)}</dt><dd class="mt-1 font-bold text-slate-900">${ssrInterpolate(periodEnd.value)}</dd></div></dl>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (isPaid.value) {
        _push(`<div class="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p class="text-sm text-slate-500">`);
        if ((_h = (_g = entitlement.value) == null ? void 0 : _g.subscription) == null ? void 0 : _h.cancelAtPeriodEnd) {
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
        _push(`</p>`);
        if (!((_j = (_i = entitlement.value) == null ? void 0 : _i.subscription) == null ? void 0 : _j.cancelAtPeriodEnd)) {
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="space-y-4"><h2 class="text-lg font-black text-slate-950">${ssrInterpolate(unref(copy).subscription.choosePlan)}</h2>`);
      _push(ssrRenderComponent(_component_ShoplyPlanCards, {
        plans: unref(plans),
        pending: unref(plansStatus) === "pending",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
