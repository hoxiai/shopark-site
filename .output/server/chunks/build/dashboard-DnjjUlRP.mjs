import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { D as useLocaleRouter, bi as useCustomerAuth, d as useFormatTime, F as useCurrencyFormat, y as useFetch, bg as useSeoMeta, i as _sfc_main$N, _ as _sfc_main$S, N as __nuxt_component_3$4, k as _sfc_main$I } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyPlanName } from './useShoplyPlanName-ClvbNIbj.mjs';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-D77xzs3r.mjs';
import { u as useShoplyOrderStatus } from './useShoplyOrderStatus-CNTwgVLZ.mjs';
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
    const recentOrders = computed(() => {
      var _a, _b;
      return (_b = (_a = ordersData.value) == null ? void 0 : _a.data) != null ? _b : [];
    });
    useSeoMeta({
      title: () => copy.value.dashboard.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$N;
      const _component_UIcon = _sfc_main$S;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UBadge = _sfc_main$I;
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
      _push(`<section class="grid gap-4 lg:grid-cols-2"><div class="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).dashboard.planCard)}</p>`);
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
          color: "neutral",
          variant: "outline",
          class: "rounded-full font-bold",
          "trailing-icon": "ph:arrow-right-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(isPaid.value ? unref(copy).subscription.details : unref(copy).dashboard.upgrade)}`);
            } else {
              return [
                createTextVNode(toDisplayString(isPaid.value ? unref(copy).subscription.details : unref(copy).dashboard.upgrade), 1)
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
        _push(`<!--[--><p class="mt-3 text-3xl font-black text-slate-950">${ssrInterpolate(storeCount.value)}</p>`);
        if (entitlement.value) {
          _push(`<p class="text-sm text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).dashboard.storesUsage, { owned: storeCount.value, max: storeLimit.value }))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (recentStores.value.length) {
          _push(`<ul class="mt-4 space-y-2"><!--[-->`);
          ssrRenderList(recentStores.value, (store) => {
            _push(`<li class="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm"><span class="truncate font-semibold text-slate-800">${ssrInterpolate(store.name)}</span><span class="truncate text-xs text-slate-500">${ssrInterpolate(store.domain)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(copy).dashboard.noStores)}</p>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section><section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).dashboard.recentOrders)}</h2>`);
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
//# sourceMappingURL=dashboard-DnjjUlRP.mjs.map
